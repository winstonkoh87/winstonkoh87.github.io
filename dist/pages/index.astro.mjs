import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C23E161l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_R40zG8VU.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_0Jjocdhj.mjs';
export { renderers } from '../renderers.mjs';

const clientMelvin = new Proxy({"src":"/_astro/client-melvin.DtnZBvL-.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/client-melvin.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/client-melvin.png");
							return target[name];
						}
					});

const clientTuition = new Proxy({"src":"/_astro/client-tuition.MJX-w--C.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/client-tuition.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/client-tuition.png");
							return target[name];
						}
					});

const clientSme = new Proxy({"src":"/_astro/client-sme.D_LXGJPo.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/client-sme.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/client-sme.png");
							return target[name];
						}
					});

const clientDerrick = new Proxy({"src":"/_astro/client-derrick.CbcoO3Ub.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/client-derrick.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/client-derrick.png");
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://winstonkoh87.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Winston Koh | AI Systems Architect & Full-stack Engineer", "description": "Singapore-based AI Systems Architect. I build autonomous agents, reliable business workflows, and production-grade software. Stop hiring tasks, start building assets." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<section class="hero"> <div class="hero-content"> <!-- Intent Engine Toggle --> <div class="intent-toggle-container fade-in-delayed"> <h2 class="hire-me-headline">Hire Me</h2> <div class="intent-switch"> <button class="intent-btn active" onclick="setIntent('freelance')" id="btn-freelance">Freelance</button> <button class="intent-btn" onclick="setIntent('fulltime')" id="btn-fulltime">Full-time</button> <div class="intent-bg"></div> </div> </div> <!-- INTERACTIVE ATHENA TERMINAL (Pseudo-API) --> <div class="terminal-window" onclick="document.getElementById('term-input').focus()" role="region" aria-label="Athena AI Terminal"> <div class="terminal-header"> <span class="terminal-dot red"></span> <span class="terminal-dot yellow"></span> <span class="terminal-dot green"></span> <span class="ai-badge">\u2728 Athena AI Active</span> </div> <div class="terminal-body" id="terminal-body"> <div id="terminal-history"></div> <div class="input-line"> <span class="prompt" id="term-prompt">guest@winston.io:~$</span> <input type="text" id="term-input" autocomplete="off" spellcheck="false" placeholder="Type 'help' or ask me anything..."> </div> </div> </div> <h1 id="hero-headline" class="fade-in-delayed">I build systems<br>that <span class="text-gradient">run
                    themselves.</span> </h1> <p id="hero-subtitle" class="hero-subtitle fade-in-delayed-2">Strategic Systems Architect</p> <p id="hero-description" class="hero-description fade-in-delayed-3">
I turn messy AI tools into reliable business workflows. No constant babysitting. No jargon. Just
                results.
</p> <div class="hero-cta fade-in-delayed-3"> <a id="hero-cta-btn" class="btn btn-primary" href="https://wa.me/6583581066?text=Hi%20Winston%2C%20I%20came%20across%20your%20site%20and%20wanted%20to%20connect." target="_blank" rel="noopener noreferrer" onclick="gtag('event', 'cta_click', {'cta_name': 'whatsapp_hero'})">Let's Talk</a> </div> </div> </section>  <section class="metrics-section fade-in-delayed-3"> <div class="metrics-grid"> <!-- Athena (AI Systems) --> <div class="metric-item"> <span class="metric-pillar">AI Systems</span> <span class="metric-value">4,203</span> <span class="metric-label">Memories Indexed</span> </div> <!-- Brew & Bean (SME Solutions) --> <div class="metric-item"> <span class="metric-pillar">SME Solutions</span> <span class="metric-value">95+</span> <span class="metric-label">Lighthouse Score</span> </div> <!-- Melvin (Personal Branding) --> <div class="metric-item"> <span class="metric-pillar">Personal Branding</span> <span class="metric-value">100</span> <span class="metric-label">Accessibility Score</span> </div> </div> </section>  <section class="projects-section" aria-labelledby="featured-work"> <h2 id="featured-work" class="section-label">Featured Work (The Engine Room)</h2> <div class="project-grid"> <!-- Project Athena (Systems) --> <a href="/athena" class="project-card"> <div class="project-header"> <span class="card-icon" aria-hidden="true">\u26A1</span> <div style="display: flex; gap: 0.5rem; align-items: center;"> <span class="project-status production">AI Systems</span> <span class="live-badge">\u25CF LIVE</span> </div> </div> <h3>Project Athena</h3> <p> <strong>The Outcome:</strong> Personal AI OS with "commit semantics" \u2014 860+ sessions of
                    persistent memory.
<br><br> <strong>The System:</strong> Hybrid RAG + Local-first Vector Store + Agentic Workflow.
</p> <div class="project-tags"> <span class="tech-tag">View System \u2192</span> </div> </a> <!-- Melvin Lim (Case Study) --> <a href="/articles/soulful-stoic-protocol/" class="project-card"> <div class="project-header"> <span class="card-icon" aria-hidden="true">\u{1FAE1}</span> <span class="project-status production">Personal Branding</span> </div> <h3>Melvin Lim: Bionic Branding</h3> <p> <strong>The Outcome:</strong> "The Soulful Stoic" \u2014 Automating elite personal branding.
<br><br> <strong>The System:</strong> Trilateral Feedback Loop + Narrative Engineering.
</p> <div class="project-tags"> <span class="tech-tag">View Case Study \u2192</span> </div> </a> <!-- Coach Derrick Lim --> <a href="/articles/ai-marketing-workflow/" class="project-card"> <div class="project-header"> <span class="card-icon" aria-hidden="true">\u{1F3CB}\uFE0F</span> <span class="project-status production">Digital Marketing Strategy</span> </div> <h3>Coach Derrick Lim</h3> <p> <strong>The Outcome:</strong> 90-day digital strategy roadmap with ROI projections.
<br><br> <strong>The System:</strong> Strategic Proposal + Conversion Funnel Design.
</p> <div class="project-tags"> <span class="tech-tag">View System \u2192</span> </div> </a> <!-- Service-Led Diagnostic Gem --> <a href="/projects/gem-agent" class="project-card"> <div class="project-header"> <span class="card-icon" aria-hidden="true">\u{1F48E}</span> <div style="display: flex; gap: 0.5rem; align-items: center;"> <span class="project-status production">AI Agent</span> <span class="live-badge">\u25CF LIVE</span> </div> </div> <h3>Service-Led Diagnostic Gem</h3> <p> <strong>The Outcome:</strong> Custom Gemini agent that qualifies leads and generates proposals.
<br><br> <strong>The System:</strong> Knowledge-base injection + Service Mapping + Analyst Brief.
</p> <div class="project-tags"> <span class="tech-tag">View System \u2192</span> </div> </a> </div> <div class="centered" style="margin-top: 2rem;"> <a href="/portfolio" class="text-link">View Full Portfolio \u2192</a> </div> </section>  <section class="testimonials-section" aria-labelledby="testimonials"> <h2 id="testimonials" class="section-label">What Clients Say</h2> <div class="testimonials-grid"> <div class="testimonial-card"> <p class="testimonial-quote">Winston delivered exactly what we needed \u2014 a clean, fast website that
                    actually converts. No fluff, just results.</p> <div class="testimonial-author"> `, ' <div class="testimonial-info"> <span class="testimonial-name">SAF Officer</span> <span class="testimonial-role">Personal Branding Client</span> </div> </div> </div> <div class="testimonial-card"> <p class="testimonial-quote">The turnaround was insane. From brief to live site in under a day. The\n                    AI-augmented workflow is real.</p> <div class="testimonial-author"> ', ' <div class="testimonial-info"> <span class="testimonial-name">Tuition Centre Owner</span> <span class="testimonial-role">Education SME</span> </div> </div> </div> <div class="testimonial-card"> <p class="testimonial-quote">Finally, someone who gets it. Not just a website, but a system that\n                    works while I focus on my business.</p> <div class="testimonial-author"> ', ' <div class="testimonial-info"> <span class="testimonial-name">Small Business Owner</span> <span class="testimonial-role">F&B Industry</span> </div> </div> </div> <div class="testimonial-card"> <p class="testimonial-quote">The proposal blew me away. I went from not knowing where to start to having a complete 90-day roadmap with ROI projections. Professional, fast, and data-driven.</p> <div class="testimonial-author"> ', ` <div class="testimonial-info"> <span class="testimonial-name">Freelance Coach</span> <span class="testimonial-role">Sports Industry</span> </div> </div> </div> </div> </section>  <section class="cards-section" aria-labelledby="operating-system"> <h2 id="operating-system" class="section-label">The Operating System (Philosophy)</h2> <div class="card-grid"> <a href="/about" class="card"> <span class="card-icon" aria-hidden="true">\u2192</span> <h3>About</h3> <p>The philosophy, the background, the operating model.</p> </a> <a href="/services" class="card"> <span class="card-icon" aria-hidden="true">\u2192</span> <h3>Services</h3> <p>Fixed pricing. Fast delivery. Systems that work.</p> </a> <a href="/writing" class="card"> <span class="card-icon" aria-hidden="true">\u2192</span> <h3>Writing</h3> <p>Thoughts on systems, strategy, and survival.</p> </a> </div> </section> <script src="/assets/js/counter.js"><\/script>  <script>
        // ========================================
        // ATHENA KNOWLEDGE BASE (Loaded from external JSON)
        // ========================================
        let ATHENA_KNOWLEDGE = {};
        
        // Fetch knowledge base from external JSON
        fetch('/data/athena_kb.json')
            .then(res => res.json())
            .then(data => { ATHENA_KNOWLEDGE = data; })
            .catch(err => console.warn('Failed to load knowledge base:', err));

        // Pattern matching for fuzzy search
        function findAnswer(query) {
            const q = query.toLowerCase().trim();
            
            // Direct match
            if (ATHENA_KNOWLEDGE[q]) {
                return ATHENA_KNOWLEDGE[q];
            }
            
            // Keyword search
            for (const [key, value] of Object.entries(ATHENA_KNOWLEDGE)) {
                if (q.includes(key) || key.includes(q)) {
                    return value;
                }
            }
            
            // Capture Hook: Log missed queries for "Bionic" improvement
            console.log(\`[ATHENA CAPTURE] Thinking about: "\${query}" (No direct match found. Logging for knowledge base expansion.)\`);
            
            // Fallback responses
            const fallbacks = [
                \`I don't have specific info on "\${query}" yet. I've logged this to Winston's "Bionic Loop" for future updates. Try asking about: projects, stack, or pricing.\`,
                \`Hmm, that's outside my current index. I've flagged "\${query}" for Winston to review. Type 'help' to see my active protocols.\`,
                \`Internal knowledge gap detected for "\${query}". Protocol 102: Query logged. Try asking about Winston's AI systems or F&B work.\`
            ];
            return fallbacks[Math.floor(Math.random() * fallbacks.length)];
        }

        // Terminal DOM elements
        const terminalHistory = document.getElementById('terminal-history');
        const termInput = document.getElementById('term-input');
        const termBody = document.getElementById('terminal-body');

        function logToTerminal(text, type = 'user') {
            const div = document.createElement('div');
            div.className = \`log-entry \${type}\`;
            div.style.whiteSpace = 'pre-wrap';
            div.innerText = text;
            terminalHistory.appendChild(div);
            // Scroll only the terminal container, not the page
            termBody.scrollTop = termBody.scrollHeight;
        }

        function typeWriterResponse(text, callback) {
            const div = document.createElement('div');
            div.className = 'log-entry ai';
            div.style.whiteSpace = 'pre-wrap';
            terminalHistory.appendChild(div);
            
            let i = 0;
            const speed = 15; // ms per character
            
            function type() {
                if (i < text.length) {
                    div.innerText += text.charAt(i);
                    i++;
                    // Scroll only the terminal container, not the page
                    termBody.scrollTop = termBody.scrollHeight;
                    setTimeout(type, speed);
                } else if (callback) {
                    callback();
                }
            }
            type();
        }

        // Handle input
        termInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const text = termInput.value.trim();
                if (!text) return;
                
                // Log user input
                const promptText = document.getElementById('term-prompt').innerText;
                logToTerminal(\`\${promptText} \${text}\`, 'user');
                termInput.value = '';

                // Handle commands
                if (text.toLowerCase() === 'help') {
                    logToTerminal(\`Available commands:
\u2022 help \u2014 Show this menu
\u2022 clear \u2014 Clear terminal
\u2022 projects \u2014 List Winston's work
\u2022 stack \u2014 Tech stack overview
\u2022 pricing \u2014 Freelance rates
\u2022 contact \u2014 Get in touch

Or just ask a question naturally!\`, 'system');
                } else if (text.toLowerCase() === 'clear') {
                    terminalHistory.innerHTML = '';
                    logToTerminal('Terminal cleared.', 'system');
                } else {
                    // Simulate thinking delay
                    setTimeout(() => {
                        const answer = findAnswer(text);
                        typeWriterResponse(answer);
                    }, 300);
                }
            }
        });

        // Boot sequence
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => logToTerminal('Initializing Athena Protocol v5.0...', 'system'), 500);
            setTimeout(() => logToTerminal('Knowledge base loaded. 47 entries active.', 'system'), 1200);
            setTimeout(() => typeWriterResponse('Welcome! I\\'m Athena, Winston\\'s AI assistant. Ask me about his projects, tech stack, or how to hire him.'), 1800);
        });
    <\/script>  <script>
        const INTENT_DATA = {
            freelance: {
                headline: "I build systems<br>that <span class='text-gradient'>run themselves.</span>",
                subtitle: "Strategic Systems Architect",
                desc: "I turn messy AI tools into reliable business workflows. No constant babysitting. No jargon. Just results.",
                cta: "Let's Talk",
                ctaLink: "https://wa.me/6583581066?text=Hi%20Winston%2C%20I%20came%20across%20your%20site%20and%20wanted%20to%20connect.",
                showSecondary: false
            },
            fulltime: {
                headline: "Full-Stack Engineer<br>with <span class='text-gradient'>AI Specialization.</span>",
                subtitle: "Python \u2022 JavaScript \u2022 RAG \u2022 Agentic Orchestration",
                desc: "I build production-grade applications with Claude Opus 4.5, Gemini Pro 3, and multi-LLM pipelines. Open to technical leadership roles.",
                cta: "View Architecture",
                ctaLink: "/athena", // Fixed link to internal Astro route
                showSecondary: true
            }
        };

        function setIntent(mode, animate = true) {
            // 1. Visual Toggle State
            const btns = document.querySelectorAll('.intent-btn');
            btns.forEach(b => b.classList.remove('active'));
            document.getElementById(\`btn-\${mode}\`).classList.add('active');

            // 2. CSS Theme Swap
            if (mode === 'fulltime') {
                document.body.classList.add('fulltime-mode');
            } else {
                document.body.classList.remove('fulltime-mode');
            }

            // 3. Content Injection
            const data = INTENT_DATA[mode];
            const elements = [
                document.getElementById('hero-headline'),
                document.getElementById('hero-subtitle'),
                document.getElementById('hero-description'),
                document.getElementById('hero-cta-btn')
            ];

            // Helper to swap text
            const swapText = () => {
                const headline = document.getElementById('hero-headline');
                const subtitle = document.getElementById('hero-subtitle');
                const description = document.getElementById('hero-description');
                const ctaBtn = document.getElementById('hero-cta-btn');

                if (headline) headline.innerHTML = data.headline;
                if (subtitle) subtitle.innerHTML = data.subtitle;
                if (description) description.innerHTML = data.desc;
                if (ctaBtn) {
                    ctaBtn.innerHTML = data.cta;
                    ctaBtn.href = data.ctaLink;
                }
            };

            if (animate) {
                // Fade out
                elements.forEach(el => {
                    if (el) el.style.opacity = '0';
                });

                setTimeout(() => {
                    swapText();
                    // Fade in
                    elements.forEach(el => {
                        if (el) {
                            el.style.opacity = '1';
                            el.style.transition = 'opacity 0.4s ease';
                        }
                    });
                }, 250);
            } else {
                // Instant update (No animation)
                swapText();
                // Ensure visibility and clean styles
                elements.forEach(el => {
                    if (el) {
                        el.style.opacity = '';
                        el.style.transition = '';
                    }
                });
            }

            // 4. Save preference
            localStorage.setItem('intent_mode', mode);
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            // Force default to freelance as per user request, without animation
            // const savedMode = localStorage.getItem('intent_mode') || 'freelance'; // Reverting to forced freelance
            const savedMode = 'freelance';
            setIntent(savedMode, false);
        });
    <\/script> `], [" ", `<section class="hero"> <div class="hero-content"> <!-- Intent Engine Toggle --> <div class="intent-toggle-container fade-in-delayed"> <h2 class="hire-me-headline">Hire Me</h2> <div class="intent-switch"> <button class="intent-btn active" onclick="setIntent('freelance')" id="btn-freelance">Freelance</button> <button class="intent-btn" onclick="setIntent('fulltime')" id="btn-fulltime">Full-time</button> <div class="intent-bg"></div> </div> </div> <!-- INTERACTIVE ATHENA TERMINAL (Pseudo-API) --> <div class="terminal-window" onclick="document.getElementById('term-input').focus()" role="region" aria-label="Athena AI Terminal"> <div class="terminal-header"> <span class="terminal-dot red"></span> <span class="terminal-dot yellow"></span> <span class="terminal-dot green"></span> <span class="ai-badge">\u2728 Athena AI Active</span> </div> <div class="terminal-body" id="terminal-body"> <div id="terminal-history"></div> <div class="input-line"> <span class="prompt" id="term-prompt">guest@winston.io:~$</span> <input type="text" id="term-input" autocomplete="off" spellcheck="false" placeholder="Type 'help' or ask me anything..."> </div> </div> </div> <h1 id="hero-headline" class="fade-in-delayed">I build systems<br>that <span class="text-gradient">run
                    themselves.</span> </h1> <p id="hero-subtitle" class="hero-subtitle fade-in-delayed-2">Strategic Systems Architect</p> <p id="hero-description" class="hero-description fade-in-delayed-3">
I turn messy AI tools into reliable business workflows. No constant babysitting. No jargon. Just
                results.
</p> <div class="hero-cta fade-in-delayed-3"> <a id="hero-cta-btn" class="btn btn-primary" href="https://wa.me/6583581066?text=Hi%20Winston%2C%20I%20came%20across%20your%20site%20and%20wanted%20to%20connect." target="_blank" rel="noopener noreferrer" onclick="gtag('event', 'cta_click', {'cta_name': 'whatsapp_hero'})">Let's Talk</a> </div> </div> </section>  <section class="metrics-section fade-in-delayed-3"> <div class="metrics-grid"> <!-- Athena (AI Systems) --> <div class="metric-item"> <span class="metric-pillar">AI Systems</span> <span class="metric-value">4,203</span> <span class="metric-label">Memories Indexed</span> </div> <!-- Brew & Bean (SME Solutions) --> <div class="metric-item"> <span class="metric-pillar">SME Solutions</span> <span class="metric-value">95+</span> <span class="metric-label">Lighthouse Score</span> </div> <!-- Melvin (Personal Branding) --> <div class="metric-item"> <span class="metric-pillar">Personal Branding</span> <span class="metric-value">100</span> <span class="metric-label">Accessibility Score</span> </div> </div> </section>  <section class="projects-section" aria-labelledby="featured-work"> <h2 id="featured-work" class="section-label">Featured Work (The Engine Room)</h2> <div class="project-grid"> <!-- Project Athena (Systems) --> <a href="/athena" class="project-card"> <div class="project-header"> <span class="card-icon" aria-hidden="true">\u26A1</span> <div style="display: flex; gap: 0.5rem; align-items: center;"> <span class="project-status production">AI Systems</span> <span class="live-badge">\u25CF LIVE</span> </div> </div> <h3>Project Athena</h3> <p> <strong>The Outcome:</strong> Personal AI OS with "commit semantics" \u2014 860+ sessions of
                    persistent memory.
<br><br> <strong>The System:</strong> Hybrid RAG + Local-first Vector Store + Agentic Workflow.
</p> <div class="project-tags"> <span class="tech-tag">View System \u2192</span> </div> </a> <!-- Melvin Lim (Case Study) --> <a href="/articles/soulful-stoic-protocol/" class="project-card"> <div class="project-header"> <span class="card-icon" aria-hidden="true">\u{1FAE1}</span> <span class="project-status production">Personal Branding</span> </div> <h3>Melvin Lim: Bionic Branding</h3> <p> <strong>The Outcome:</strong> "The Soulful Stoic" \u2014 Automating elite personal branding.
<br><br> <strong>The System:</strong> Trilateral Feedback Loop + Narrative Engineering.
</p> <div class="project-tags"> <span class="tech-tag">View Case Study \u2192</span> </div> </a> <!-- Coach Derrick Lim --> <a href="/articles/ai-marketing-workflow/" class="project-card"> <div class="project-header"> <span class="card-icon" aria-hidden="true">\u{1F3CB}\uFE0F</span> <span class="project-status production">Digital Marketing Strategy</span> </div> <h3>Coach Derrick Lim</h3> <p> <strong>The Outcome:</strong> 90-day digital strategy roadmap with ROI projections.
<br><br> <strong>The System:</strong> Strategic Proposal + Conversion Funnel Design.
</p> <div class="project-tags"> <span class="tech-tag">View System \u2192</span> </div> </a> <!-- Service-Led Diagnostic Gem --> <a href="/projects/gem-agent" class="project-card"> <div class="project-header"> <span class="card-icon" aria-hidden="true">\u{1F48E}</span> <div style="display: flex; gap: 0.5rem; align-items: center;"> <span class="project-status production">AI Agent</span> <span class="live-badge">\u25CF LIVE</span> </div> </div> <h3>Service-Led Diagnostic Gem</h3> <p> <strong>The Outcome:</strong> Custom Gemini agent that qualifies leads and generates proposals.
<br><br> <strong>The System:</strong> Knowledge-base injection + Service Mapping + Analyst Brief.
</p> <div class="project-tags"> <span class="tech-tag">View System \u2192</span> </div> </a> </div> <div class="centered" style="margin-top: 2rem;"> <a href="/portfolio" class="text-link">View Full Portfolio \u2192</a> </div> </section>  <section class="testimonials-section" aria-labelledby="testimonials"> <h2 id="testimonials" class="section-label">What Clients Say</h2> <div class="testimonials-grid"> <div class="testimonial-card"> <p class="testimonial-quote">Winston delivered exactly what we needed \u2014 a clean, fast website that
                    actually converts. No fluff, just results.</p> <div class="testimonial-author"> `, ' <div class="testimonial-info"> <span class="testimonial-name">SAF Officer</span> <span class="testimonial-role">Personal Branding Client</span> </div> </div> </div> <div class="testimonial-card"> <p class="testimonial-quote">The turnaround was insane. From brief to live site in under a day. The\n                    AI-augmented workflow is real.</p> <div class="testimonial-author"> ', ' <div class="testimonial-info"> <span class="testimonial-name">Tuition Centre Owner</span> <span class="testimonial-role">Education SME</span> </div> </div> </div> <div class="testimonial-card"> <p class="testimonial-quote">Finally, someone who gets it. Not just a website, but a system that\n                    works while I focus on my business.</p> <div class="testimonial-author"> ', ' <div class="testimonial-info"> <span class="testimonial-name">Small Business Owner</span> <span class="testimonial-role">F&B Industry</span> </div> </div> </div> <div class="testimonial-card"> <p class="testimonial-quote">The proposal blew me away. I went from not knowing where to start to having a complete 90-day roadmap with ROI projections. Professional, fast, and data-driven.</p> <div class="testimonial-author"> ', ` <div class="testimonial-info"> <span class="testimonial-name">Freelance Coach</span> <span class="testimonial-role">Sports Industry</span> </div> </div> </div> </div> </section>  <section class="cards-section" aria-labelledby="operating-system"> <h2 id="operating-system" class="section-label">The Operating System (Philosophy)</h2> <div class="card-grid"> <a href="/about" class="card"> <span class="card-icon" aria-hidden="true">\u2192</span> <h3>About</h3> <p>The philosophy, the background, the operating model.</p> </a> <a href="/services" class="card"> <span class="card-icon" aria-hidden="true">\u2192</span> <h3>Services</h3> <p>Fixed pricing. Fast delivery. Systems that work.</p> </a> <a href="/writing" class="card"> <span class="card-icon" aria-hidden="true">\u2192</span> <h3>Writing</h3> <p>Thoughts on systems, strategy, and survival.</p> </a> </div> </section> <script src="/assets/js/counter.js"><\/script>  <script>
        // ========================================
        // ATHENA KNOWLEDGE BASE (Loaded from external JSON)
        // ========================================
        let ATHENA_KNOWLEDGE = {};
        
        // Fetch knowledge base from external JSON
        fetch('/data/athena_kb.json')
            .then(res => res.json())
            .then(data => { ATHENA_KNOWLEDGE = data; })
            .catch(err => console.warn('Failed to load knowledge base:', err));

        // Pattern matching for fuzzy search
        function findAnswer(query) {
            const q = query.toLowerCase().trim();
            
            // Direct match
            if (ATHENA_KNOWLEDGE[q]) {
                return ATHENA_KNOWLEDGE[q];
            }
            
            // Keyword search
            for (const [key, value] of Object.entries(ATHENA_KNOWLEDGE)) {
                if (q.includes(key) || key.includes(q)) {
                    return value;
                }
            }
            
            // Capture Hook: Log missed queries for "Bionic" improvement
            console.log(\\\`[ATHENA CAPTURE] Thinking about: "\\\${query}" (No direct match found. Logging for knowledge base expansion.)\\\`);
            
            // Fallback responses
            const fallbacks = [
                \\\`I don't have specific info on "\\\${query}" yet. I've logged this to Winston's "Bionic Loop" for future updates. Try asking about: projects, stack, or pricing.\\\`,
                \\\`Hmm, that's outside my current index. I've flagged "\\\${query}" for Winston to review. Type 'help' to see my active protocols.\\\`,
                \\\`Internal knowledge gap detected for "\\\${query}". Protocol 102: Query logged. Try asking about Winston's AI systems or F&B work.\\\`
            ];
            return fallbacks[Math.floor(Math.random() * fallbacks.length)];
        }

        // Terminal DOM elements
        const terminalHistory = document.getElementById('terminal-history');
        const termInput = document.getElementById('term-input');
        const termBody = document.getElementById('terminal-body');

        function logToTerminal(text, type = 'user') {
            const div = document.createElement('div');
            div.className = \\\`log-entry \\\${type}\\\`;
            div.style.whiteSpace = 'pre-wrap';
            div.innerText = text;
            terminalHistory.appendChild(div);
            // Scroll only the terminal container, not the page
            termBody.scrollTop = termBody.scrollHeight;
        }

        function typeWriterResponse(text, callback) {
            const div = document.createElement('div');
            div.className = 'log-entry ai';
            div.style.whiteSpace = 'pre-wrap';
            terminalHistory.appendChild(div);
            
            let i = 0;
            const speed = 15; // ms per character
            
            function type() {
                if (i < text.length) {
                    div.innerText += text.charAt(i);
                    i++;
                    // Scroll only the terminal container, not the page
                    termBody.scrollTop = termBody.scrollHeight;
                    setTimeout(type, speed);
                } else if (callback) {
                    callback();
                }
            }
            type();
        }

        // Handle input
        termInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const text = termInput.value.trim();
                if (!text) return;
                
                // Log user input
                const promptText = document.getElementById('term-prompt').innerText;
                logToTerminal(\\\`\\\${promptText} \\\${text}\\\`, 'user');
                termInput.value = '';

                // Handle commands
                if (text.toLowerCase() === 'help') {
                    logToTerminal(\\\`Available commands:
\u2022 help \u2014 Show this menu
\u2022 clear \u2014 Clear terminal
\u2022 projects \u2014 List Winston's work
\u2022 stack \u2014 Tech stack overview
\u2022 pricing \u2014 Freelance rates
\u2022 contact \u2014 Get in touch

Or just ask a question naturally!\\\`, 'system');
                } else if (text.toLowerCase() === 'clear') {
                    terminalHistory.innerHTML = '';
                    logToTerminal('Terminal cleared.', 'system');
                } else {
                    // Simulate thinking delay
                    setTimeout(() => {
                        const answer = findAnswer(text);
                        typeWriterResponse(answer);
                    }, 300);
                }
            }
        });

        // Boot sequence
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => logToTerminal('Initializing Athena Protocol v5.0...', 'system'), 500);
            setTimeout(() => logToTerminal('Knowledge base loaded. 47 entries active.', 'system'), 1200);
            setTimeout(() => typeWriterResponse('Welcome! I\\\\'m Athena, Winston\\\\'s AI assistant. Ask me about his projects, tech stack, or how to hire him.'), 1800);
        });
    <\/script>  <script>
        const INTENT_DATA = {
            freelance: {
                headline: "I build systems<br>that <span class='text-gradient'>run themselves.</span>",
                subtitle: "Strategic Systems Architect",
                desc: "I turn messy AI tools into reliable business workflows. No constant babysitting. No jargon. Just results.",
                cta: "Let's Talk",
                ctaLink: "https://wa.me/6583581066?text=Hi%20Winston%2C%20I%20came%20across%20your%20site%20and%20wanted%20to%20connect.",
                showSecondary: false
            },
            fulltime: {
                headline: "Full-Stack Engineer<br>with <span class='text-gradient'>AI Specialization.</span>",
                subtitle: "Python \u2022 JavaScript \u2022 RAG \u2022 Agentic Orchestration",
                desc: "I build production-grade applications with Claude Opus 4.5, Gemini Pro 3, and multi-LLM pipelines. Open to technical leadership roles.",
                cta: "View Architecture",
                ctaLink: "/athena", // Fixed link to internal Astro route
                showSecondary: true
            }
        };

        function setIntent(mode, animate = true) {
            // 1. Visual Toggle State
            const btns = document.querySelectorAll('.intent-btn');
            btns.forEach(b => b.classList.remove('active'));
            document.getElementById(\\\`btn-\\\${mode}\\\`).classList.add('active');

            // 2. CSS Theme Swap
            if (mode === 'fulltime') {
                document.body.classList.add('fulltime-mode');
            } else {
                document.body.classList.remove('fulltime-mode');
            }

            // 3. Content Injection
            const data = INTENT_DATA[mode];
            const elements = [
                document.getElementById('hero-headline'),
                document.getElementById('hero-subtitle'),
                document.getElementById('hero-description'),
                document.getElementById('hero-cta-btn')
            ];

            // Helper to swap text
            const swapText = () => {
                const headline = document.getElementById('hero-headline');
                const subtitle = document.getElementById('hero-subtitle');
                const description = document.getElementById('hero-description');
                const ctaBtn = document.getElementById('hero-cta-btn');

                if (headline) headline.innerHTML = data.headline;
                if (subtitle) subtitle.innerHTML = data.subtitle;
                if (description) description.innerHTML = data.desc;
                if (ctaBtn) {
                    ctaBtn.innerHTML = data.cta;
                    ctaBtn.href = data.ctaLink;
                }
            };

            if (animate) {
                // Fade out
                elements.forEach(el => {
                    if (el) el.style.opacity = '0';
                });

                setTimeout(() => {
                    swapText();
                    // Fade in
                    elements.forEach(el => {
                        if (el) {
                            el.style.opacity = '1';
                            el.style.transition = 'opacity 0.4s ease';
                        }
                    });
                }, 250);
            } else {
                // Instant update (No animation)
                swapText();
                // Ensure visibility and clean styles
                elements.forEach(el => {
                    if (el) {
                        el.style.opacity = '';
                        el.style.transition = '';
                    }
                });
            }

            // 4. Save preference
            localStorage.setItem('intent_mode', mode);
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            // Force default to freelance as per user request, without animation
            // const savedMode = localStorage.getItem('intent_mode') || 'freelance'; // Reverting to forced freelance
            const savedMode = 'freelance';
            setIntent(savedMode, false);
        });
    <\/script> `])), maybeRenderHead(), renderComponent($$result2, "Image", $$Image, { "src": clientMelvin, "alt": "SAF Officer", "class": "testimonial-avatar-img" }), renderComponent($$result2, "Image", $$Image, { "src": clientTuition, "alt": "Education SME", "class": "testimonial-avatar-img" }), renderComponent($$result2, "Image", $$Image, { "src": clientSme, "alt": "F&B Industry", "class": "testimonial-avatar-img" }), renderComponent($$result2, "Image", $$Image, { "src": clientDerrick, "alt": "Freelance Coach", "class": "testimonial-avatar-img" })) })}`;
}, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
