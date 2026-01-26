import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C23E161l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_R40zG8VU.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_0Jjocdhj.mjs';
import { g as gemHeader, b as gemLogic, a as gemMockup } from '../../chunks/mockup_-dX7afb8.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$GemAgent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gem Agent Case Study | AI Systems | Winston Koh", "description": "How I built a Service-Led Diagnostic Agent in 24 hours using Gemini Gems. A case study in rapid AI prototyping and integrity-first logic design.", "image": "/assets/images/gem-agent/header.png" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="gem-hero"> <div class="gem-hero-content"> <p class="gem-micro">Project Case Study <span style="color: #64ffda;">//</span> AI Systems</p> <h1 class="gem-headline">The <span class="gem-text-gradient">Service-Led Diagnostic</span> Agent.</h1> <p class="gem-subhead">Replacing a week of manual R&D with 24 hours of AI logic synthesis.</p> <div class="gem-stats"> <div class="stat-box"> <span class="stat-val">24h</span> <span class="stat-lbl">Time to Ship</span> </div> <div class="stat-box"> <span class="stat-val">10</span> <span class="stat-lbl">Logic Iterations</span> </div> </div> <div class="gem-hero-image-container"> ${renderComponent($$result2, "Image", $$Image, { "src": gemHeader, "alt": "Digital Brain Concept", "class": "gem-hero-image", "loading": "eager" })} <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem; background: linear-gradient(to top, #0a0a0f, transparent);"> <p class="caption">AI as the first line of defense in client intake.</p> </div> </div> <div class="gem-cta-row"> <a class="btn btn-primary" href="https://gemini.google.com/gem/1liV5V9KHOIwdXT8X700096qwAleGNOb9?usp=sharing" target="_blank" rel="noopener">Try the Gem (Demo) →</a> <a href="/articles/gemini-gem-agent/" class="gem-secondary-link">Read the Case Study →</a> </div> </div> </section>  <section id="breakdown" class="gem-section"> <h2>The Hidden Killer: The Fact-Find</h2> <p>
In professional services, "Discovery" is often just a polite term for a 2-hour interrogation. You ask the same questions ("What's your budget?", "Who are your competitors?") to filter clients.
</p> <div class="gem-callout"> <strong>The Cost:</strong> Doing this manually burns hours of senior partner time. Delegating it to juniors loses the nuance.
</div> <p>
I decided to automate myself out of this loop by building a <strong>Google Gemini Gem</strong> to handle the entire intake process—not just collecting data, but *reasoning* about it.
</p> </section>  <section class="gem-section"> <h2>The Logic: Integrity Testing</h2> <p>
The challenge wasn't just making it chat; it was making it *honest*. The first version was a sycophant that agreed with everything. I had to build an "Integrity Gate" to force the agent to reject bad fits.
</p> <div class="logic-diagram-container"> ${renderComponent($$result2, "Image", $$Image, { "src": gemLogic, "alt": "Integrity Gate Logic Diagram", "class": "logic-diagram-img" })} <p class="caption">The Integrity Gate: Hard-coding ethics into the logic flow.</p> </div> <p>I taught the system three core behaviors:</p> <ul style="list-style: none; padding: 0; margin-top: 1rem;"> <li style="margin-bottom: 1rem; border-left: 2px solid var(--gem-gold); padding-left: 1rem;"> <strong style="color: var(--gem-text-bright);">1. Sequential Inquiry</strong><br>
Don't wall-of-text the user. Ask one thing, wait, then adapt.
</li> <li style="margin-bottom: 1rem; border-left: 2px solid var(--gem-gold); padding-left: 1rem;"> <strong style="color: var(--gem-text-bright);">2. Skepticism</strong><br>
If a user says "I don't know my revenue," provide a base rate estimate instead of accepting ignorance.
</li> <li style="border-left: 2px solid var(--gem-gold); padding-left: 1rem;"> <strong style="color: var(--gem-text-bright);">3. Bedside Manner</strong><br>
Contextualize scary financial terms (COGS, OpEx) so creatives don't feel alienated.
</li> </ul> <div style="margin-top: 2rem; text-align: center;"> <a href="/assets/docs/Gem_Agent_System_Instructions.pdf" download class="btn" style="background: rgba(255, 215, 0, 0.1); border: 1px solid var(--gem-gold); color: var(--gem-gold); padding: 0.75rem 1.5rem; border-radius: 6px; text-decoration: none; font-size: 0.9rem; transition: all 0.2s;">
📄 Download Full System Instructions (PDF)
</a> <p style="font-size: 0.8rem; color: #6b7694; margin-top: 0.5rem;">See the raw prompt logic used to build this agent.</p> </div> </section>  <section class="gem-section"> <h2>The Velocity: 24 Hours</h2> <p>Traditional development (React/Typeform) would take 5 days. With AI, I compressed the R&D cycle into a single day.</p> <div class="gem-timeline"> <div class="timeline-item"> <div class="timeline-time">Morning</div> <div class="timeline-content">Draft "System Identity" prompt. Fail fast.</div> </div> <div class="timeline-item"> <div class="timeline-time">Afternoon</div> <div class="timeline-content">Realize prompt is broken -> Pivot to structured specs.</div> </div> <div class="timeline-item"> <div class="timeline-time">Evening</div> <div class="timeline-content">Stress test against real case study (Davin Choo).</div> </div> <div class="timeline-item"> <div class="timeline-time">Night</div> <div class="timeline-content">Final polish and deploy.</div> </div> </div> </section>  <section class="gem-section"> <h2>The Output: Structured Intelligence</h2> <p>
The agent doesn't just chat; it produces a tangible deliverable. A structured <strong>Confidential Analyst Brief</strong> that outlines the client's current state and gaps.
</p> <div class="result-showcase"> <div class="result-img-container"> ${renderComponent($$result2, "Image", $$Image, { "src": gemMockup, "alt": "Analyst Brief Mockup", "class": "result-img" })} </div> <p class="caption" style="text-align: center; margin-top: 1rem;">The goal isn't a chat. The goal is a structured deliverable.</p> </div> <div class="gem-callout"> <strong>🔒 Production Note:</strong> This demo runs on Gemini's public tier for accessibility. For live client deployment, I would host this on an Enterprise instance to ensure full GDPR compliance and data privacy.
</div> </section>  <section class="athena-cta-section"> <h2>Need an Agent like this?</h2> <p class="subtext">I build custom logic gates and intake systems for agencies.</p> <a class="btn btn-primary" href="/contact">Let's Build →</a> </section> ` })}`;
}, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/projects/gem-agent.astro", void 0);

const $$file = "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/projects/gem-agent.astro";
const $$url = "/projects/gem-agent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$GemAgent,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
