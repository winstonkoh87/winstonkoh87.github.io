import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_C23E161l.mjs';
import 'piccolore';
import { $ as $$MelvinLayout } from '../../../chunks/MelvinLayout_BcY4CAZq.mjs';
/* empty css                                         */
export { renderers } from '../../../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MelvinLayout", $$MelvinLayout, { "title": "Connect", "description": "Get in touch with Melvin Lim. Connect via Email, LinkedIn, or Instagram.", "data-astro-cid-elywqpbr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header container" data-astro-cid-elywqpbr> <span class="eyebrow" data-astro-cid-elywqpbr>Outreach</span> <h1 data-astro-cid-elywqpbr>Let's Connect.</h1> <p class="lead" data-astro-cid-elywqpbr>Always happy to discuss policy, leadership, or just grab a coffee.</p> </section> <section class="contact-grid container" data-astro-cid-elywqpbr> <a href="mailto:melvinlim976@gmail.com" class="contact-card" data-astro-cid-elywqpbr> <div class="icon-box" data-astro-cid-elywqpbr>✉️</div> <h3 data-astro-cid-elywqpbr>Email</h3> <p data-astro-cid-elywqpbr>melvinlim976@gmail.com</p> <span class="link-arrow" data-astro-cid-elywqpbr>Send Message →</span> </a> <a href="https://www.linkedin.com/in/melvinlimjunwei/" target="_blank" rel="noopener noreferrer" class="contact-card" data-astro-cid-elywqpbr> <div class="icon-box" data-astro-cid-elywqpbr>💼</div> <h3 data-astro-cid-elywqpbr>LinkedIn</h3> <p data-astro-cid-elywqpbr>Melvin Lim Jun Wei</p> <span class="link-arrow" data-astro-cid-elywqpbr>View Profile →</span> </a> <a href="https://www.instagram.com/melv._.innnn/" target="_blank" rel="noopener noreferrer" class="contact-card" data-astro-cid-elywqpbr> <div class="icon-box" data-astro-cid-elywqpbr>📸</div> <h3 data-astro-cid-elywqpbr>Instagram</h3> <p data-astro-cid-elywqpbr>@melv._.innnn</p> <span class="link-arrow" data-astro-cid-elywqpbr>Follow →</span> </a> </section> ` })} `;
}, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/projects/melvin/contact.astro", void 0);

const $$file = "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/projects/melvin/contact.astro";
const $$url = "/projects/melvin/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
