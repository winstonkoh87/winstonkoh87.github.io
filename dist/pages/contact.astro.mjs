import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C23E161l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_R40zG8VU.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_0Jjocdhj.mjs';
import { w as winstonAvatar } from '../chunks/winston-avatar_CU64waFN.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Winston Koh", "description": "Get in touch with Winston Koh \u2014 Strategic Systems Architect." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-content" style="text-align: center; max-width: 600px; margin: 0 auto;"> ${renderComponent($$result2, "Image", $$Image, { "src": winstonAvatar, "alt": "Winston Koh Illustration", "class": "brand-avatar", "style": "margin: 0 auto 2rem;" })} <h1>Get in Touch</h1> <p class="page-subtitle">Let's build something durable.</p> </section> <section class="content-section centered"> <p class="contact-intro">
If something resonated, let's talk.
</p> <p class="contact-note">
I respond to specifics, not small talk.
</p> <div class="contact-cta"> <a href="https://wa.me/6583581066?text=Hi%20Winston%2C%20I%20came%20across%20your%20site%20and%20wanted%20to%20connect." class="btn btn-primary" target="_blank" rel="noopener noreferrer">
WhatsApp Me
</a> <a href="https://t.me/WinstonKoh87" class="btn btn-secondary" target="_blank" rel="noopener noreferrer" style="margin-left: 1rem;">
Telegram
</a> </div> <div class="social-links"> <a href="https://github.com/winstonkoh87" target="_blank" rel="noopener noreferrer" class="social-link">
GitHub
</a> <a href="https://linkedin.com/in/winstonkoh87" target="_blank" rel="noopener noreferrer" class="social-link">
LinkedIn
</a> </div> <!-- Recruiter Section --> <div class="recruiter-contact" style="margin-top: 2rem; padding: 1.5rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; text-align: center;"> <p style="color: var(--text-muted); margin-bottom: 1rem; font-size: 0.95rem;"> <strong style="color: var(--text-color);">Recruiters:</strong> Open to technical leadership
                discussions.
</p> <a href="mailto:winstonkoh87@gmail.com?subject=Career%20Opportunity%20-%20[Company%20Name]&body=Hi%20Winston%2C%0A%0AI%20came%20across%20your%20profile%20and%20wanted%20to%20discuss%20a%20potential%20opportunity.%0A%0A-%20Role%3A%20%0A-%20Company%3A%20%0A-%20Location%3A%20%0A%0ALooking%20forward%20to%20connecting." class="text-link" style="color: var(--accent-secondary);">
→ Email me about roles
</a> </div> </section>  <section class="content-section"> <h2>Find Me Elsewhere</h2> <div class="external-links-grid"> <a href="https://github.com/winstonkoh87/Athena-Public" target="_blank" rel="noopener noreferrer" class="external-link-card"> <span class="external-icon">📦</span> <span class="external-label">Athena-Public</span> <span class="external-desc">Open-source AI system</span> </a> <a href="https://www.carousell.sg/u/winstonkoh87/" target="_blank" rel="noopener noreferrer" class="external-link-card"> <span class="external-icon">🛒</span> <span class="external-label">Carousell</span> <span class="external-desc">Freelance services</span> </a> <a href="/Winston%20Koh%20-%20Resume.pdf" target="_blank" rel="noopener noreferrer" class="external-link-card"> <span class="external-icon">📄</span> <span class="external-label">Resume</span> <span class="external-desc">Download PDF</span> </a> <a href="https://medium.com/@winstonkoh87" target="_blank" rel="noopener noreferrer" class="external-link-card"> <span class="external-icon">✍️</span> <span class="external-label">Medium</span> <span class="external-desc">Long-form writing</span> </a> </div> </section> ` })}`;
}, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/contact.astro", void 0);

const $$file = "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
