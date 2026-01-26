import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C23E161l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_R40zG8VU.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | Lost in the Arena", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="error-container" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <p data-astro-cid-zetdm5md>You have drifted outside the Arena.</p> <p data-astro-cid-zetdm5md><a href="/" data-astro-cid-zetdm5md>Return to Center</a></p> </div> ` })} `;
}, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/404.astro", void 0);

const $$file = "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
