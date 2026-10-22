# Roadmap

Planned software work for the Second Half website (`web/`) and its brand tooling. Estimates are rough, for one developer (the founder), and include testing and review.

**Where we are now:** a static Next.js 16 site with a homepage (Hero, Manifesto, The Rack, Stories teaser) and an Impressum page with placeholder details. Shirts come from a hard-coded array of 3 illustrated placeholders in `web/data/shirts.ts`. There are no per-shirt pages, no real photos, no tests, no CI, no SEO metadata beyond the root `<title>`, and no deployment.

**Constraints every phase respects** (see [README.md](README.md) and [docs/brand/BRAND.md](docs/brand/BRAND.md)):

- **No checkout / payment / customer accounts** while the shop is in its validation stage. Shirts are sold via Kleinanzeigen or Instagram DM; the site links out. Phases 1–6 do not collect, store or process visitors' or customers' personal data.
- Brand lexicon in UI and code-facing copy: "The Rack" (never "catalog"), "The Marks" (never "defects"), "Start its second half" (never "Add to cart"), shirts "have lived" (never "worn/used/second-hand"). Price never leads.
- English only. BRAND.md fixes the brand language as English, so there is **no i18n phase**; the only German content is the legally required pages (Impressum, Datenschutzerklärung).

---

## Phase 0 — Engineering foundations (~8 h)

- [ ] GitHub Actions CI: `npm ci`, `npm run lint`, `tsc --noEmit`, `npm run build` on every push/PR (2 h)
- [ ] Unit/component test setup (Vitest + React Testing Library) with first tests for `ShirtCard` CTA logic: `gone` → tag, `kleinanzeigenUrl` → "Start its second half →", otherwise → "DM on Instagram to ask" (3 h)
- [ ] Extract the Instagram URL (currently duplicated in 4 components) into one config module (0.5 h)
- [ ] Copy lint: a small script/test that fails the build if banned words ("worn", "used", "second-hand", "sold out", "add to cart", "catalog", …) appear in shirt data or UI strings (2 h)
- [ ] Prettier + editorconfig, `engines` field for Node version (0.5 h)

## Phase 1 — Real Rack data & photo pipeline (~14 h)

- [ ] Move shirt data from the TS array to one content file per shirt (e.g. `web/content/rack/<slug>.json` or MDX) with schema validation at build time (types + runtime check; build fails on a malformed shirt) (4 h)
- [ ] Image pipeline: per-shirt photo folders, `next/image` with responsive sizes and blur placeholders, replace `JerseyIllustration` with real photos while keeping the illustrations as a fallback (4 h)
- [ ] Support multiple photos per shirt in the three brand moods (golden hour, night, close) (2 h)
- [ ] "Drop" grouping field so shirts can be released as small drops, and ordering on The Rack (2 h)
- [ ] Gone shirts: keep them visible in a quiet "Gone to their second half" archive section instead of deleting them (2 h)

## Phase 2 — Shirt pages & the mark annotations (~16 h)

- [ ] Statically generated shirt pages at `/rack/[slug]` (`generateStaticParams`), linked from each card (3 h)
- [ ] Page layout: storyteller first (story / "First Half"), archivist second (The Marks, maker, size, price last and quiet), CTA per existing rules (4 h)
- [ ] **Mark annotations component** — the brand's signature device: pitch-green "+" markers, hairline leader lines and Space Mono labels positioned over the photo from coordinates stored in the shirt's data (`{ x, y, label }`); responsive and keyboard/screen-reader accessible (labels also rendered as a list) (6 h)
- [ ] Simple local authoring helper for mark coordinates (dev-only page: click on the photo → copy `{x, y}`) (2 h)
- [ ] 404 / unknown-slug handling (1 h)

## Phase 3 — Stories from the Wearers (~8 h)

- [ ] `/stories` index and `/stories/[slug]` pages authored in MDX, each optionally linked to a shirt (3 h)
- [ ] Film embed component: self-hosted MP4 with poster frame and subtitle styling in brand type, or link-out to Instagram — no third-party tracking embeds (3 h)
- [ ] Replace the homepage Stories teaser's static copy with the latest story (2 h)

## Phase 4 — SEO, accessibility & performance (~10 h)

- [ ] Per-page metadata, canonical URLs, `sitemap.ts` and `robots.ts` (2 h)
- [ ] Generated Open Graph images per shirt and per story with `next/og` in brand typography (3 h)
- [ ] Structured data (JSON-LD `Product` on shirt pages, `Organization` on home) (2 h)
- [ ] Accessibility pass (contrast of Sepia on Paper, focus states, alt text rules for shirt photos) and Lighthouse budget in CI (3 h)

## Phase 5 — Legal pages & deployment (~8 h)

- [ ] Datenschutzerklärung page (hosting provider logs, self-hosted fonts, no cookies/analytics) alongside the Impressum (2 h)
- [ ] Impressum: read details from environment/config so placeholders can't ship to production by accident (build fails in production if placeholders remain) (2 h)
- [ ] Deploy to Vercel: preview deployments per PR, production on `main`, custom domain (3 h)
- [ ] Optional privacy-friendly, cookieless page-view counts (e.g. Vercel Web Analytics) — only aggregate counts, no personal data (1 h)

## Phase 6 — Brand asset tooling (~6 h)

- [ ] Replace the manual macOS-only headless Chrome command with a cross-platform `npm run assets` script (Playwright) that renders every `brand-assets/**/*.html` generator to PNG at its declared size (4 h)
- [ ] Generate Instagram "new shirt" story/listing images from the same shirt content files used by the site, so one entry feeds both (2 h)

**Subtotal for Phases 0–6: ~70 hours.**

---

## Phase 7 — Commerce (gated, not scheduled) (~12 h)

**Only if the founder confirms the business stage has changed** (Gewerbe registered, etc. — see README "Business & legal stage"). Until then this phase is explicitly out of scope and not counted above.

If it happens, the shop will **not** build its own checkout or store customer data. Payments, customer details (names, addresses, emails) and order records are delegated entirely to a hosted third-party provider, e.g. **Stripe Checkout / Payment Links** or a **Shopify** Buy Button:

- [ ] Per-shirt hosted checkout link ("Start its second half →") replacing the Kleinanzeigen link (3 h)
- [ ] Webhook (signature-verified) that only flips a shirt to `gone` after a completed payment — it stores no buyer data (4 h)
- [ ] Widerrufsbelehrung / AGB pages and updated Datenschutzerklärung naming the provider (3 h)
- [ ] End-to-end test against the provider's test mode (2 h)

> **Note on personal data:** any checkout inevitably involves buyers' personal data. Keeping it entirely inside the payment provider (the site never receives or stores it) is the design choice that keeps this repository free of other people's personal data.
