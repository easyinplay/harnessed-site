// Total npm downloads for the `harnessed` package, all time.
//
// The npm downloads API caps one range query at 18 months, so the span from the
// first publish to today is fetched in windows and summed. Used twice: at build
// time (the number is baked into the page, so it renders without JavaScript) and
// in the browser (refreshed on load, so it stays current between deploys).
// api.npmjs.org sends `Access-Control-Allow-Origin: *`, so the browser call works.

export const NPM_PACKAGE = 'harnessed'

/** First publish of `harnessed` on npm (npm view harnessed time.created). */
const FIRST_PUBLISH = '2026-05-19'

/** Under the API's 18-month ceiling, with margin. */
const WINDOW_DAYS = 500

const day = (d: Date): string => d.toISOString().slice(0, 10)

export async function fetchTotalDownloads(
  fetchImpl: typeof fetch = fetch,
  now: Date = new Date(),
  timeoutMs = 8000,
): Promise<number | null> {
  try {
    let total = 0
    let start = new Date(`${FIRST_PUBLISH}T00:00:00Z`)
    while (start <= now) {
      const end = new Date(Math.min(start.getTime() + (WINDOW_DAYS - 1) * 86_400_000, now.getTime()))
      const url = `https://api.npmjs.org/downloads/range/${day(start)}:${day(end)}/${NPM_PACKAGE}`
      const res = await fetchImpl(url, { signal: AbortSignal.timeout(timeoutMs) })
      if (!res.ok) return null
      const body = (await res.json()) as { downloads?: { downloads: number }[] }
      if (!Array.isArray(body.downloads)) return null
      for (const d of body.downloads) total += d.downloads
      start = new Date(end.getTime() + 86_400_000)
    }
    return total
  } catch {
    return null
  }
}

export function formatCount(n: number, locale: string): string {
  return new Intl.NumberFormat(locale).format(n)
}
