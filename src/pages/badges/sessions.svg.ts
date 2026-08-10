import type { APIRoute } from 'astro';
import { renderSvgBadge } from '../../utils/svg-badge';
import { SESSIONS_LOGGED } from '../../data/site-stats';

export const GET: APIRoute = async () => {
    const svg = renderSvgBadge({
        label: 'LOGGED SESSIONS',
        value: `${SESSIONS_LOGGED}`,
        valueColor: '#f59e0b',
    });

    return new Response(svg, {
        headers: {
            'Content-Type': 'image/svg+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};
