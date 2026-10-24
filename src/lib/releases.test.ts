import { describe, expect, it, vi } from "vite-plus/test";
import { createReleaseClient, parseRelease } from "./releases";

const githubRelease = (version = "4.49.3") => ({
  tag_name: `v${version}`,
  html_url: `https://github.com/easyinplay/harnessed/releases/tag/v${version}`,
  published_at: "2026-10-24T00:00:00Z",
  draft: false,
  prerelease: false,
});
const response = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status });

describe("stable release parsing", () => {
  it("normalizes the public release tag and canonical link", () => {
    expect(parseRelease(githubRelease())).toEqual({
      version: "4.49.3",
      url: "https://github.com/easyinplay/harnessed/releases/tag/v4.49.3",
      publishedAt: "2026-10-24T00:00:00Z",
    });
  });
  it.each([
    { ...githubRelease(), draft: true },
    { ...githubRelease(), prerelease: true },
    githubRelease("5.0.0-beta.1"),
    githubRelease("05.0.0"),
    { ...githubRelease(), html_url: "https://example.com/release" },
    { ...githubRelease(), published_at: null },
    { ...githubRelease(), published_at: "invalid" },
    { tag_name: "v5.0.0" },
    null,
  ])("rejects unpublished, non-stable or malformed metadata: %j", (body) => {
    expect(parseRelease(body)).toBeNull();
  });
});

describe("shared release cache", () => {
  it("coalesces concurrent calls and reuses success for 15 minutes", async () => {
    let calls = 0;
    let now = 0;
    const client = createReleaseClient({
      now: () => now,
      fetchImpl: async (url) => {
        expect(url).toBe("https://api.github.com/repos/easyinplay/harnessed/releases/latest");
        calls++;
        return response(githubRelease());
      },
    });
    const values = await Promise.all([client.get(), client.get(), client.get()]);
    expect(values.map((release) => release.version)).toEqual(["4.49.3", "4.49.3", "4.49.3"]);
    expect(calls).toBe(1);
    now = 899_999;
    expect((await client.get()).version).toBe("4.49.3");
    expect(calls).toBe(1);
    now = 900_000;
    await client.get();
    expect(calls).toBe(2);
  });
  it.each([403, 429, 500])("keeps seed and caches HTTP %i failures", async (status) => {
    let calls = 0;
    const client = createReleaseClient({
      fetchImpl: async () => {
        calls++;
        return response({}, status);
      },
    });
    expect((await client.get()).version).toBe("4.49.2");
    expect((await client.get()).version).toBe("4.49.2");
    expect(calls).toBe(1);
  });
  it("keeps last-good after a later network failure", async () => {
    let now = 0;
    const client = createReleaseClient({
      now: () => now,
      fetchImpl: async () => {
        if (now > 0) throw new Error("offline");
        return response(githubRelease());
      },
    });
    await client.get();
    now = 900_001;
    expect((await client.get()).version).toBe("4.49.3");
  });
  it("treats a validated GitHub response as authoritative even below the build seed", async () => {
    const seed = parseRelease(githubRelease("4.49.4"))!;
    const client = createReleaseClient({ seed, fetchImpl: async () => response(githubRelease()) });
    expect((await client.get()).version).toBe("4.49.3");
  });
  it("corrects an expired high-version cache and persists the correction across TTL refreshes", async () => {
    const authoritative = parseRelease(githubRelease())!;
    let serialized = JSON.stringify({
      release: parseRelease(githubRelease("999.0.0")),
      checkedAt: 0,
    });
    let now = 900_001;
    let calls = 0;
    const storage = {
      getItem: () => serialized,
      setItem: (key: string, value: string) => {
        expect(key).toBe("harnessed:stable-release:v1");
        serialized = value;
      },
    };
    const options = {
      storage,
      now: () => now,
      fetchImpl: async () => {
        calls++;
        return response(githubRelease());
      },
    };

    expect(await createReleaseClient(options).get()).toEqual(authoritative);
    expect(JSON.parse(serialized)).toEqual({ release: authoritative, checkedAt: 900_001 });
    now = 1_800_002;
    expect(await createReleaseClient(options).get()).toEqual(authoritative);
    expect(JSON.parse(serialized)).toEqual({ release: authoritative, checkedAt: 1_800_002 });
    expect(calls).toBe(2);
  });
  it("honors a fresh cached API correction below the build seed without resurrecting it", async () => {
    const authoritative = parseRelease(githubRelease())!;
    const fetchImpl = vi.fn(async () => response(githubRelease()));
    const client = createReleaseClient({
      seed: parseRelease(githubRelease("4.49.4"))!,
      now: () => 1,
      storage: {
        getItem: () => JSON.stringify({ release: authoritative, checkedAt: 0 }),
        setItem: () => {},
      },
      fetchImpl,
    });

    expect(await client.get()).toEqual(authoritative);
    expect(fetchImpl).not.toHaveBeenCalled();
  });
  it.each([{ draft: true }, { prerelease: true }])(
    "does not overwrite last-good cache with a non-public release: %j",
    async (flags) => {
      const lastGood = parseRelease(githubRelease("4.49.4"))!;
      let serialized = JSON.stringify({ release: lastGood, checkedAt: 0 });
      const client = createReleaseClient({
        now: () => 900_001,
        storage: {
          getItem: () => serialized,
          setItem: (_key: string, value: string) => {
            serialized = value;
          },
        },
        fetchImpl: async () => response({ ...githubRelease(), ...flags }),
      });

      expect(await client.get()).toEqual(lastGood);
      expect(JSON.parse(serialized).release).toEqual(lastGood);
    },
  );
  it.each([{}, { ...githubRelease(), prerelease: true }, "invalid-json"])(
    "retains last-good for invalid payload: %j",
    async (body) => {
      const client = createReleaseClient({
        fetchImpl: async () => (body === "invalid-json" ? new Response("{") : response(body)),
      });
      expect((await client.get()).version).toBe("4.49.2");
    },
  );
  it("bounds a stalled request even when transport ignores abort", async () => {
    vi.useFakeTimers();
    try {
      const client = createReleaseClient({ timeoutMs: 30, fetchImpl: () => new Promise(() => {}) });
      const pending = client.get();
      await vi.advanceTimersByTimeAsync(31);
      expect((await pending).version).toBe("4.49.2");
    } finally {
      vi.useRealTimers();
    }
  });
  it("persists last-good and restores it on a later offline page load", async () => {
    const values = new Map<string, string>();
    const storage = {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => {
        values.set(key, value);
      },
    };
    const first = createReleaseClient({
      storage,
      now: () => 0,
      fetchImpl: async () => response(githubRelease()),
    });
    await first.get();
    const next = createReleaseClient({
      storage,
      now: () => 900_001,
      fetchImpl: async () => {
        throw new Error("offline");
      },
    });
    expect((await next.get()).version).toBe("4.49.3");
  });
  it("ignores corrupted storage and tolerates privacy-mode storage failures", async () => {
    const client = createReleaseClient({
      storage: {
        getItem: () => "{",
        setItem: () => {
          throw new Error("denied");
        },
      },
      fetchImpl: async () => response(githubRelease()),
    });
    expect((await client.get()).version).toBe("4.49.3");
  });
});
