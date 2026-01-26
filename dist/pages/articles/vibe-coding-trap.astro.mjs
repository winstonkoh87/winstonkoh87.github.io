import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C23E161l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_R40zG8VU.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_0Jjocdhj.mjs';
/* empty css                                                    */
export { renderers } from '../../renderers.mjs';

const heroImg = new Proxy({"src":"/_astro/hero.OIZwUaql.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/articles/vibe-coding-trap/hero.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/articles/vibe-coding-trap/hero.png");
							return target[name];
						}
					});

const stackoverflowImg = new Proxy({"src":"/_astro/stackoverflow_chart.BuhOVncg.png","width":900,"height":765,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/articles/vibe-coding-trap/stackoverflow_chart.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/articles/vibe-coding-trap/stackoverflow_chart.png");
							return target[name];
						}
					});

const executionImg = new Proxy({"src":"/_astro/execution_funnel.D10W_jUi.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/articles/vibe-coding-trap/execution_funnel.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/articles/vibe-coding-trap/execution_funnel.png");
							return target[name];
						}
					});

const fourFitsImg = new Proxy({"src":"/_astro/four_fits.DoX5TvtN.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/articles/vibe-coding-trap/four_fits.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/articles/vibe-coding-trap/four_fits.png");
							return target[name];
						}
					});

