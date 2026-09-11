# First Wave Client Sites Design

## Goal

Create and publish eight independent conversion-focused sites in the `Sites` repository. Each site must have its own visual identity, copy, assets, contact flow, Vercel project, and production URL while reusing the proven technical structure of the existing Vite/React client sites.

## Included sites

| Folder and Vercel project | Public profile | Primary conversion | Visual direction |
| --- | --- | --- | --- |
| `clinica-integra-itu` | Clínica Integra | Appointment enquiry | Calm, editorial health design in natural green, warm white and soft stone tones. |
| `cafe-e-prosa-itu` | Café & Prosa | WhatsApp and directions | Warm, food-led café design in espresso, cream and citrus accents. |
| `itu-reliquias` | Itu Relíquias | Custom-order enquiry | Collectible-gallery design in dark wood, brass and parchment tones. |
| `dr-renato-gandolfi` | Dr. Renato Gandolfi | Appointment enquiry | Reserved medical design in navy, white and clinical blue. |
| `vegas-lounge-pub` | Vegas Lounge & Pub | Table/event enquiry | Nightlife design in near-black, neon accents and high-contrast photography. |
| `doce-alice-cosmeticos` | Doce Alice Cosméticos | WhatsApp order | High-energy beauty-retail design in pink, black and butterfly-inspired accents. |
| `dr-marcos-ramos` | Dr. Marcos Ramos | Appointment enquiry | Calm psychiatric-care design in deep blue, light gray and discreet green. |
| `stop-car-itu` | Stop Car Centro Automotivo | Review quote on WhatsApp | Automotive workshop design in graphite, red, steel and technical grid details. |

## Deferred sites

These profiles are deliberately excluded from the first wave.

- `iphone-shop-itu`: a cinematic Apple-inspired motion site, with an original product-exploration sequence. It must not imitate Apple assets, trade dress, product visuals, or proprietary interaction code.
- `ds-case-itu`: a wider mobile-accessories and technical-assistance experience, designed after the iPhone Shop direction is settled.
- `chacara-castanheira`: a scrolltelling accommodation site that reveals the property in stages. It needs a dedicated content pass covering property photos, capacity, amenities, rates, availability and booking rules.
- `republica-cafe-bar`: a hospitality site focused on menu, hours, live events and reservations, requiring an approved current menu and event schedule.

## Shared technical foundation

Each included site is an independent Vite + React + TypeScript folder under the repository root. The foundation must include:

- accessible semantic landmark structure, keyboard navigation, visible focus states and a skip link;
- responsive desktop and mobile layouts;
- a fixed WhatsApp conversion action and at least two contextual conversion links;
- local copies of only the public Instagram assets selected for the finished site;
- no simulated forms, carts, appointment booking, inventory, medical advice, price claims, or availability claims;
- a dedicated `vercel.json` and a separate Vercel project created from the site folder;
- a Playwright smoke test covering the main heading, official contact destination, address when publicly supplied, and key conversion action;
- `npm run verify` before deployment;
- production verification of the homepage and any video/media asset after deployment.

## Content and safety rules

All facts, services, credentials, addresses, phone numbers, external links and reviews must come from the public profile, its official Linktree, or an official Google Business profile. If a phone, WhatsApp target, address, schedule or claim cannot be confirmed from these sources, the site must direct visitors to Instagram rather than invent it.

Medical sites may describe publicly listed specialties and use appointment-oriented calls to action. They must not diagnose, recommend treatment, promise outcomes, publish patient details, provide emergency guidance, or quote testimonials without an official public source. The content must include a concise statement that assessment is individual where treatment or symptoms are mentioned.

## Site content model

Every site uses a local `site.ts` data module containing the business name, short copy, services/highlights, contact link, Instagram URL, address, optional map link and image selections. A reusable `LandingPage` component consumes this module; small themed components handle the hero, services, trust section, location and final call to action. This keeps the build process consistent while leaving copy and layout variations visible to users.

## Individual page scope

### Clínica Integra

Focus on psychology, neuropsychology, nutrition and psychopedagogy. The primary path is a confidential initial contact. Display the public Jardim Corazza address and use the official contact destination discovered from the Linktree. Do not position the page as crisis care.

### Café & Prosa

Focus on café, breakfast, lunch, pet-friendly environment and public opening hours. The page should lead to WhatsApp/directions and avoid a menu or price list unless supplied by the official source. Display Rua Márcia Pierroni, 68 and the profile's listed opening hours.

### Itu Relíquias

Focus on handcrafted old-wood furniture, antiques, décor and made-to-order work. Use a gallery-led page with a custom-order CTA. Display Rua Inácio Rodrigues de Moraes, 38 and the official Linktree contact path.

### Dr. Renato Gandolfi

Focus on coloproctology and general surgery, including public credentials CRM 129407 and RQE 55651/55652. The page should offer appointment enquiries for Itu and Indaiatuba. Avoid medical advice and state that each indication depends on an individual evaluation.

### Vegas Lounge & Pub

Focus on the venue atmosphere, drinks, music and current events only if they are still clearly published by the official account. The CTA asks about tables, events or opening hours through the official contact link.

### Doce Alice Cosméticos

Focus on supplies for lashes, nails and brows, online/WhatsApp orders, and the Itu/Salto presence. Avoid stock, delivery-time or price guarantees. Use the existing official WhatsApp link as the primary conversion destination.

### Dr. Marcos Ramos

Focus on psychiatric appointments available online and in person, with publicly listed CRM 109035 and official Itu/Sorocaba telephone contacts. The page must present contact rather than clinical advice and must not use mental-health testimonials or emergency claims.

### Stop Car Centro Automotivo

Focus on brakes, suspension, exhaust, alignment, balancing and oil changes. Display the public Avenida Caetano Ruggieri, 3651 address and the official WhatsApp/phone (11) 2429-4955. The main CTA is a review quote request; the page cannot quote inspection prices or time estimates.

## Deployment and Git workflow

The eight folders are committed to `main` in the `opablosilveira/Sites` repository. Each folder receives its own linked Vercel project and production deployment. The deployment metadata must record the correct Git root directory for the folder. The final handoff reports each production URL and its deployment status.

## Verification criteria

Each completed site passes local linting, TypeScript checks, the Playwright smoke test and production build. Each production URL returns the expected business heading and at least one official conversion link. Any source gaps are reported per site rather than filled with assumptions.
