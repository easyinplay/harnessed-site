import releaseSeed from "./releaseSeed.json";

export interface Release {
  version: string;
  url: string;
  publishedAt: string;
}

const RELEASES = "https://github.com/easyinplay/harnessed/releases/tag/";
const API = "https://api.github.com/repos/easyinplay/harnessed/releases/latest";
const CACHE_KEY = "harnessed:stable-release:v1";
export const RELEASE_CACHE_MS = 15 * 60 * 1000;
const stableVersion = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

export function parseRelease(value: unknown): Release | null {
  if (!value || typeof value !== "object") return null;
  const data = value as Record<string, unknown>;
  if (data.draft !== false || data.prerelease !== false || typeof data.tag_name !== "string")
    return null;
  const version = data.tag_name.replace(/^v/, "");
  if (
    !stableVersion.test(version) ||
    data.html_url !== `${RELEASES}${data.tag_name}` ||
    typeof data.published_at !== "string" ||
    !Number.isFinite(Date.parse(data.published_at))
  )
    return null;
  return { version, url: data.html_url, publishedAt: data.published_at };
}

function validMetadata(value: unknown): value is Release {
  if (!value || typeof value !== "object") return false;
  const data = value as Release;
  return (
    typeof data.version === "string" &&
    stableVersion.test(data.version) &&
    (data.url === `${RELEASES}v${data.version}` || data.url === `${RELEASES}${data.version}`) &&
    typeof data.publishedAt === "string" &&
    Number.isFinite(Date.parse(data.publishedAt))
  );
}

interface Options {
  fetchImpl?: typeof fetch;
  now?: () => number;
  seed?: Release;
  storage?: Pick<Storage, "getItem" | "setItem">;
  timeoutMs?: number;
}

export function createReleaseClient({
  fetchImpl = fetch,
  now = Date.now,
  seed = releaseSeed,
  storage,
  timeoutMs = 4000,
}: Options = {}) {
  let lastGood = seed;
  let checkedAt = -Infinity;
  let inFlight: Promise<Release> | undefined;
  try {
    const cached = JSON.parse(storage?.getItem(CACHE_KEY) ?? "null");
    if (cached && validMetadata(cached.release)) {
      lastGood = cached.release;
      if (
        typeof cached.checkedAt === "number" &&
        cached.checkedAt >= 0 &&
        cached.checkedAt <= now()
      ) {
        checkedAt = cached.checkedAt;
      }
    }
  } catch {
    /* Storage is optional in private browsing and offline builds. */
  }

  async function refresh(): Promise<Release> {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      // Bound response parsing too; a transport may ignore AbortSignal.
      const request = async () => {
        const response = await fetchImpl(API, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });
        return response.ok ? parseRelease(await response.json()) : null;
      };
      const timeout = new Promise<null>((resolve) => {
        timer = setTimeout(() => {
          controller.abort();
          resolve(null);
        }, timeoutMs);
      });
      const release = await Promise.race([request(), timeout]);
      // GitHub's selected latest stable release is authoritative, not semver order.
      if (release) lastGood = release;
    } catch {
      /* Keep the build seed or last successful public release. */
    } finally {
      clearTimeout(timer);
      checkedAt = now();
      try {
        storage?.setItem(CACHE_KEY, JSON.stringify({ release: lastGood, checkedAt }));
      } catch {
        /* Cache writes must never hide a valid version. */
      }
    }
    return lastGood;
  }

  return {
    get(): Promise<Release> {
      if (inFlight) return inFlight;
      if (now() - checkedAt < RELEASE_CACHE_MS) return Promise.resolve(lastGood);
      inFlight = refresh().finally(() => {
        inFlight = undefined;
      });
      return inFlight;
    },
  };
}

// One value across Astro components and language pages in the same build.
export const releaseClient = createReleaseClient();

export async function refreshReleaseElements(root: Document = document): Promise<void> {
  const seedElement = root.querySelector<HTMLElement>("[data-release-seed]");
  let seed: Release = releaseSeed;
  try {
    const value = JSON.parse(seedElement?.dataset.releaseSeed ?? "null");
    if (validMetadata(value)) seed = value;
  } catch {
    /* Keep the published seed. */
  }
  let storage: Storage | undefined;
  try {
    storage = window.localStorage;
  } catch {
    /* Storage can be disabled. */
  }
  const release = await createReleaseClient({ seed, storage }).get();
  root.querySelectorAll<HTMLElement>("[data-release-version]").forEach((el) => {
    el.textContent = `v${release.version}`;
  });
  root.querySelectorAll<HTMLAnchorElement>("a[data-release-link]").forEach((el) => {
    el.href = release.url;
  });
}