const $$VibeCodingTrap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Vibe Coder's Trap: Why AI Speed Can't Fix Business Physics | Winston Koh", "description": "I built 10 apps in a week, and I have $0 revenue. Why AI accelerates the 'How' but breaks the 'Who', 'Where', and 'How Much'.", "showFloatingButtons": false, "image": "/assets/images/articles/vibe-coding-trap/hero.png", "articleData": {
    publishedTime: "2026-01-15T19:00:00Z",
    tags: ["Business", "AI", "Strategy", "Startups"]
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="article-container"> <a href="/writing" class="back-link">← Back to Writing</a> <article> <header class="article-header"> <h1>The Vibe Coder's Trap: Why AI Speed Can't Fix Business Physics</h1> <div class="article-meta"> <span>🏷️ Business Strategy</span> <span>⚡ AI Analysis</span> </div> <div class="article-dates"> <span>Published: <time datetime="2026-01-15">15 January 2026</time></span> </div> </header> <figure class="article-figure"> ${renderComponent($$result2, "Image", $$Image, { "src": heroImg, "alt": "The Vibe Coder's Trap", "class": "article-image", "loading": "eager" })} <figcaption>The isolation of the Vibe Coder. Infinite creation power, zero connection to the market.</figcaption> </figure> <div class="article-content"> <!-- Executive Summary --> <div class="exec-summary"> <h4>📋 Executive Summary</h4> <ul> <li><strong>The Trap:</strong> Confusing "Building Fast" (Velocity) with "Building Right" (Vector).</li> <li><strong>The Reality:</strong> AI has reduced the cost of <em>Product</em> to zero, but the cost of <em>Distribution</em> (Market/Channel) has skyrocketed due to noise.</li> <li><strong>The Lesson:</strong> "Gatekeeping" is dead (see Stack Overflow). You cannot monetize access to information anymore.</li> <li><strong>The Fix:</strong> Use the "Mall Test" and "Interface Test" before writing a single line of code.</li> </ul> </div> <h2>The "I Built 10 Apps" Problem</h2> <p>There is a thread on Reddit right now that perfectly captures the current moment in software.</p> <p>A user writes: <em>"I've coded like 10 apps since Dec 31st... from micro SaaS to Chrome extensions... I feel like I've gained another superpower, but I'm still stuck in the same place: I don't know how to monetize my skill."</em></p> <p>This is what I call <strong>The Vibe Coder's Trap</strong>. It is the ultimate version of the <a href="/articles/2-day-efficiency-trap">Efficiency Trap</a>—optimizing for the feeling of competence rather than the outcome.</p> <p>AI tools like Cursor and v0 have given us god-like powers of creation. We can manifest software at the speed of thought. The dopamine hit is incredible. You have an idea, you prompt it, and 30 minutes later, it exists.</p> <p>But businesses are not built on existence. They are built on <strong>Physics</strong>.</p> <div class="toc-box"> <h4>Table of Contents</h4> <ul class="toc-list"> <li><a href="#lesson1">Part 1: The Death of Gatekeeping</a></li> <li><a href="#lesson2">Part 2: Execution is the Bottleneck</a></li> <li><a href="#fits">Part 3: The 4 Fits Framework</a></li> <li><a href="#decision">Part 4: The Diagnostics Check</a></li> </ul> </div> <h2 id="lesson1">Part 1: The Death of Gatekeeping (Stack Overflow)</h2> <p>If you want to see what happens when you ignore market physics, look at Stack Overflow.</p> <p>For years, Stack Overflow held a monopoly on developer knowledge. Their model relied on <strong>Gatekeeping</strong>: "Closed as duplicate," "Read the documentation," and snarky comments from power users. It was a <strong>High-Friction Interface</strong> to knowledge.</p> <p>Then came ChatGPT. It offered a <strong>Zero-Judgment Interface</strong>. It didn't mock you for not knowing; it just gave you the answer.</p> <figure class="article-figure"> ${renderComponent($$result2, "Image", $$Image, { "src": stackoverflowImg, "alt": "Stack Overflow Decline Chart", "class": "article-image" })} <figcaption>The moment the "Gatekeeper" died. Frictionless utility (AI) always kills high-friction arrogance.</figcaption> </figure> <p><strong>The Lesson:</strong> You cannot gatekeep knowledge anymore. AI removes friction, but without an <a href="/articles/anti-slop-protocol">Anti-Slop Protocol</a> (Orchestration), it just produces noise. If your business model relies on "access to information" or "technical difficulty," you are walking dead.</p> <h2 id="lesson2">Part 2: Execution is the Bottleneck</h2> <p>The Vibe Coder often complains: <em>"I just don't know what to build."</em></p> <p>This is an illusion. Ideas are not the bottleneck.</p> <figure class="article-figure"> ${renderComponent($$result2, "Image", $$Image, { "src": executionImg, "alt": "Execution Bottleneck", "class": "article-image" })} <figcaption>The funnel of reality. Ideas are plentiful and cheap. Execution is the narrow, painful filter that creates value.</figcaption> </figure> <p>Go to a shopping mall. Look at what people are buying. Go to TikTok. Look at what people are complaining about. Go to a construction site. Look at the messy clipboards they are using.</p> <p><strong>The market is screaming its needs at you every day.</strong></p> <p>The problem isn't the <em>Idea</em>. It’s the <strong>Execution</strong>.</p> <ul> <li>A founder doesn't fail because they lacked the "idea" for a blog. They fail because they didn't have the discipline to write 1 post day, every day, for 2 years.</li> <li>They fail because they built a $10 product but didn't have the resources to run a $50 CPM ad campaign.</li> </ul> <p>Finding the problem is easy. Building the solution is now easy (thanks to AI). <strong>Connecting the two (Execution)</strong> is where the pain—and the profit—lives.</p> <h2 id="fits">Part 3: The 4 Fits (The Physics Check)</h2> <p>Brian Balfour (ex-VP Growth at HubSpot) coined the "4 Fits" framework. If one link breaks, the business dies. AI helps you with none of these.</p> <figure class="article-figure"> ${renderComponent($$result2, "Image", $$Image, { "src": fourFitsImg, "alt": "4 Fits Chain", "class": "article-image" })} <figcaption>The Chain of Business Physics. AI supercharges the "Product" link, but if Market, Channel, or Model are weak, the chain snaps.</figcaption> </figure> <div class="checklist-box"> <h4>The Chain of Survival</h4> <ul> <li><strong>1. Market-Product Fit:</strong> Are you solving a searing pain for a specific person? (AI asks "Is code correct?"; Business asks "Is this useful?")</li> <li><strong>2. Product-Channel Fit:</strong> Is your product built to grow deeply in a specific channel? (e.g., SEO, Virality, Sales).</li> <li><strong>3. Channel-Model Fit:</strong> Does your price point support your channel? (You can't sell a $10 app via Sales calls).</li> <li><strong>4. Model-Market Fit:</strong> Is the market big enough to support your model?</li> </ul> </div> <h2 id="decision">Part 4: The "Go/No-Go" Decision Tree</h2> <p>Before you prompt your next app, run this simple diagnostics check.</p> <div class="key-insight"> <h4>🚦 The Diagnostics Check</h4> <p><strong>Step 1: The Mall Test (Market)</strong><br>
Did I see a real human trying to solve this problem and failing?<br> <strong>YES:</strong> Proceed. | <strong>NO:</strong> Stop. You are hallucinating a market.</p> <p><strong>Step 2: The Interface Test (Product)</strong><br>
Is my solution "Zero-Judgment" and lower friction than the status quo (like ChatGPT vs Stack Overflow)?<br> <strong>YES:</strong> Proceed. | <strong>NO:</strong> Stop.</p> <p><strong>Step 3: The Math Test (Model)</strong><br>
Cost to Acquire (Time + Ads) &lt; Lifetime Value (Price)?<br> <strong>YES:</strong> Proceed. | <strong>NO:</strong> Stop. You are building a charity.</p> </div> <h2 class="final-word">The Final Word</h2> <p>Stop celebrating "10 apps in a week." <br>Celebrate "1 business that fits."</p> <p>The code is free. The strategy is priceless.</p> <hr> <div class="key-insight"> <h4>📚 Related Reading</h4> <ul> <li><a href="/articles/pricing-trap">The $300 Website Experiment</a> — A pricing lesson in expectation gaps.</li> <li><a href="/articles/net-life-hour-protocol">The Net Life Hour Protocol</a> — Auditing the true cost of your time.</li> <li><a href="/articles/alteryx-24-hours">24 Hours to Delivery</a> — How portable skills compress learning curves.</li> </ul> </div> <p style="font-style: italic; color: #888;">This analysis was originally published as a personal essay on <a href="https://medium.com/@winstonkoh87" target="_blank">Medium</a>.</p> <footer class="article-footer"> <div class="author-bio"> <div class="author-avatar">WK</div> <div class="author-info"> <h4>Winston Koh & Project Athena</h4> <p>This protocol was co-authored by Winston and <a href="/athena">Project Athena</a><br>— his AI-powered digital personal assistant.</p> <p><a href="/about">More about us →</a></p> </div> </div> </footer> </div></article> </main> ` })}`;
}, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/articles/vibe-coding-trap.astro", void 0);

const $$file = "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/articles/vibe-coding-trap.astro";
const $$url = "/articles/vibe-coding-trap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$VibeCodingTrap,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
