export type ClusterId = 'sovereign-systems' | 'strategic-engineering' | 'economics-of-leverage' | 'case-files' | 'ai-for-business';

export interface Article {
    title: string;
    slug: string;
    date: string;
    cluster: ClusterId;
    tags: string[];
    keywords: string[];
    excerpt: string;
    image: string;
    readingTime?: number;
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
    },
    'ai-for-business': {
        title: "AI for Business",
        subtitle: "The Playbook",
        description: "Practical guides for SMEs and founders deploying AI in the real world."
    }
};

// Keyword-to-slug map for auto internal linking
export function getKeywordMap(): Map<string, { slug: string; title: string }> {
    const map = new Map<string, { slug: string; title: string }>();
    for (const article of ARTICLES) {
        for (const keyword of article.keywords) {
            map.set(keyword.toLowerCase(), { slug: article.slug, title: article.title });
        }
    }
    return map;
}

// Get related articles by cluster + keyword overlap
export function getRelatedArticles(currentSlug: string, limit: number = 6): Article[] {
    const current = ARTICLES.find(a => a.slug === currentSlug);
    if (!current) return [];

    const currentKeywords = new Set(current.keywords.map(k => k.toLowerCase()));

    return ARTICLES
        .filter(a => a.slug !== currentSlug)
        .map(a => {
            const keywordOverlap = a.keywords.filter(k => currentKeywords.has(k.toLowerCase())).length;
            const clusterMatch = a.cluster === current.cluster ? 3 : 0;
            return { article: a, score: keywordOverlap + clusterMatch };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.article);
}

export const ARTICLES: Article[] = [
    // --- Sovereign Systems ---
    {
        title: "System: Athena Memory Core",
        slug: "ai-second-brain",
        date: "2025-12-28",
        cluster: "sovereign-systems",
        tags: ["Architecture", "Cognition"],
        keywords: ["ai second brain", "ai memory system", "personal knowledge base", "vector database", "semantic memory"],
        excerpt: "Technical specification for the Bionic OS Memory Subsystem. Replacing human fallibility with vector-based evidence retrieval.",
        image: "/assets/images/articles/ai-second-brain/system-schematic.png",
        readingTime: 4
    },
    {
        title: "System: The L5 Trace Framework",
        slug: "debugging-with-ai",
        date: "2025-12-31",
        cluster: "sovereign-systems",
        tags: ["Bio-OS", "Debugging"],
        keywords: ["debugging with ai", "ai psychology", "trace framework", "pattern recognition", "root cause analysis"],
        excerpt: "A debugging stack for psychological pattern recognition. Tracing errors from Consequence (L1) to Origin (L5).",
        image: "/assets/images/articles/debugging-with-ai/hero-trace.png",
        readingTime: 3
    },
    {
        title: "Protocol: The Ballast System",
        slug: "the-ballast-friend",
        date: "2025-12-30",
        cluster: "sovereign-systems",
        tags: ["Philosophy"],
        keywords: ["ballast system", "stability protocol", "high performance relationships", "acceleration"],
        excerpt: "The friend who doesn't match your intensity is not an anchor. They are ballast. Why you need stability to survive high-G acceleration.",
        image: "/assets/images/articles/the-ballast-friend/hero-cafe.png",
        readingTime: 3
    },
    {
        title: "Why I Built My Own Brain (The 5 Pillars of Sovereign AI)",
        slug: "athena-5-pillars",
        date: "2026-01-03",
        cluster: "sovereign-systems",
        tags: ["AI Strategy"],
        keywords: ["sovereign ai", "project athena", "ai agent framework", "personal ai assistant", "build your own ai"],
        excerpt: "Why a portable, augmenting, and sovereign AI beats a 'smart' one. The 5 pillars that make Athena an asset, not a liability.",
        image: "/images/articles/athena-5-pillars.png",
        readingTime: 8
    },
    {
        title: "The Trilateral Feedback Loop: Why One AI is Not Enough",
        slug: "trilateral-feedback-loop",
        date: "2026-01-01",
        cluster: "sovereign-systems",
        tags: ["Strategy"],
        keywords: ["trilateral feedback loop", "multi ai workflow", "adversarial audit", "claude vs gemini vs chatgpt", "ai validation"],
        excerpt: "How to stop your AI from becoming a 'Yes Man' and use adversarial audit loops to validate high-stakes decisions.",
        image: "/images/articles/trilateral-feedback-loop.png",
        readingTime: 6
    },
    {
        title: "The Bionic Operator: Why AI Replaces Tasks, Not Humans",
        slug: "ai-bionic-layer",
        date: "2026-01-15",
        cluster: "sovereign-systems",
        tags: ["Strategy"],
        keywords: ["bionic operator", "ai augmentation", "ai replaces tasks", "human ai collaboration", "ai will not replace you"],
        excerpt: "Why the 'AI will replace you' narrative is wrong. The real play is augmentation — becoming a bionic operator.",
        image: "/images/articles/ai-bionic-layer.png",
        readingTime: 7
    },
    {
        title: "The Iterative Layer: Why AI Will Never One-Shot Your Problems",
        slug: "iterative-layer",
        date: "2026-01-08",
        cluster: "sovereign-systems",
        tags: ["Strategy"],
        keywords: ["iterative ai", "ai iteration", "prompt engineering", "ai workflow", "plan execute calibrate"],
        excerpt: "Magic prompts don't exist. The real power of AI comes from iterative collaboration—Plan, Execute, Calibrate, Iterate.",
        image: "/images/articles/iterative-layer.png",
        readingTime: 7
    },
    {
        title: "9.8K Views, 750 Cloners: The Day I Shipped My Brain to the World",
        slug: "athena-public-launch",
        date: "2026-01-05",
        cluster: "sovereign-systems",
        tags: ["Launch Story"],
        keywords: ["open source ai agent", "project athena launch", "github open source", "ai personal assistant", "shipping in public"],
        excerpt: "A first-hand account of open-sourcing Project Athena and the counter-intuitive lesson on why 'risky' authenticity beats 'safe' professionalism.",
        image: "/images/articles/athena-public-launch.png",
        readingTime: 6
    },

    // --- Strategic Engineering ---
    {
        title: "Protocol: The Guardian System (SDR)",
        slug: "guardian-protocol",
        date: "2025-12-29",
        cluster: "strategic-engineering",
        tags: ["Risk Protocol", "SDR"],
        keywords: ["guardian system", "risk management ai", "ruin constraint", "financial risk protocol", "absorbing barrier"],
        excerpt: "Operating procedures for detecting 'Absorbing Barriers' in financial decision making. The 1% Ruin Constraint.",
        image: "/assets/images/articles/guardian-protocol/hero-shield.png",
        readingTime: 3
    },
    {
        title: "Protocol: AI Delegation Framework (V1)",
        slug: "giving-ai-jobs",
        date: "2025-12-29",
        cluster: "strategic-engineering",
        tags: ["Operations", "Delegation"],
        keywords: ["ai delegation", "ai task assignment", "ai operations", "llm workflow", "ai work product"],
        excerpt: "Standard operating procedure for assigning deterministic tasks to LLMs. Moving from 'Chat' to 'Work Product'.",
        image: "/assets/images/articles/giving-ai-jobs/hero-conductor.png",
        readingTime: 3
    },
    {
        title: "Protocol: The Thinking Partner Handshake",
        slug: "pair-programming-ai",
        date: "2025-12-31",
        cluster: "strategic-engineering",
        tags: ["Co-Pilot", "AI Ops"],
        keywords: ["ai pair programming", "thinking partner", "ai copilot", "sparring partner ai", "ai collaboration"],
        excerpt: "Operational model for moving from 'Vending Machine' prompting to 'Sparring Partner' negotiation.",
        image: "/assets/images/articles/pair-programming-ai/hero-bionic.png",
        readingTime: 3
    },
    {
        title: "Protocol: The Clinkz Doctrine",
        slug: "clinkz-doctrine",
        date: "2025-12-31",
        cluster: "strategic-engineering",
        tags: ["Protocol"],
        keywords: ["speed as weapon", "clinkz doctrine", "fast execution", "bureaucracy", "velocity"],
        excerpt: "Why speed is a weapon, and how to use the 'Clinkz Doctrine' to outmaneuver bureaucratic sluggishness.",
        image: "/assets/images/articles/clinkz-doctrine/hero-clinkz.png",
        readingTime: 3
    },
    {
        title: "The Price of Ignoring Advice: A $300 Lesson in AI Safety",
        slug: "the-price-of-ignoring-advice",
        date: "2026-01-29",
        cluster: "strategic-engineering",
        tags: ["Safety Protocol"],
        keywords: ["ai safety", "ai backup protocol", "ai destroyed project", "agentic ai risk", "ai safety net"],
        excerpt: "A client paid for Agentic AI superpowers but ignored the one rule that kept them safe. How one prompt wiped a project, and the backup protocol that would have saved it.",
        image: "/images/articles/the-price-of-ignoring-advice.png",
        featured: true,
        readingTime: 5
    },
    {
        title: "The Anti-Slop Protocol: How to Write 3,000 Words in 3 Hours",
        slug: "anti-slop-protocol",
        date: "2026-01-16",
        cluster: "strategic-engineering",
        tags: ["Protocol"],
        keywords: ["anti slop", "ai writing protocol", "ai content quality", "ai ghostwriting", "long form ai writing"],
        excerpt: "Stop trying to prompt-engineer a perfect essay. Start acting like a Manager instead of a Maker. A 4-phase protocol for high-quality AI co-creation.",
        image: "/images/articles/anti-slop-protocol.png",
        readingTime: 5
    },
    {
        title: "The Soulful Stoic Protocol: Bionic Branding Case Study",
        slug: "soulful-stoic-protocol",
        date: "2026-01-16",
        cluster: "strategic-engineering",
        tags: ["Case Study"],
        keywords: ["bionic branding", "ai portfolio", "trilateral feedback loop", "multi ai branding", "student portfolio"],
        excerpt: "How we used a Trilateral Feedback Loop (Gemini + Claude + O1) to build a high-performance portfolio for a student leader.",
        image: "/images/articles/soulful-stoic-protocol.png",
        readingTime: 6
    },
    {
        title: "Protocol: Auditing Your 'Net Life Hour' (The Grab Test)",
        slug: "net-life-hour-protocol",
        date: "2026-01-15",
        cluster: "strategic-engineering",
        tags: ["Protocol"],
        keywords: ["net life hour", "career economics", "hourly rate calculator", "grab driver", "true hourly wage"],
        excerpt: "The dangerous illusion of 'Monthly Income' vs. The brutal reality of 'Net Life Hour'. A framework for auditing the unit economics of your career.",
        image: "/images/articles/net-life-hour-protocol.png",
        readingTime: 5
    },
    {
        title: "One Day, One Site: A First Principles Design Case Study",
        slug: "first-principles-design",
        date: "2026-01-26",
        cluster: "strategic-engineering",
        tags: ["Case Study"],
        keywords: ["first principles design", "website in one day", "design case study", "ai web design", "deep work"],
        excerpt: "How I used First Principles Thinking and Project Athena to compress a week of design paralysis into a single Deep Work Saturday.",
        image: "/images/articles/first-principles-design.png",
        readingTime: 5
    },

    // --- Economics of Leverage ---
    {
        title: "Why the $200 Coder Broke Your App (And Why I Charge 3x More)",
        slug: "why-the-200-coder-broke-your-app",
        date: "2026-01-29",
        cluster: "economics-of-leverage",
        tags: ["Strategy"],
        keywords: ["cheap developer", "ai generated app", "vibe coding", "freelancer pricing", "cheap vs quality developer"],
        excerpt: "The hidden cost of 'just throwing it into ChatGPT.' A case study on why a cheap AI-generated web app failed, and the engineering required to fix it.",
        image: "/images/articles/why-the-200-coder-broke-your-app.png",
        featured: true,
        readingTime: 5
    },
    {
        title: "The $300 Website Experiment: A Price Discovery Lesson",
        slug: "pricing-trap",
        date: "2026-01-20",
        cluster: "economics-of-leverage",
        tags: ["Strategy"],
        keywords: ["website pricing", "freelance pricing", "price discovery", "value based pricing", "cheap website"],
        excerpt: "I tested how cheap I could price a website before the market pushed back. They didn't. Here's what that taught me about value, scope, and expectation gaps.",
        image: "/images/articles/pricing-trap.png",
        readingTime: 5
    },
    {
        title: "The Vibe Coder's Trap: Why AI Speed Can't Fix Business Physics",
        slug: "vibe-coding-trap",
        date: "2026-01-15",
        cluster: "economics-of-leverage",
        tags: ["AI Strategy"],
        keywords: ["vibe coding", "ai speed trap", "business physics", "ai startup mistake", "building 10 apps"],
        excerpt: "I built 10 apps in a week, and I have $0 revenue. Why AI accelerates the 'How' but breaks the 'Who', 'Where', and 'How Much'.",
        image: "/images/articles/vibe-coding-trap.png",
        readingTime: 5
    },
    {
        title: "The Efficiency Trap: A Systems Analysis of False Competence",
        slug: "2-day-efficiency-trap",
        date: "2026-01-14",
        cluster: "economics-of-leverage",
        tags: ["Strategy"],
        keywords: ["efficiency trap", "false competence", "accelerated learning", "2 day course", "fragile knowledge"],
        excerpt: "Deconstructing the mechanic of 'False Competence' in accelerated learning. Why efficient inputs (2-Day Courses) lead to fragile outputs.",
        image: "/images/articles/2-day-efficiency-trap.png",
        readingTime: 5
    },

    // --- Case Files ---
    {
        title: "24 Hours to Delivery: The Bionic Approach to Unfamiliar Tools",
        slug: "alteryx-24-hours",
        date: "2026-01-20",
        cluster: "case-files",
        tags: ["Case Study"],
        keywords: ["alteryx ai", "unfamiliar tools", "bionic approach", "rapid learning", "ml pipeline"],
        excerpt: "A client needed an ML pipeline in Alteryx — software I'd never touched. Here's how portable fundamentals compressed a week of work into a single day.",
        image: "/images/articles/alteryx-24-hours.png",
        readingTime: 5
    },
    {
        title: "How I Compressed a Week of Agency R&D into a Single Day with Gemini Gems",
        slug: "gemini-gem-agent",
        date: "2026-01-14",
        cluster: "case-files",
        tags: ["Case Study"],
        keywords: ["gemini gems", "ai agent", "rapid prototyping", "ai r&d", "logic prototyping"],
        excerpt: "I thought replacing myself with an AI agent would take a week. It took me 24 hours. A case study in rapid logic prototyping and hard-coding ethics.",
        image: "/images/articles/gemini-gem-agent.png",
        readingTime: 6
    },
    {
        title: "How I Built a $5K-Worth Marketing Strategy in One Afternoon",
        slug: "ai-marketing-workflow",
        date: "2026-01-11",
        cluster: "case-files",
        tags: ["Case Study"],
        keywords: ["ai marketing strategy", "marketing automation", "ai pitch deck", "strategic analysis ai", "marketing workflow"],
        excerpt: "A methodology demonstration of AI-augmented strategic analysis — from industry research to interactive pitch deck in 4 hours.",
        image: "/images/articles/ai-marketing-workflow.png",
        readingTime: 8
    },
    {
        title: "Building a Tuition Centre's Lead Engine in Under One Hour",
        slug: "case-study-p6-math-tuition",
        date: "2026-01-12",
        cluster: "case-files",
        tags: ["Case Study"],
        keywords: ["tuition centre website", "sme website", "lead generation", "digital marketing tuition", "ai website builder"],
        excerpt: "From brief to deployment: a 5-page SME website and digital marketing launch plan — built in under one hour with AI-augmented execution.",
        image: "/images/articles/case-study-p6-math-tuition.png",
        readingTime: 9
    },
    {
        title: "How SG SMEs Can Build a Full Marketing Department for <$100",
        slug: "sme-ai-marketing-guide",
        date: "2026-01-10",
        cluster: "case-files",
        tags: ["AI for Business"],
        keywords: ["sme marketing singapore", "ai marketing sme", "cheap marketing", "facebook ads ai", "google ads ai", "digital marketing guide"],
        excerpt: "Website creation, SEO content, Facebook/Google ads — a practical guide on using AI to run your digital marketing without hiring a team.",
        image: "/images/articles/sme-ai-marketing-guide.png",
        readingTime: 10
    }
];
