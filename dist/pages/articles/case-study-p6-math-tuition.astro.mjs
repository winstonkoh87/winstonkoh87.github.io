import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C23E161l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_R40zG8VU.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_0Jjocdhj.mjs';
/* empty css                                                    */
export { renderers } from '../../renderers.mjs';

const mathproHero = new Proxy({"src":"/_astro/mathpro-hero.Vxu3TrGE.png","width":1024,"height":559,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/mathpro-hero.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/mathpro-hero.png");
							return target[name];
						}
					});

const mathproLighthouse = new Proxy({"src":"/_astro/mathpro-lighthouse.CcWkIQIl.png","width":1024,"height":559,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/mathpro-lighthouse.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/assets/images/mathpro-lighthouse.png");
							return target[name];
						}
					});

const $$Astro = createAstro("https://winstonkoh87.github.io");
const $$CaseStudyP6MathTuition = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseStudyP6MathTuition;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Building a Tuition Centre's Lead Engine in Under One Hour | Winston Koh", "description": "From brief to deployment: a 5-page SME website and digital marketing launch plan built in under one hour.", "showFloatingButtons": false, "image": "/assets/images/mathpro-hero.png", "articleData": {
    publishedTime: "2026-01-05T08:00:00Z",
    tags: ["SME", "Lead Gen", "Astro"]
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="article-container"> <a href="/writing" class="back-link">← Back to Writing</a> <article> <header class="article-header"> <h1>Building a Tuition Centre's Lead Engine in Under One Hour</h1> <div class="article-meta"> <span>🏷️ Case Study</span> </div> <div class="article-dates"> <span>Published: <time datetime="2025-12-27">27 December 2025</time></span> <span>•</span> <span>Last updated: <time datetime="2025-12-28">28 December 2025</time></span> </div> </header> <div class="article-content"> <!-- Executive Summary Box --> <div class="exec-summary"> <h4>📋 Executive Summary</h4> <ul> <li><strong>Problem:</strong> Tutor had no website and no Google visibility — inconsistent
                            enquiries.</li> <li><strong>What we built:</strong> 5-page static site + messaging + offer tiers + enquiry CTA +
                            launch checklist.</li> <li><strong>Why this works:</strong> Parents search locally; trust comes from clear proof +
                            reviews; static site ships fast and stays cheap.</li> <li><strong>Cost:</strong> Domain (~$15/yr) + optional form tool (~$10/mo); hosting free on
                            Cloudflare.</li> <li><strong>Next step:</strong> Google Business Profile + review engine + referral script to get
                            the first 10 students.</li> </ul> </div> <p><strong>The Client:</strong> A private tutor specializing in P6 Math. Competent, experienced, but
                    completely invisible online.</p> <p><strong>The Goal:</strong> "I want to start a tuition centre, but I don't know where to begin. I need
                    a website, but also... how do I get students?"</p> <p><strong>The Deliverable:</strong> Not just a website. A complete <span style="background: rgba(34, 197, 94, 0.1); color: #22c55e; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.9em; border: 1px solid rgba(34, 197, 94, 0.3);">Digital
                        HQ</span> (website + contact system + proof + SEO basics) built in <strong>one session</strong>
using the <a href="./ai-bionic-layer">Human Intent ×
                        AI Scale</a> operating model.</p> <p>This case study documents how I approached the project as a <strong>Strategic Systems
                        Architect</strong>. The goal wasn't just "writing code" — it was designing a repeatable lead
                    flow: <em>search → proof → enquiry → trial → review → referral</em>.</p> <p><a href="/projects/p6-math-tuition/" class="demo-link">View Live Demo: MathPro Tuition →</a></p> <div class="toc-box"> <h4>Table of Contents</h4> <ul class="toc-list"> <li><a href="#problem">Part 1: The Distribution Bottleneck</a></li> <li><a href="#solution">Part 2: The "Owned Distribution" Strategy</a></li> <li><a href="#build">Part 3: The Digital HQ Build</a></li> <li><a href="#marketing">Part 4: The Zero-Ad Launch Roadmap</a></li> <li><a href="#checklist">Part 5: The 14-Day Launch Checklist</a></li> <li><a href="#tech">Part 6: Technical Architecture</a></li> <li><a href="#lessons">Part 7: Strategic Lessons</a></li> <li><a href="#deliverables">Part 8: Final Deliverables</a></li> </ul> </div> <h2 id="problem">Part 1: The Distribution Bottleneck</h2> <p>A typical Singapore tuition centre faces a classic <strong>PMOD</strong> challenge — a framework I
                    use to diagnose small business problems:</p> <ul> <li><strong>P</strong>roblem: P6 students need PSLE Math preparation</li> <li><strong>M</strong>arket: Anxious ("kiasu") parents in a specific geographic area</li> <li><strong>O</strong>perations: Small group classes, experienced teachers</li> <li><strong>D</strong>istribution: <em>This is where most fail</em></li> </ul> <blockquote> <p>"The bottleneck is not skill. It's distribution."</p> </blockquote> <p>Most tuition centres have competent teachers. Few have repeatable distribution. Many rely on
