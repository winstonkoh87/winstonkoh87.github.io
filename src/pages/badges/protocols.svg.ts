import type { APIRoute } from 'astro';
import { renderSvgBadge } from '../../utils/svg-badge';
import { PROTOCOLS_ACTIVE } from '../../data/site-stats';

export const GET: APIRoute = async () => {
    const svg = renderSvgBadge({
        label: 'PROTOCOLS',
        value: `${PROTOCOLS_ACTIVE} ACTIVE (448 TOTAL)`,
        valueColor: '#38bdf8',
    });

    return new Response(svg, {
        headers: {
            'Content-Type': 'image/svg+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};
