export type ClusterId = 'autonomous-systems' | 'strategic-infrastructure' | 'commerce-conversion';

export interface Project {
    title: string;
    subtitle?: string; // e.g. "(Soulful Stoic)" or "(inspired)"
    link: string;
    target?: '_blank' | '_self'; // Default to _self
    cluster: ClusterId;
    role: string;
    description: string;
    outcome?: string; // Optional "The Outcome" section
    tags: string[];
    status: 'production' | 'demo';
    icon: string; // Emoji char
    isLive?: boolean;
}

export const CLUSTERS: Record<ClusterId, { title: string; subtitle: string; description: string }> = {
    'autonomous-systems': {
        title: "Autonomous Systems",
        subtitle: "The Engine Room",
        description: "Self-reasoning agents and bionic workflows that replace manual labor with compute."
    },
    'strategic-infrastructure': {
        title: "Strategic Infrastructure",
        subtitle: "The Foundation",
        description: "High-trust, resilient web assets that serve as the operating system for business/branding."
    },
    'commerce-conversion': {
        title: "Commerce & Conversion",
        subtitle: "The Funnel",
        description: "Optimization engines designed to turn traffic into revenue. Proposals, commerce, and sales logic."
    }
};

export const PROJECTS: Project[] = [
    // --- Autonomous Systems ---
    {
        title: "Project Athena",
        link: "/athena/",
        cluster: "autonomous-systems",
        role: "Architect + Full Stack",
        description: "An autonomous 'Second Brain' that reduces engineering research time by 60%. Leverages RAG and Supabase Vector to recall, reason, and execute.",
        outcome: "Personal AI OS with 'commit semantics' — 1,900+ sessions of persistent memory and 500+ stars on GitHub.",
        tags: ["Python", "Supabase Vector", "Gemini 3.1 Pro", "Claude Opus 4.8", "System Architecture"],
        status: "production",
        icon: "⚡",
        isLive: true
    },
    {
        title: "Service-Led Diagnostic Gem",
        link: "/projects/gem-agent/",
        cluster: "autonomous-systems",
        role: "Prompt Engineering + Logic Design",
        description: "Automated client intake agent built in 24 hours. Features 'Integrity Gate' logic and dynamic context switching.",
        outcome: "Custom Gemini Gem agent that qualifies leads and generates proposals.",
        tags: ["Gemini Gems", "Claude Opus 4.8", "Prompt Engineering", "System Design"],
        status: "production",
        icon: "💎"
    },

    // --- Strategic Infrastructure ---
    {
        title: "Melvin Lim Portfolio",
        subtitle: "(Soulful Stoic)",
        link: "/articles/soulful-stoic-protocol/",
        cluster: "strategic-infrastructure",
        role: "Bionic Narrative Design",
        description: "'The Soulful Stoic' Protocol. A high-trust, narrative-first portfolio for an elite scholarship candidate. Features Bento Grid layout and 'Wabi-Sabi' authenticity injection.",
        tags: ["HTML/CSS", "Design", "Leadership", "Branding"],
        status: "production",
        icon: "🫡"
    },
    {
        title: "SG Assignment Helper",
        link: "https://sgassignmenthelp.com",
        target: "_blank",
        cluster: "strategic-infrastructure",
        role: "Strategy + Design + Dev",
        description: "Academic triage service for university students. Features 'Safe Harbor' compliance positioning, 'Netflix & Chill' messaging, and 24h turnaround logic.",
        tags: ["Design System", "First Principles", "Web Development", "Education"],
        status: "production",
        icon: "🆘",
        isLive: true
    },
    {
        title: "MathPro Tuition",
        link: "/articles/case-study-p6-math-tuition/",
        cluster: "strategic-infrastructure",
        role: "Design + Full Stack",
        description: "5-page static website for a P6 Math tuition centre. Clean design, 3-tier pricing, lead capture form. Demonstrates SME web service quality.",
        tags: ["Static HTML/CSS", "Mobile Responsive", "SEO Optimized", "Education"],
        status: "demo",
        icon: "📐"
    },

    // --- Commerce & Conversion ---
    {
        title: "ThatBioTutor Growth Proposal",
        link: "/articles/sme-ai-marketing-guide/",
        cluster: "commerce-conversion",
        role: "Strategy + SEO + UX",
        description: "Multi-page digital marketing proposal with SEO strategy, content recommendations, and pricing packages. Dark glassmorphism design with mobile nav.",
        tags: ["Digital Marketing", "Strategy", "Glassmorphism"],
        status: "demo",
        icon: "🧬"
    },
    {
        title: "Coach Derrick Lim",
        subtitle: "(inspired)",
        link: "/swim-coach-demo/",
        cluster: "commerce-conversion",
        role: "Strategy + Marketing",
        description: "90-day digital transformation proposal inspired by a real swim coach. Interactive slides, AI demo, ROI projections, and full PDF marketing plan.",
        tags: ["Digital Marketing", "Interactive Slides", "Sales Strategy"],
        status: "demo",
        icon: "🏊"
    },
    {
        title: "Brew & Bean Café",
        link: "/articles/iterative-layer/",
        cluster: "commerce-conversion",
        role: "Design + Development",
        description: "Artisan coffee shop landing page with menu showcase, story section, testimonials, and reservation CTA. Premium F&B design.",
        tags: ["F&B", "Landing Page", "Mobile Responsive"],
        status: "demo",
        icon: "☕"
    },
    {
        title: "StickerLah E-commerce",
        link: "/projects/sticker-shop/",
        cluster: "commerce-conversion",
        role: "Design + Full Stack",
        description: "Cute SG sticker shop with product grid, cart drawer, bulk discounts, and checkout flow. Inspired by DCHtoons.",
        tags: ["E-commerce", "Cart System", "Mobile Responsive"],
        status: "demo",
        icon: "🛒"
    }
];
