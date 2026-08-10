import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { ATHENA_VERSION, PROTOCOLS_ACTIVE, SESSIONS_LOGGED, VECTOR_MEMORIES, GITHUB_STARS, GITHUB_FORKS, GITHUB_REPO } from '../data/site-stats';
import { ARTICLES, CLUSTERS as ARTICLE_CLUSTERS } from '../data/writing-taxonomy';
import { PROJECTS, CLUSTERS as PROJECT_CLUSTERS } from '../data/portfolio-taxonomy';

function cleanAstroToMarkdown(raw: string): string {
    // Strip frontmatter
    let text = raw.replace(/^---[\s\S]*?---/, '');

    // Strip scripts, styles, SVGs, import lines, and layout tags
    text = text.replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, '');
    text = text.replace(/^import\s+[\s\S]*?;$/gm, '');

    // Headings
    text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
    text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
    text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
    text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');
    text = text.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n');

    // Lists
    text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');

    // Blockquotes & figure captions
    text = text.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, '> $1\n\n');
    text = text.replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, '*Caption: $1*\n\n');

    // Code blocks & inline code
    text = text.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '\n```\n$1\n```\n');
    text = text.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');

    // Paragraphs
    text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n');

    // Strip remaining HTML tags
    text = text.replace(/<[^>]+>/g, '');

    // Decode HTML entities
    text = text
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&mdash;/g, '—')
        .replace(/&ndash;/g, '–');

    // Clean whitespace
    const lines = text.split('\n').map(l => l.trim());
    const result: string[] = [];
    for (const line of lines) {
        if (line || (result.length > 0 && result[result.length - 1] !== '')) {
            result.push(line);
        }
    }
    return result.join('\n');
}

