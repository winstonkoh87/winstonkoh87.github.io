export interface BadgeOptions {
    label: string;
    value: string;
    labelBg?: string;
    valueBg?: string;
    valueColor?: string;
    statusDot?: boolean;
}

export function renderSvgBadge({
    label,
    value,
    labelBg = '#0f172a',
    valueBg = '#1e293b',
    valueColor = '#38bdf8',
    statusDot = false,
}: BadgeOptions): string {
    const labelLen = label.length;
    const valueLen = value.length + (statusDot ? 2 : 0);
    const labelWidth = Math.max(75, Math.ceil(labelLen * 7.2 + 18));
    const valueWidth = Math.max(65, Math.ceil(valueLen * 7.8 + 22));
    const totalWidth = labelWidth + valueWidth;
    const height = 28;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" fill="none" role="img" aria-label="${label}: ${value}">
  <title>${label}: ${value}</title>
  <defs>
    <linearGradient id="badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <clipPath id="badge-clip">
      <rect width="${totalWidth}" height="${height}" rx="6" fill="#ffffff" />
    </clipPath>
  </defs>
  <g clip-path="url(#badge-clip)">
    <rect width="${labelWidth}" height="${height}" fill="${labelBg}" />
    <rect x="${labelWidth}" width="${valueWidth}" height="${height}" fill="${valueBg}" />
    <rect width="${totalWidth}" height="${height}" fill="url(#badge-grad)" opacity="0.15" />
    <rect width="${totalWidth}" height="${height}" rx="6" stroke="#334155" stroke-width="1.5" fill="none" />
  </g>
  <g font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">
    <text x="${labelWidth / 2}" y="18" fill="#94a3b8" text-anchor="middle">${escapeXml(label)}</text>
    ${statusDot ? `<circle cx="${labelWidth + 14}" cy="14" r="3.5" fill="#22c55e"><animate attributeName="opacity" values="1;0.35;1" dur="2s" repeatCount="indefinite"/></circle>` : ''}
    <text x="${labelWidth + valueWidth / 2 + (statusDot ? 6 : 0)}" y="18" fill="${valueColor}" text-anchor="middle">${escapeXml(value)}</text>
  </g>
</svg>`;
}

function escapeXml(unsafe: string): string {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
