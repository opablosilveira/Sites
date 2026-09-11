# First Wave Client Sites Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish eight individualized, conversion-focused landing pages to Vercel and return every production URL.

**Architecture:** Each business remains an independent Vite + React + TypeScript project at the repository root. A small local content module drives the copy and verified public contact details, while a focused one-page component and theme stylesheet provide the site-specific visual identity without coupling deployments.

**Tech Stack:** Vite, React, TypeScript, CSS, Playwright, Vercel, Portless.

**Spec:** `docs/superpowers/specs/2026-09-10-client-sites-first-wave-design.md`

## Global Constraints

- Use Node.js 24 or newer and run local web previews through `portless <stable-slug> npm run dev`.
- Use only public facts and official Instagram, Linktree, Google Business, and WhatsApp destinations.
- If a contact fact cannot be verified, route conversion to the official Instagram rather than inventing it.
- Include semantic landmarks, skip link, keyboard-visible focus states, responsive layouts, a fixed conversion action and contextual conversion links.
- Never add simulated booking, cart, stock, prices, availability, medical advice, medical outcomes or unsupported testimonials.
- Keep each folder independently deployable and link it to a Vercel project with matching folder slug.
- Run the local verification command and production-check the public heading and conversion link before handoff.

---

## File Structure

- `clinica-integra-itu/`: health-practice landing page, verified Linktree contact and natural-green theme.
- `cafe-e-prosa-itu/`: café landing page, verified address/hours and espresso-cream theme.
- `itu-reliquias/`: custom furniture and antiques gallery, custom-order contact route and wood/brass theme.
- `dr-renato-gandolfi/`: medical appointment page with public credentials and cautious clinical wording.
- `vegas-lounge-pub/`: nightlife venue page, official events/table enquiry route and dark neon theme.
- `doce-alice-cosmeticos/`: cosmetics supplies page, official WhatsApp route and beauty-retail theme.
- `dr-marcos-ramos/`: psychiatric appointment page with public credentials/contacts and cautious wording.
- `stop-car-itu/`: automotive service page with official WhatsApp/address and graphite-red theme.

Each folder contains `src/site.ts`, `src/App.tsx`, `src/index.css`, `index.html`, `package.json`, `vercel.json`, and `tests/smoke.spec.ts` (where Playwright is supported by the inherited project structure).

### Task 1: Establish the independent-project baseline

**Files:**
- Create: eight project folders listed above, each copied from the existing `dra-jeice-vieira` Vite baseline.
- Modify: each `package.json`, `index.html`, `vercel.json`.

**Interfaces:**
- Produces: an independently buildable `npm run build` project exposing `src/App.tsx` and `src/site.ts`.

- [ ] **Step 1: Copy the verified Vite baseline into each business folder.**
- [ ] **Step 2: Change package names, document titles, descriptions and Vercel output settings to each business name.**
- [ ] **Step 3: Remove Dra. Jeice-specific images, video, copy, contacts and favicon references.**
- [ ] **Step 4: Run `npm install` only when the copied lockfile/dependencies need it, then run `npm run build` in every folder.**
- [ ] **Step 5: Commit the shared baseline.**

### Task 2: Build Clínica Integra and Café & Prosa

**Files:**
- Create: `clinica-integra-itu/src/site.ts`, `cafe-e-prosa-itu/src/site.ts`.
- Modify: both projects' `src/App.tsx`, `src/index.css`, `tests/smoke.spec.ts`.

**Interfaces:**
- Consumes: independent Vite baseline from Task 1.
- Produces: `site` objects with `name`, `eyebrow`, `headline`, `highlights`, `contactUrl`, `instagramUrl`, `address`, and `mapUrl` consumed by each page.

- [ ] **Step 1: Confirm both official Linktree/contact destinations and select public profile images.**
- [ ] **Step 2: Write smoke tests asserting the business heading, official conversion destination and public address.**
- [ ] **Step 3: Implement the calm Clínica Integra health page and the warm Café & Prosa food-led page with different layouts and themes.**
- [ ] **Step 4: Run `npm run build` and each smoke test; correct only actual failures.**
- [ ] **Step 5: Commit both completed sites.**

