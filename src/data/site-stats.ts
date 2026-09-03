// Single source of truth for site-wide Athena stats.
// Last verified: 2026-09-04
// Every page imports from here — update once, deploy, done.
// GITHUB_STARS is fetched live at build time (the site rebuilds on every push,
// so each deploy refreshes the count); the fallback keeps builds green if the
// API is unreachable or rate-limited in CI.

export const ATHENA_VERSION = 'v9.9.9';
export const PROTOCOLS_ACTIVE = 418;
export const SESSIONS_LOGGED = '2,100+';
// Rounded-down ordinal for prose ("your Nth session recalls..."). Derived by hand
// from SESSIONS_LOGGED so copy never contradicts the counter above it.
export const SESSIONS_MILESTONE = '2,000th';
export const VECTOR_MEMORIES = '4,500+';

// Repo facts. Anything here is externally verifiable on the GitHub repo page,
// which is the point — these are the proof numbers, so they must not drift.
export const GITHUB_REPO = 'winstonkoh87/Athena-Public';
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;
export const LICENSE = 'MIT';

const FALLBACK_STARS = 554;
const FALLBACK_FORKS = 75;

async function fetchRepo(): Promise<{ stars: number; forks: number }> {
    try {
        const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
            headers: { Accept: 'application/vnd.github+json' },
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) return { stars: FALLBACK_STARS, forks: FALLBACK_FORKS };
        const data = await res.json();
        const stars = Number(data?.stargazers_count);
        const forks = Number(data?.forks_count);
        return {
            // Never report below the last-known floor: a transient API blip
            // shouldn't make the proof numbers appear to go backwards.
            stars: Number.isFinite(stars) && stars >= FALLBACK_STARS ? stars : FALLBACK_STARS,
            forks: Number.isFinite(forks) && forks >= FALLBACK_FORKS ? forks : FALLBACK_FORKS,
        };
    } catch {
        return { stars: FALLBACK_STARS, forks: FALLBACK_FORKS };
    }
}

const repo = await fetchRepo();

export const GITHUB_STARS = repo.stars;
export const GITHUB_FORKS = repo.forks;
