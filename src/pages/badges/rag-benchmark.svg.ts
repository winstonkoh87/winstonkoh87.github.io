import type { APIRoute } from 'astro';
import { renderSvgBadge } from '../../utils/svg-badge';

export const GET: APIRoute = async () => {
    const svg = renderSvgBadge({
        label: 'HYBRID RAG',
        value: 'HIT@5 0.892 / MRR 0.769',
        valueColor: '#a855f7',
    });

    return new Response(svg, {
        headers: {
            'Content-Type': 'image/svg+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};
