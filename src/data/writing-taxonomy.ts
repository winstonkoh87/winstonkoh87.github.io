export type ClusterId = 'sovereign-systems' | 'strategic-engineering' | 'economics-of-leverage' | 'case-files';

export interface Article {
    title: string;
    slug: string;
    date: string;
    cluster: ClusterId;
    tags: string[];
    excerpt: string;
    image: string;
    featured?: boolean;
}

export const CLUSTERS: Record<ClusterId, { title: string; subtitle: string; description: string }> = {
    'sovereign-systems': {
        title: "Sovereign Systems",
        subtitle: "The Philosophy",
        description: "Why and how to own your digital brain. The architecture of augmentation."
    },
    'strategic-engineering': {
        title: "Strategic Engineering",
        subtitle: "The Methodology",
        description: "Robustness, safety protocols, and First Principles design."
    },
    'economics-of-leverage': {
        title: "Economics of Leverage",
        subtitle: "The Business",
        description: "Pricing, value traps, and the physics of business in the AI age."
    },
    'case-files': {
        title: "Case Files",
        subtitle: "The Evidence",
        description: "Real-world deployments. From zero to shipped."
    }
};

export const ARTICLES: Article[] = [
    // --- Sovereign Systems ---
    {
        title: "Why I Built My Own Brain (The 5 Pillars of Sovereign AI)",
        slug: "athena-5-pillars",
        date: "2026-01-03",
        cluster: "sovereign-systems",
        tags: ["AI Strategy"],
        excerpt: "Why a portable, augmenting, and sovereign AI beats a 'smart' one. The 5 pillars that make Athena an asset, not a liability.",
        image: "/images/articles/athena-5-pillars.png"
    },
    {
        title: "The Trilateral Feedback Loop: Why One AI is Not Enough",
        slug: "trilateral-feedback-loop",
        date: "2026-01-01",
        cluster: "sovereign-systems",
        tags: ["Strategy"],
        excerpt: "How to stop your AI from becoming a 'Yes Man' and use adversarial audit loops to validate high-stakes decisions.",
        image: "/images/articles/trilateral-feedback-loop.png"
    },
    {
        title: "The Bionic Operator: Why AI Replaces Tasks, Not Humans",
        slug: "ai-bionic-layer",
        date: "2025-12-28",
        cluster: "sovereign-systems",
        tags: ["Strategy"],
        excerpt: "Why the 'AI will replace you' narrative is wrong. The real play is augmentation — becoming a bionic operator.",
        image: "/images/articles/ai-bionic-layer.png"
    },
    {
        title: "The Iterative Layer: Why AI Will Never One-Shot Your Problems",
        slug: "iterative-layer",
        date: "2026-01-08",
        cluster: "sovereign-systems",
        tags: ["Strategy"],
        excerpt: "Magic prompts don't exist. The real power of AI comes from iterative collaboration—Plan, Execute, Calibrate, Iterate.",
        image: "/images/articles/iterative-layer.png"
    },
    {
        title: "9.8K Views, 750 Cloners: The Day I Shipped My Brain to the World",
        slug: "athena-public-launch",
        date: "2026-01-05",
        cluster: "sovereign-systems",
        tags: ["Launch Story"],
        excerpt: "A first-hand account of open-sourcing Project Athena and the counter-intuitive lesson on why 'risky' authenticity beats 'safe' professionalism.",
        image: "/images/articles/athena-public-launch.png"
    },

    // --- Strategic Engineering ---
    {
        title: "The Price of Ignoring Advice: A $300 Lesson in AI Safety",
        slug: "the-price-of-ignoring-advice",
        date: "2026-01-29",
        cluster: "strategic-engineering",
        tags: ["Safety Protocol"],
        excerpt: "A client paid for Agentic AI superpowers but ignored the one rule that kept them safe. How one prompt wiped a project, and the backup protocol that would have saved it.",
        image: "/images/articles/the-price-of-ignoring-advice.png",
        featured: true
    },
    {
        title: "The Anti-Slop Protocol: How to Write 3,000 Words in 3 Hours",
        slug: "anti-slop-protocol",
        date: "2026-01-16",
        cluster: "strategic-engineering",
        tags: ["Protocol"],
        excerpt: "Stop trying to prompt-engineer a perfect essay. Start acting like a Manager instead of a Maker. A 4-phase protocol for high-quality AI co-creation.",
        image: "/images/articles/anti-slop-protocol.png"
    },
    {
        title: "The Soulful Stoic Protocol: Bionic Branding Case Study",
        slug: "soulful-stoic-protocol",
        date: "2026-01-16",
        cluster: "strategic-engineering",
        tags: ["Case Study"],
        excerpt: "How we used a Trilateral Feedback Loop (Gemini + Claude + O1) to build a high-performance portfolio for a student leader.",
        image: "/images/articles/soulful-stoic-protocol.png"
    },
    {
        title: "Protocol: Auditing Your 'Net Life Hour' (The Grab Test)",
        slug: "net-life-hour-protocol",
        date: "2026-01-15",
        cluster: "strategic-engineering",
        tags: ["Protocol"],
        excerpt: "The dangerous illusion of 'Monthly Income' vs. The brutal reality of 'Net Life Hour'. A framework for auditing the unit economics of your career.",
        image: "/images/articles/net-life-hour-protocol.png"
    },
    {
        title: "One Day, One Site: A First Principles Design Case Study",
        slug: "first-principles-design",
        date: "2026-01-26",
        cluster: "strategic-engineering",
        tags: ["Case Study"],
        excerpt: "How I used First Principles Thinking and Project Athena to compress a week of design paralysis into a single Deep Work Saturday.",
        image: "/images/articles/first-principles-design.png"
    },

    // --- Economics of Leverage ---
    {
        title: "Why the $200 Coder Broke Your App (And Why I Charge 3x More)",
        slug: "why-the-200-coder-broke-your-app",
        date: "2026-01-29",
        cluster: "economics-of-leverage",
        tags: ["Strategy"],
        excerpt: "The hidden cost of 'just throwing it into ChatGPT.' A case study on why a cheap AI-generated web app failed, and the engineering required to fix it.",
        image: "/images/articles/why-the-200-coder-broke-your-app.png",
        featured: true
    },
    {
        title: "The $300 Website Experiment: A Price Discovery Lesson",
        slug: "pricing-trap",
        date: "2026-01-20",
        cluster: "economics-of-leverage",
        tags: ["Strategy"],
        excerpt: "I tested how cheap I could price a website before the market pushed back. They didn't. Here's what that taught me about value, scope, and expectation gaps.",
        image: "/images/articles/pricing-trap.png"
    },
    {
        title: "The Vibe Coder's Trap: Why AI Speed Can't Fix Business Physics",
        slug: "vibe-coding-trap",
        date: "2026-01-15",
        cluster: "economics-of-leverage",
        tags: ["AI Strategy"],
        excerpt: "I built 10 apps in a week, and I have $0 revenue. Why AI accelerates the 'How' but breaks the 'Who', 'Where', and 'How Much'.",
        image: "/images/articles/vibe-coding-trap.png"
    },
    {
        title: "The Efficiency Trap: A Systems Analysis of False Competence",
        slug: "2-day-efficiency-trap",
        date: "2026-01-14",
        cluster: "economics-of-leverage",
        tags: ["Strategy"],
        excerpt: "Deconstructing the mechanic of 'False Competence' in accelerated learning. Why efficient inputs (2-Day Courses) lead to fragile outputs.",
        image: "/images/articles/2-day-efficiency-trap.png"
    },

    // --- Case Files ---
    {
        title: "24 Hours to Delivery: The Bionic Approach to Unfamiliar Tools",
        slug: "alteryx-24-hours",
        date: "2026-01-20",
        cluster: "case-files",
        tags: ["Case Study"],
        excerpt: "A client needed an ML pipeline in Alteryx — software I'd never touched. Here's how portable fundamentals compressed a week of work into a single day.",
        image: "/images/articles/alteryx-24-hours.png"
    },
    {
        title: "How I Compressed a Week of Agency R&D into a Single Day with Gemini Gems",
        slug: "gemini-gem-agent",
        date: "2026-01-14",
        cluster: "case-files",
        tags: ["Case Study"],
        excerpt: "I thought replacing myself with an AI agent would take a week. It took me 24 hours. A case study in rapid logic prototyping and hard-coding ethics.",
        image: "/images/articles/gemini-gem-agent.png"
    },
    {
        title: "How I Built a $5K-Worth Marketing Strategy in One Afternoon",
        slug: "ai-marketing-workflow",
        date: "2026-01-11",
        cluster: "case-files",
        tags: ["Case Study"],
        excerpt: "A methodology demonstration of AI-augmented strategic analysis — from industry research to interactive pitch deck in 4 hours.",
        image: "/images/articles/ai-marketing-workflow.png"
    },
    {
        title: "Building a Tuition Centre's Lead Engine in Under One Hour",
        slug: "case-study-p6-math-tuition",
        date: "2025-12-20",
        cluster: "case-files",
        tags: ["Case Study"],
        excerpt: "From brief to deployment: a 5-page SME website and digital marketing launch plan — built in under one hour with AI-augmented execution.",
        image: "/images/articles/case-study-p6-math-tuition.png"
    },
    {
        title: "How SG SMEs Can Build a Full Marketing Department for <$100",
        slug: "sme-ai-marketing-guide",
        date: "2025-12-15",
        cluster: "case-files",
        tags: ["AI for Business"],
        excerpt: "Website creation, SEO content, Facebook/Google ads — a practical guide on using AI to run your digital marketing without hiring a team.",
        image: "/images/articles/sme-ai-marketing-guide.png"
    }
];
