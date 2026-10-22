# Second Half

**Real vintage football shirts that have already lived — found one by one. The second half is yours.**

Second Half is a small vintage football shirt shop based in Munich, founded by João Pedro Campos. This repository is its software and design home:

- **The website** ([`web/`](web/)) — a Next.js + TypeScript site that presents the shop's shirts ("The Rack"), each with its story and its honestly listed marks, and links out to where the shirt can be bought.
- **The brand system** — the brand book ([`docs/brand/BRAND.md`](docs/brand/BRAND.md)), the canonical logo SVGs, HTML generators for social-media assets, and HTML mockups (brand board, Instagram kit).

Brand language is English; currency is EUR.

## Who it's for

- **Visitors / wearers:** people (roughly 18–35) who love football culture and style and want a real vintage shirt with a past — not a €400 grail and not a fake (see BRAND.md §2).
- **The founder (and anyone working on the repo, human or AI):** a single place where the site code, the brand rules it must follow, and the assets it uses live together.

## Built with

Verified from [`web/package.json`](web/package.json):

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router, Turbopack) |
| UI | React 19, TypeScript 5 |
| Styling | CSS Modules + design tokens in `web/app/globals.css` (Sunday League palette). Tailwind CSS 4 is wired in via PostCSS but not used for the visual identity. |
| Fonts | Fraunces, Archivo, Space Mono via `next/font/google` (self-hosted at build time) |
| Linting | ESLint 9 + `eslint-config-next` |
| Brand assets | Hand-written SVG; PNGs rendered from HTML with headless Chrome |

The site is currently fully static (`/` and `/impressum`), has no backend, no database, no checkout and stores no visitor data.

## Running it locally

Requirements: Node.js 20+ and npm.

```bash
cd web
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build — run before shipping any change
npm run start      # serve the production build
npm run lint       # ESLint
```

From the repo root you can also run `npm run dev --prefix web`, or use the `"web"` config in `.claude/launch.json`.

The brand mockups are plain HTML; serve the repo root and open them in a browser:

```bash
python3 -m http.server 4173   # then open http://localhost:4173/mockups/brand-board.html
```

(or the `"mockups"` config in `.claude/launch.json`). See [web/README.md](web/README.md) for how to add a shirt, mark one as gone, and how the CTA logic works.

## Repository layout

```
web/                           ← the website (Next.js) — see "The website" below
  app/                         ← routes: homepage, /impressum, layout, globals.css tokens
  components/                  ← Header, Hero, Manifesto, Rack, ShirtCard, StoriesTeaser, Footer, jerseys/
  data/shirts.ts               ← typed shirt data model (currently 3 illustrated placeholders)
  public/                      ← logo SVGs served by the site
docs/brand/BRAND.md            ← THE brand book: all decisions + decisions log
mockups/brand-board.html       ← visual identity, one scrollable page (Sunday League)
mockups/instagram-kit.html     ← IG templates at real dimensions, first-12 grid plan, caption formulas
mockups/website-prototype.html ← superseded by web/ — kept for layout/copy reference only
brand-assets/logo-mark.svg     ← canonical logo (+ -inverse for dark grounds, -small for ≲24px)
brand-assets/avatar-*.png      ← 1080×1080 profile pictures (pitch = in use on IG)
brand-assets/avatar-*.html     ← generators for the PNGs (see "Regenerating assets")
brand-assets/post-01/          ← first IG post: 4 slides (1080×1350) + caption.txt + slide generators
.claude/launch.json            ← local run configs: "mockups" (python3 -m http.server 4173) and "web" (Next dev, port 3000)
ROADMAP.md                     ← planned software work, phased with estimates
LICENSE                        ← MIT (code only — see "License")
```

## Brand: start here

**[docs/brand/BRAND.md](docs/brand/BRAND.md) is the source of truth.** Every decision about positioning, voice, colour, type, logo, photography, and Instagram strategy lives there, including a dated decisions log with the reasoning. Nothing in it is placeholder — every rule was explicitly decided and approved by the founder. **Do not re-litigate decided items; extend from them.** If a new decision is made, append it to the decisions log.

