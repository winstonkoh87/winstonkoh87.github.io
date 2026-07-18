// Single source of truth for site-wide Athena stats.
// Every page imports from here — update once, deploy, done.
// GITHUB_STARS is fetched live at build time (the site rebuilds on every push,
// so each deploy refreshes the count); the fallback keeps builds green if the
// API is unreachable or rate-limited in CI.

export const ATHENA_VERSION = 'v9.9.7';
export const PROTOCOLS_ACTIVE = 414;
export const SESSIONS_LOGGED = '1,900+';
export const VECTOR_MEMORIES = '5,600+';

const FALLBACK_STARS = 516;

async function fetchStars(): Promise<number> {
    try {
        const res = await fetch('https://api.github.com/repos/winstonkoh87/Athena-Public', {
            headers: { Accept: 'application/vnd.github+json' },
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) return FALLBACK_STARS;
        const data = await res.json();
        const stars = Number(data?.stargazers_count);
        return Number.isFinite(stars) && stars >= FALLBACK_STARS ? stars : FALLBACK_STARS;
    } catch {
        return FALLBACK_STARS;
    }
}

export const GITHUB_STARS = await fetchStars();
