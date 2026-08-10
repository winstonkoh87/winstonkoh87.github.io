import type { APIRoute } from 'astro';
import { renderSvgBadge } from '../../utils/svg-badge';
import { ATHENA_VERSION } from '../../data/site-stats';

export const GET: APIRoute = async () => {
    const svg = renderSvgBadge({
        label: 'ATHENA OS',
        value: `${ATHENA_VERSION} (OPERATIONAL)`,
        valueColor: '#4ade80',
        statusDot: true,
    });

    return new Response(svg, {
        headers: {
            'Content-Type': 'image/svg+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};