<strong>word-of-mouth</strong>, <strong>parent WhatsApp/Facebook groups</strong>, and
<strong>listing sites/directories</strong> — channels that can work early, but become unpredictable
                    when you need consistent intake. The centres that scale tend to win <strong>local intent</strong>:
                    Google search + Maps visibility + a steady flow of credible reviews.
</p> <h2 id="solution">Part 2: The "Owned Distribution" Strategy</h2> <p>Instead of relying only on rented attention (ads, listings, virality), build compounding assets that
                    get stronger over time. <strong>Owned distribution</strong> = channels where your results improve
                    over time without paying more per lead.</p> <div class="table-wrapper"> <table class="comparison-table"> <thead> <tr> <th scope="col">Rented Distribution</th> <th scope="col">Owned Distribution</th> </tr> </thead> <tbody> <tr> <td>Carousell listings (commodity)</td> <td>Your own website</td> </tr> <tr> <td>Directory listings (rented attention)</td> <td>Google Business Profile + reviews (compounding)</td> </tr> <tr> <td>Facebook Ads (ongoing spend)</td> <td>Referral flywheel (compounds)</td> </tr> </tbody> </table> </div> <h2 id="build">Part 3: The Digital HQ Build</h2> <p>A 5-page static website designed to answer parents' top objections: results, credibility, process,
                    pricing, and location.</p> <div class="table-wrapper"> <table class="comparison-table"> <thead> <tr> <th scope="col">Page</th> <th scope="col">Purpose</th> </tr> </thead> <tbody> <tr> <td>Home</td> <td>Hero, outcomes, trust signals, CTA → <em>"Is this legit?"</em></td> </tr> <tr> <td>About</td> <td>Founder story, values, teacher profiles → <em>"Can I trust this teacher?"</em></td> </tr> <tr> <td>Services</td> <td>3-tier pricing (Group, 1:1, Bootcamp) → <em>"How much / what's included?"</em></td> </tr> <tr> <td>Results</td> <td>Grade breakdown, success stories, testimonials → <em>"Does it work?"</em></td> </tr> <tr> <td>Contact</td> <td>Lead capture form, FAQ, location → <em>"How do I act now?"</em></td> </tr> </tbody> </table> </div> <figure class="article-figure"> ${renderComponent($$result2, "Image", $$Image, { "src": mathproHero, "alt": "MathPro Tuition Homepage Mockup", "loading": "lazy", "decoding": "async" })} <figcaption>The MathPro Tuition homepage: clean, high-trust, and built for conversion.</figcaption> </figure> <h3>Timeline</h3> <div class="timeline"> <div class="timeline-item"> <strong>0:00 — The "Download" (Strategy Session)</strong>
Client brain-dump. Defined USP (AL1 focus), target audience (parents in Bishan area), and
                        pricing tiers.
</div> <div class="timeline-item"> <strong>0:15 — The Build (Website Creation)</strong>
Leveraging a pre-built design system, I generated the structural HTML instantly using AI,
                        freeing time for high-value customization: offer framing, trust signals, and local SEO copy.
</div> <div class="timeline-item"> <strong>0:30 — The "Launchpad" (Deployment)</strong>
Live on the web. Near-zero hosting cost via Cloudflare Pages (fast, CDN-backed static hosting).
</div> <div class="timeline-item"> <strong>0:45 — The Roadmap (Marketing Strategy)</strong>
Produced a CMO-style launch plan: channels, sequencing, messaging, and a referral loop for
                        getting the first 10 students without ad spend.