### Task 3: Build Itu Relíquias and Vegas Lounge & Pub

**Files:**
- Create: `itu-reliquias/src/site.ts`, `vegas-lounge-pub/src/site.ts`.
- Modify: both projects' `src/App.tsx`, `src/index.css`, `tests/smoke.spec.ts`.

**Interfaces:**
- Consumes: Task 1 baseline and official profile/Linktree sources.
- Produces: production-ready gallery-led and nightlife landing pages.

- [ ] **Step 1: Confirm the official custom-order and venue enquiry destinations.**
- [ ] **Step 2: Write smoke tests for each heading and official conversion link.**
- [ ] **Step 3: Implement Itu Relíquias with tactile gallery hierarchy; implement Vegas with event atmosphere but no unsupported schedule or availability claim.**
- [ ] **Step 4: Run build and smoke verification for both sites.**
- [ ] **Step 5: Commit both completed sites.**

### Task 4: Build Doce Alice Cosméticos and Stop Car

**Files:**
- Create: `doce-alice-cosmeticos/src/site.ts`, `stop-car-itu/src/site.ts`.
- Modify: both projects' `src/App.tsx`, `src/index.css`, `tests/smoke.spec.ts`.

**Interfaces:**
- Consumes: Task 1 baseline and public business facts.
- Produces: order-enquiry and automotive quote-request pages.

- [ ] **Step 1: Confirm Doce Alice official WhatsApp and Stop Car official WhatsApp/address.**
- [ ] **Step 2: Write smoke tests for conversion links and the Stop Car address.**
- [ ] **Step 3: Implement beauty-retail and technical automotive themes with transparent, non-promissory CTA copy.**
- [ ] **Step 4: Run build and smoke verification for both sites.**
- [ ] **Step 5: Commit both completed sites.**

### Task 5: Build Dr. Renato Gandolfi and Dr. Marcos Ramos

**Files:**
- Create: `dr-renato-gandolfi/src/site.ts`, `dr-marcos-ramos/src/site.ts`.
- Modify: both projects' `src/App.tsx`, `src/index.css`, `tests/smoke.spec.ts`.

**Interfaces:**
- Consumes: Task 1 baseline and verified public doctor credentials/contact facts.
- Produces: two appointment-enquiry pages with medical-content safeguards.

- [ ] **Step 1: Confirm the official appointment routes and public credentials before placing them in copy.**
- [ ] **Step 2: Write smoke tests for each heading, credential and conversion link.**
- [ ] **Step 3: Implement distinct reserved medical layouts with only public specialties and an individual-evaluation statement.**
- [ ] **Step 4: Run build and smoke verification for both sites.**
- [ ] **Step 5: Commit both completed sites.**

### Task 6: Publish and verify all eight sites

**Files:**
- Modify: `.vercel` project linkage files only where Vercel creates them locally; keep them ignored.

**Interfaces:**
- Consumes: eight verified local static builds.
- Produces: one live production Vercel URL per folder.

- [ ] **Step 1: Commit and push the final repository state to `main`.**
- [ ] **Step 2: Create or link eight matching Vercel projects with each folder as its Git root directory.**
- [ ] **Step 3: Deploy each folder to production and record the resulting canonical URL.**
- [ ] **Step 4: Request each production homepage and verify its business heading plus at least one official conversion link.**
- [ ] **Step 5: Commit any intentional deployment configuration and report the eight verified URLs.**

## Self-Review

- Spec coverage: Tasks 1–5 map every included business, its required conversion focus, its visual direction and its content safeguards; Task 6 maps the separate Vercel publication and production verification requirement.
- Placeholder scan: this plan contains no implementation placeholders; every task names the folders, interfaces and verification expected.
- Type consistency: every business exposes the same local `site` object shape to its own page; deployments consume only the build output from that folder.