### Key decisions in one paragraph (details in BRAND.md)

The brand sells **stories, not jerseys** — every shirt "has lived a first half"; buying starts its second. Sourcing is **"found, not stocked"** (scavenged one by one from individual sellers — uniqueness is structural, not marketing). Voice rules are law: **never** call the shirts "worn/used/second-hand" (they *have lived*); **price is a consequence, never an argument** (no price on first-touch surfaces, only on listings/Stories); **we talk about ourselves, never about others** (no comparatives, no positioning against collectors — they're cousins, not enemies). Palette is **Sunday League** (cream paper / espresso / pitch green as the one recognition colour) and **the brand wears no club's colours** — critically, never black+yellow (Dortmund; shop is in Germany). The logo is **the kickoff circle**: monochrome, halfway line extending beyond the circle (non-negotiable — it's what makes it read as pitch markings, not a ball), left half solid (played), right half open (yours), spot as negative space. Instagram is **brand-first**: cinematic wearer-story films, annotated marks carousels, manifesto cards; **selling only in Stories/Highlights, never the feed**.

## The website (`web/`)

Real Next.js (App Router, TypeScript) app, styled with CSS Modules + a `globals.css` token file carrying the Sunday League palette — no Tailwind utility classes used for the visual identity. Not deployed anywhere yet.

Key behaviour: each shirt card's CTA links to its `kleinanzeigenUrl` if set, otherwise falls back to "DM on Instagram to ask"; a `status: 'gone'` shirt shows a quiet "Gone to its second half" line instead of a CTA (never "sold out"). Data lives in `web/data/shirts.ts` — currently 3 illustrated placeholder shirts (Milan/Dortmund/Fiorentina), not the founder's real 5. The Impressum page (`web/app/impressum/`) still contains bracketed placeholders, not real details.

## Current state (last updated 2026-07-29)

| Area | Status |
|---|---|
| Brand platform (idea, positioning, manifesto, voice, lexicon) | ✅ Complete — BRAND.md |
| Visual identity (palette "Sunday League", type, logo, photography direction) | ✅ Complete — BRAND.md + [mockups/brand-board.html](mockups/brand-board.html) |
| Logo ("the kickoff circle") | ✅ Final — canonical SVGs in [brand-assets/](brand-assets/) |
| Instagram account | ✅ Created: [@startyoursecondhalf](https://www.instagram.com/startyoursecondhalf/), pitch avatar + bio set |
| First post (manifesto carousel) | ✅ Assets ready in [brand-assets/post-01/](brand-assets/post-01/) — publish & pin |
| Instagram launch kit (templates, grid plan, captions, cadence) | ✅ Complete — [mockups/instagram-kit.html](mockups/instagram-kit.html) |
| Website | ✅ Real Next.js site in [web/](web/) — Sunday League palette, showcase only (no checkout). Not deployed/public yet. |
| Products / photography | 🔶 5 real jerseys identified (founder's own, being resold as **private sales** — see below). No photos yet; site still shows 3 illustrated placeholders. |
| Commerce mechanics | ✅ Decided: **no checkout.** Sell via Kleinanzeigen (primary) or Instagram DM; site links out per shirt. |

## Business & legal stage (read before suggesting any commerce feature)

**Current stage: validation, not a registered business.** The founder is currently reselling **5 jerseys he already personally owned** (not sourced to flip) — an ordinary private sale, not commercial activity, under German law. No Gewerbe (trade licence) is registered. This directly shapes product decisions:

- **No checkout, no payment processing, no live storefront.** Sales happen on Kleinanzeigen or via Instagram DM; the website only showcases and links out. Do not add cart/checkout/payment features without the founder explicitly confirming the business stage has changed.
- **Instagram is content-only for now** — no active "shop" behaviour (no consistent public storefront selling an ongoing rotation of inventory).
- **The trigger for going commercial**, if the idea validates: the founder deliberately starts **acquiring shirts specifically to resell** as an ongoing activity (vs. selling his own stuff). German law classifies based on behaviour pattern (repetition, profit intent, organisation), not on self-labelling or which sales channel is used — a "showcase-only" website or selling via Kleinanzeigen instead of a real storefront does **not** avoid this classification once sourcing-to-resell starts.
- **When that trigger happens, before scaling up:**
  1. Register a Gewerbe at the local Gewerbeamt (cheap, fast) and elect Kleinunternehmerregelung (§19 UStG) — as of 2025/2026 the thresholds are €25,000 prior-year / €100,000 current-year revenue, comfortably covering early volume.
  2. Consider the margin scheme (Differenzbesteuerung, §25a UStG) since shirts are bought from private individuals with no deductible input VAT.
  3. Get prior written approval from the founder's employer, as required by the secondary-occupation clause in his employment contract.
  4. Fill in the real Impressum details (currently placeholders in `web/app/impressum/`).
  5. Note: online marketplaces (including Kleinanzeigen) must report sellers to the Finanzamt past 30 transactions or €2,000/year revenue (Plattformen-Steuertransparenzgesetz / EU DAC7) — routing sales through Kleinanzeigen is not a way to stay unnoticed past that point.
- None of the above is legal/tax advice — the founder should confirm specifics with a Steuerberater before scaling. This section exists so future work respects the current stage; don't re-litigate it, and don't push the site toward e-commerce features until the founder says the stage has changed.

## Roadmap

The software roadmap — real shirt pages, photo pipeline, mark annotations, stories, SEO, tests, CI and deployment — lives in **[ROADMAP.md](ROADMAP.md)**.

Agreed non-software next steps, in order:

1. **Publish & pin post-01** (founder action — assets ready).
2. **Photograph the 5 real jerseys** in the three brand moods: golden hour, night flash, macro on the marks (photography rules in BRAND.md §6).
3. **Replace the 3 placeholder shirts** in `web/data/shirts.ts` with the real 5 (real photos, real Kleinanzeigen listing URLs once posted).
4. **Assemble Instagram posts 2–3** from the launch kit templates (wearer film cover, marks carousel) once photos exist; follow the first-12 grid rhythm in the kit.
5. Fill in real Impressum details in `web/app/impressum/` and deploy (Vercel) once ready to go public.
6. **If the idea validates and sourcing-to-resell starts**: work through the Business & legal stage checklist above *before* scaling up sourcing or promotion.
7. Later: packaging (programme-style insert card with the shirt's first half + blank "chapter two" page — noted in early brainstorm), and eventually the physical-shop dream.

## Working notes for future sessions (human or AI)

- Read BRAND.md before producing anything customer-facing; run the voice checks (banned words, no price on first-touch, self-referential only).
- `web/AGENTS.md`: the Next.js version in use has breaking changes vs. older releases — read the guides in `web/node_modules/next/dist/docs/` before writing code.
- All Instagram templates are built at true pixel dimensions (1080×1350 feed, 1080×1920 story) inside scaled wrappers — reuse the kit rather than designing new formats.
- The founder prefers deciding from **visual options** (2–3 built alternatives) over abstract descriptions; big decisions were made this way throughout (design direction, palette, logo).

## Regenerating assets

The PNGs are rendered from their HTML generators with headless Chrome (macOS path shown; on Linux use `google-chrome` or `chromium`):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --screenshot=brand-assets/avatar-pitch.png --window-size=1080,1080 --hide-scrollbars \
  "file://$PWD/brand-assets/avatar-pitch.html"
```

(Post slides use `--window-size=1080,1350` and `--virtual-time-budget=8000` so webfonts load.)

## License

The **source code** in this repository is released under the [MIT License](LICENSE).

The **Second Half name, the kickoff-circle logo, and the brand assets** (everything in `brand-assets/`, the logo files in `web/public/`, the brand book's identity elements, and the mockups' brand artwork) are trademarks and brand property of Second Half / João Pedro Campos and are **not** licensed for reuse under MIT. You may not use them to identify another shop, product or service. Fonts are used under their own (SIL Open Font) licences.
