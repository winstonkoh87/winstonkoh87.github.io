import { b as createAstro, c as createComponent, a as renderTemplate, d as renderScript, e as renderSlot, f as renderHead, u as unescapeHTML, g as addAttribute } from './astro/server_C23E161l.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://winstonkoh87.github.io");
const $$MelvinLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MelvinLayout;
  const {
    title,
    description = "Portfolio of Melvin Lim | Officer, Scholar, Citizen. Exploring the intersection of Law, Public Policy, and Restorative Justice in Singapore.",
    image = "/assets/images/projects/melvin/hero-portrait.png"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, "https://winstonkoh87.github.io");
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Melvin Lim",
    "url": "https://winstonkoh87.github.io/projects/melvin",
    "image": `https://winstonkoh87.github.io${image}`,
    "sameAs": [
      "https://www.linkedin.com/in/melvinlimjunwei",
      "https://www.instagram.com/melv._.innnn/"
    ],
    "jobTitle": "Student Leader & Aspiring Legal Scholar",
    "worksFor": {
      "@type": "Organization",
      "name": "Singapore Armed Forces"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "St Andrew's Junior College"
    },
    "description": description
  });
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- SEO --><title>", ' | Melvin Lim - Law & Policy Portfolio</title><meta name="description"', '><link rel="canonical"', '><meta name="author" content="Melvin Lim"><meta name="keywords" content="Melvin Lim, Singapore, Law Student, Public Policy, Student Leader, SAJC, SAF Young Leader, Portfolio"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Schema.org --><script type="application/ld+json">', '<\/script><!-- Fonts: Playfair Display (Serif) & Inter (Sans) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">', '</head> <body> <div class="melvin-shell"> <header class="melvin-nav"> <div class="nav-container"> <a href="/projects/melvin" class="nav-brand"> <span class="brand-name">MELVIN.</span> </a> <button id="mobile-menu-btn" aria-label="Toggle menu"> <span class="hamburger"></span> </button> <nav class="nav-links"> <a href="/projects/melvin" class="nav-link">Now</a> <a href="/projects/melvin/vision" class="nav-link">Vision</a> <a href="/projects/melvin/essays" class="nav-link">Library</a> <a href="/projects/melvin/service" class="nav-link">Service</a> <a href="/projects/melvin/contact" class="nav-link contact-btn">Connect</a> </nav> </div> </header> <main> ', ' </main> <footer class="melvin-footer"> <div class="footer-content"> <p class="footer-motto">"Discipline for outcomes. Warmth for people."</p> <div class="footer-socials"> <a href="https://www.linkedin.com/in/melvinlimjunwei/" target="_blank" rel="noopener noreferrer">LinkedIn</a> <span class="social-separator">/</span> <a href="https://www.instagram.com/melv._.innnn/" target="_blank" rel="noopener noreferrer">Instagram</a> <span class="social-separator">/</span> <a href="mailto:melvinlim976@gmail.com">Email</a> </div> <div class="footer-interests"> <span>Explorer of Trails & Hikes</span> <span class="social-separator">\u2022</span> <span>Aspiring Gastronome</span> </div> <p class="footer-copyright">\n&copy; ', ` Melvin Lim. Built for the Future.
<span style="opacity: 0.3; margin: 0 0.5rem;">|</span> <a href="/portfolio" style="color: inherit; text-decoration: none; opacity: 0.5; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.5'">Return to Main Portfolio</a> </p> </div> </footer> </div> `, ' </body> <!-- Floating WhatsApp Button --> <a href="https://wa.me/6591234567?text=Hi%20Melvin,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect." class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.516-.173-.009-.371-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg> </a> </html>'])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(`${title} | Melvin Lim - Law & Policy`, "content"), addAttribute(description, "content"), addAttribute(new URL(image, "https://winstonkoh87.github.io"), "content"), unescapeHTML(schema), renderHead(), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear(), renderScript($$result, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/layouts/MelvinLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/winstonkoh/Desktop/winstonkoh87.github.io/src/layouts/MelvinLayout.astro", void 0);

export { $$MelvinLayout as $ };
