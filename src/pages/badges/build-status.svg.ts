import type { APIRoute } from 'astro';
import { renderSvgBadge } from '../../utils/svg-badge';

export const GET: APIRoute = async () => {
    const today = new Date().toLocaleDateString('en-SG', { timeZone: 'Asia/Singapore', day: 'numeric', month: 'short', year: 'numeric' });
    const svg = renderSvgBadge({
        label: 'BUILD STATUS',
        value: `PASSING (${today})`,
        valueColor: '#22c55e',
        statusDot: true,
    });

    return new Response(svg, {
        headers: {
            'Content-Type': 'image/svg+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};