export const GET: APIRoute = async () => {
    const today = new Date().toLocaleDateString('en-SG', { timeZone: 'Asia/Singapore', day: 'numeric', month: 'long', year: 'numeric' });

    let fullText = `# Winston Koh — Full Knowledge Base & System Documentation\n\n`;
    fullText += `> Singapore-based AI Systems Architect & Corporate AI Trainer\n`;
    fullText += `> Full-text synthesis of all canonical articles, system specifications, portfolio case studies, and operational benchmarks.\n`;
    fullText += `> Generated at build: ${today} | Athena OS ${ATHENA_VERSION} | URL: https://winstonkoh87.com/llms-full.txt\n\n`;
    fullText += `---\n\n`;

    // Section 1: Executive Overview & Proof Numbers
    fullText += `## 1. System Metadata & Proof Metrics\n\n`;
    fullText += `- **Architect & Author**: Winston Koh (Singapore 🇸🇬)\n`;
    fullText += `- **Primary Open-Source Engine**: Project Athena (https://github.com/${GITHUB_REPO})\n`;
    fullText += `- **Athena Version**: ${ATHENA_VERSION} (Frozen reference: v8.2-stable)\n`;
    fullText += `- **Active Protocols**: ${PROTOCOLS_ACTIVE} active decision/risk/execution protocols across 26 categories (448 total)\n`;
    fullText += `- **Active Cognitive Skills**: 43 active skills with path/topic conditional activation (~40-60% token savings)\n`;
    fullText += `- **Workflows**: 72 slash command triggers (/start, /ultrastart, /end, /ultraend, /think, /research, /audit, /do)\n`;
    fullText += `- **Python Stack**: 260 automation scripts (boot, shutdown, governance, memory sync, hybrid search)\n`;
    fullText += `- **Logged Sessions**: ${SESSIONS_LOGGED} stress-tested bilateral sessions (4,234 indexed memory files)\n`;
    fullText += `- **Hybrid RAG Performance**: Hit@5 0.892 / MRR@5 0.769 / Coverage 0.618 measured on a published 65-query gold set\n`;
    fullText += `- **Social Proof**: 1M+ Reddit views (#1 r/GeminiAI, #4 r/ChatGPT), 960+ unique cloners, ${GITHUB_STARS}★ on GitHub\n`;
    fullText += `- **Infrastructure Cost**: $0/month (Supabase free tier + local POSIX storage + model APIs)\n\n`;
    fullText += `---\n\n`;

    // Section 2: Services & Pricing
    fullText += `## 2. Commercial Services & Fixed Pricing (SGD)\n\n`;
    fullText += `### AI Agent Training & Workshops — S$800 to S$1,500\n`;
    fullText += `- Half-day hands-on workshop for founders & teams on Claude Code and agentic workflows.\n`;
    fullText += `- Real business automations built live on team processes (quoting, customer handling, reporting, content).\n`;
    fullText += `- Validated with paying SME clients across 2026. Leave with working automations, not slideware.\n\n`;

    fullText += `### Web Development — S$500 to S$1,500\n`;
    fullText += `- Production-grade static sites built with Astro 5 & Tailwind CSS (zero-JS islands).\n`;
    fullText += `- Guaranteed 100/100 Lighthouse performance, complete Schema.org JSON-LD, 24–72 hour delivery.\n\n`;

    fullText += `### Custom AI Agents & Automation — Fixed Proposal\n`;
    fullText += `- Custom internal tools, RAG knowledge bases, lead-qualification agents, automated scrapers, and research pipelines.\n\n`;

    fullText += `### 1-on-1 Strategy Consulting — S$150/hr\n`;
    fullText += `- 60-minute strategic session over Zoom with recording and actionable implementation roadmap.\n\n`;
    fullText += `---\n\n`;

    // Section 3: Project Athena 5 Pillars
    fullText += `## 3. Project Athena Architecture & 5 Pillars\n\n`;
    fullText += `Project Athena is an open-source operating system for AI agents that gives any LLM persistent memory, structured reasoning, and bounded governance.\n\n`;
    fullText += `1. **Data Sovereignty**: Local-first architecture. All context, decision logs, and memory files live on local disk in plain Markdown/JSON. Own the state; rent the intelligence.\n`;
    fullText += `2. **Hybrid Memory RAG**: Chunk-level BM25 keyword search + pgvector cosine similarity + Reciprocal Rank Fusion (RRF) + cross-encoder reranking.\n`;
    fullText += `3. **Structured Governance**: AgentGate interceptor layer enforcing Law #1 (Ruin Limit), privacy blocklists, and output-over-maintenance commit gates.\n`;
    fullText += `4. **Conditional Skill Activation**: Path/topic-triggered dormant skills reduce prompt bloat by ~40-60%.\n`;
    fullText += `5. **Epistemic Honesty**: Public Validation Status ladder grades every claim by evidence level; 18 Crossref-verified academic references.\n\n`;
    fullText += `---\n\n`;

    // Section 4: Portfolio Directory
    fullText += `## 4. Portfolio Projects & System Switchboard\n\n`;
    for (const project of PROJECTS) {
        const fullLink = project.link.startsWith('http') ? project.link : `https://winstonkoh87.com${project.link}`;
        fullText += `### ${project.title} (${project.role})\n`;
        fullText += `- **Cluster**: ${PROJECT_CLUSTERS[project.cluster]?.title || project.cluster}\n`;
        fullText += `- **Link**: ${fullLink}\n`;
        fullText += `- **Description**: ${project.description}\n`;
        if (project.outcome) fullText += `- **Outcome**: ${project.outcome}\n`;
        fullText += `- **Tech Stack**: ${project.tags.join(', ')}\n\n`;
    }
    fullText += `---\n\n`;

    // Section 5: Articles Deep Synthesis
    fullText += `## 5. Complete Technical Articles & Case Studies\n\n`;
    fullText += `This section contains the full synthesized text of all 26 articles published on winstonkoh87.com.\n\n`;

    const articlesDir = path.join(process.cwd(), 'src', 'pages', 'articles');

    for (let i = 0; i < ARTICLES.length; i++) {
        const article = ARTICLES[i];
        fullText += `### Article ${i + 1}/${ARTICLES.length}: ${article.title}\n`;
        fullText += `- **Slug**: ${article.slug}\n`;
        fullText += `- **Published**: ${article.date}\n`;
        fullText += `- **Cluster**: ${ARTICLE_CLUSTERS[article.cluster]?.title || article.cluster}\n`;
        fullText += `- **Tags**: ${article.tags.join(', ')}\n`;
        fullText += `- **Excerpt**: ${article.excerpt}\n`;
        fullText += `- **URL**: https://winstonkoh87.com/articles/${article.slug}/\n\n`;

        const astroPath = path.join(articlesDir, `${article.slug}.astro`);
        if (fs.existsSync(astroPath)) {
            try {
                const rawContent = fs.readFileSync(astroPath, 'utf-8');
                const parsedMd = cleanAstroToMarkdown(rawContent);
                fullText += parsedMd + `\n\n`;
            } catch (e) {
                fullText += `*(Content could not be extracted at build time)*\n\n`;
            }
        }
        fullText += `---\n\n`;
    }

    // Section 6: Contact Information
    fullText += `## 6. Contact Information & Direct Channels\n\n`;
    fullText += `- **WhatsApp Direct**: +65 8358 1066 (https://wa.me/6583581066)\n`;
    fullText += `- **Email**: winstonkoh87@gmail.com\n`;
    fullText += `- **Website**: https://winstonkoh87.com\n`;
    fullText += `- **GitHub**: https://github.com/winstonkoh87\n`;
    fullText += `- **LinkedIn**: https://www.linkedin.com/in/winstonkoh87\n`;
    fullText += `- **Location**: Singapore 🇸🇬\n`;

    return new Response(fullText, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
};