</div> </div> <div class="key-insight"> <h4>💡 Key Insight</h4> <p>I set the positioning, offer structure, and channel sequence. <strong>Athena accelerated the
                            build</strong> so we could ship the site and launch assets in under one hour. Human intent
                        (understanding parents' anxieties) + AI scale (speed of execution) = a lead generation system
                        deployed much faster than a traditional agency.</p> </div> <h2 id="marketing">Part 4: The Zero-Ad Launch Roadmap</h2> <p>For a local tuition centre with limited budget, the priority is <strong>free, trust-based
                        channels</strong> that compound over time.</p> <h3>Channel Prioritization</h3> <div class="table-wrapper"> <table class="comparison-table"> <thead> <tr> <th scope="col">Channel</th> <th scope="col">Cost</th> <th scope="col">Priority</th> </tr> </thead> <tbody> <tr> <td>Google Business Profile</td> <td>Free</td> <td>🔥 Critical</td> </tr> <tr> <td>WhatsApp Referrals</td> <td>Free</td> <td>🔥 Critical</td> </tr> <tr> <td>Parent Facebook Groups</td> <td>Free</td> <td>High (follow group rules)</td> </tr> <tr> <td>KiasuParents Forum</td> <td>Free</td> <td>High</td> </tr> <tr> <td>Google Ads</td> <td>$300-500/mo</td> <td>Seasonal only (high-intent targeting during PSLE prep periods)</td> </tr> </tbody> </table> </div> <h3>The Flywheel</h3> <p>The goal is to create a self-reinforcing cycle:</p> <ol> <li><strong>Trial Lesson</strong> → Parent experiences the quality</li> <li><strong>Enrollment</strong> → Student joins, relationship begins</li> <li><strong>Result</strong> → Grade improvement (the real product)</li> <li><strong>Testimonial</strong> → Social proof for website/Google Business Profile</li> <li><strong>Referral</strong> → Parent tells other parents</li> <li><strong>Repeat</strong> → More trial lessons, flywheel accelerates</li> </ol> <h2 id="checklist">Part 5: The 14-Day Launch Checklist</h2> <p>Here's what to do on Day 1:</p> <div class="checklist-box"> <h4>🚀 Week 1: Foundation</h4> <ul> <li><strong>Day 1:</strong> Claim Google Business Profile. Add categories (Tuition Centre, Math
                            Tutor), services, photos of teaching space.</li> <li><strong>Day 2:</strong> Add 10 FAQs to website (parents' common questions) + internal links
                            between pages.</li> <li><strong>Day 3:</strong> Seed 3 testimonials (even informal ones from past students). Create
                            a "review request" WhatsApp template.</li> <li><strong>Day 4:</strong> Post in 3 parent groups with a specific angle (e.g., "Free PSLE Math
                            checklist") and clear CTA. Follow group rules.</li> <li><strong>Day 5:</strong> Outreach to 20 warm contacts via WhatsApp using a template: "Hi
                            [Name], I'm officially launching my tuition centre..."</li> <li><strong>Day 7:</strong> Track clicks/calls. Iterate headline + CTA based on what's working.
</li> </ul> </div> <div class="checklist-box"> <h4>📈 Week 2: Momentum</h4> <ul> <li><strong>Day 8:</strong> Follow up with warm leads. Offer a free trial lesson.</li> <li><strong>Day 9:</strong> Request Google reviews from first trial lesson parents.</li> <li><strong>Day 10:</strong> Add 2-3 more photos to Google Business Profile (teaching in action,
                            results board).</li> <li><strong>Day 12:</strong> Create a simple referral incentive: "Refer a friend → 1 free
                            lesson."</li> <li><strong>Day 14:</strong> Review Week 1-2 metrics. Goal: 5+ enquiries, 2+ trial bookings.
</li> </ul> </div> <div class="checklist-box"> <h4>📝 Copy-Paste Templates</h4> <ul> <li><strong>WhatsApp Launch (Warm Contacts):</strong><br> <em>"Hi [Name]! I'm officially launching my P6 Math tuition centre in Bishan. We focus on
                                PSLE prep with small group classes. If you know any parents looking for Math help, I'd
                                really appreciate a referral! Here's the website: [link]"</em> </li> <li><strong>Review Request (Post-Trial):</strong><br> <em>"Hi [Parent], thanks for bringing [Child] for the trial! If you found it helpful, would
                                you mind leaving a quick Google review? It really helps other parents find us. [Google
                                Review Link]"</em> </li> <li><strong>Parent Group Post (Value-First):</strong><br> <em>"Hi parents! Sharing a free PSLE Math checklist I put together — covers the common weak
                                spots for P6 students. Hope it helps! [Link to checklist or website]"</em> </li> <li><strong>Referral Incentive:</strong><br> <em>"Refer a friend → Both of you get $50 off next month's fee."</em> </li> </ul> </div> <div class="checklist-box"> <h4>📊 Tracking Setup (30 mins)</h4> <ul> <li>Add UTM parameters to links shared in WhatsApp/groups (e.g.,
<code>?utm_source=whatsapp&utm_campaign=launch</code>)
</li> <li>Track conversions: enquiry form submits, WhatsApp clicks, phone clicks</li> <li>Weekly metrics: enquiries received, trials booked, trials attended, enrollments, reviews
                            gained</li> <li>Goal: 5+ enquiries in Week 1, 2+ trial bookings by Day 14</li> </ul> </div> <p><em>Note: All testimonials and parent photos require explicit consent. Lead capture forms should
                        include a basic PDPA-compliant privacy note.</em></p> <h2 id="tech">Part 6: Technical Architecture</h2> <div class="table-wrapper"> <table class="comparison-table"> <thead> <tr> <th scope="col">Layer</th> <th scope="col">Choice</th> <th scope="col">Why</th> </tr> </thead> <tbody> <tr> <td>Framework</td> <td>Static (no build tooling)</td> <td>Deliberate choice for longevity — will work in 10 years</td> </tr> <tr> <td>Hosting</td> <td>Cloudflare Pages</td> <td>Free tier, CDN-backed, zero maintenance</td> </tr> <tr> <td>Design System</td> <td>Custom CSS variables</td> <td>Full control, no dependencies</td> </tr> <tr> <td>Form</td> <td>Client-side integration</td> <td>5-min config for email routing (Formspree/Netlify); no database required</td> </tr> </tbody> </table> </div> <figure class="article-figure"> ${renderComponent($$result2, "Image", $$Image, { "src": mathproLighthouse, "alt": "Google Lighthouse performance score showing 100/100", "loading": "lazy", "decoding": "async", "width": "1200", "height": "200" })} <figcaption>Lighthouse scores: 98/99/100/97 — static HTML outperforms most React sites</figcaption> </figure> <p>No React, no Next.js, no npm install. Just HTML, CSS, and JavaScript that will still render correctly
                    in 2035. Static files are fast, cheap, and require no ongoing maintenance.</p> <h2 id="lessons">Part 7: Strategic Lessons</h2> <ol> <li><strong>Distribution > Skill</strong>: A mediocre tutor with great distribution beats a great
                        tutor with none.</li> <li><strong>Own your pipeline</strong>: Leads from directories, marketplaces, or ads are rented.
                        Referrals and repeat enrollments are the closest thing to "owned".</li> <li><strong>Simple tech, fast execution</strong>: Static HTML ships faster than "setting up the
                        build system."</li> <li><strong>Bionic Execution (Human × AI)</strong>: The strategy (Parts 1-4) requires <em>human
                            intent</em> (understanding the parent's anxiety). The execution (Part 6) leverages <em>AI
                            scale</em> for speed. This hybrid model allows for high-performance deployment at near-zero
                        hosting cost.</li> </ol> <h2 id="deliverables">Part 8: Final Deliverables</h2> <ul> <li>✅ <a href="/projects/p6-math-tuition/">5-page website</a> (live)</li> <li>✅ Mobile responsive design</li> <li>✅ SEO meta tags</li> <li>✅ Lead capture form (demo; 5-min config for production)</li> <li>✅ Digital marketing strategy</li> <li>✅ Channel prioritization framework</li> <li>✅ 14-day launch checklist</li> </ul> <p><a href="/projects/p6-math-tuition/" class="demo-link">View the Live Demo →</a></p> <div class="key-insight"> <h4>📚 Related Reading</h4> <ul> <li><a href="/articles/ai-marketing-workflow">$5K Marketing Strategy in One Afternoon</a> — A similar AI-augmented strategy build.</li> <li><a href="/articles/sme-ai-marketing-guide">AI Marketing for SMEs</a> — The full framework for Singapore SMEs.</li> <li><a href="/articles/pricing-trap">The $300 Website Experiment</a> — When cheap websites work (and when they don't).</li> </ul> </div> </div> <footer class="article-footer"> <div class="author-bio"> <div class="author-avatar">WK</div> <div class="author-info"> <h4>Winston Koh & Project Athena</h4> <p>This case study was co-authored by Winston and <a href="/athena">Project
                                Athena</a><br>— his AI-powered digital personal assistant.</p> <p><a href="/about">More about us →</a></p> </div> </div> </footer> </article> </main> ` })}`;
}, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/articles/case-study-p6-math-tuition.astro", void 0);

const $$file = "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/articles/case-study-p6-math-tuition.astro";
const $$url = "/articles/case-study-p6-math-tuition";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CaseStudyP6MathTuition,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
