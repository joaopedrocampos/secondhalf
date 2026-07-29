# Second Half

**Real vintage football shirts that have already lived — found one by one. The second half is yours.**

This repository holds the brand, design assets, and (eventually) the website for Second Half, a shop selling real vintage football jerseys with stories, at accessible prices (~€100, internal target only — see voice rules). Founded by João Pedro Campos, based in Munich; brand language is English, currency EUR.

## Start here

**[docs/brand/BRAND.md](docs/brand/BRAND.md) is the source of truth.** Every decision about positioning, voice, colour, type, logo, photography, and Instagram strategy lives there, including a dated decisions log with the reasoning. Nothing in it is placeholder — every rule was explicitly decided and approved by the founder. **Do not re-litigate decided items; extend from them.** If a new decision is made, append it to the decisions log.

## Current state (2026-07-29)

| Area | Status |
|---|---|
| Brand platform (idea, positioning, manifesto, voice, lexicon) | ✅ Complete — BRAND.md |
| Visual identity (palette "Sunday League", type, logo, photography direction) | ✅ Complete — BRAND.md + [mockups/brand-board.html](mockups/brand-board.html) |
| Logo ("the kickoff circle") | ✅ Final — canonical SVGs in [brand-assets/](brand-assets/) |
| Instagram account | ✅ Created: [@startyoursecondhalf](https://www.instagram.com/startyoursecondhalf/), pitch avatar + bio set |
| First post (manifesto carousel) | ✅ Assets ready in [brand-assets/post-01/](brand-assets/post-01/) — publish & pin |
| Instagram launch kit (templates, grid plan, captions, cadence) | ✅ Complete — [mockups/instagram-kit.html](mockups/instagram-kit.html) |
| Website | 🔶 Prototype only — [mockups/website-prototype.html](mockups/website-prototype.html): **layout approved, but still in a rejected dark/amber palette; needs re-skin to Sunday League before any further website work.** Not going live yet by explicit decision. |
| Products / photography | ⬜ None yet — shirts to be scavenged one by one; no photos exist |
| Commerce mechanics (checkout vs. contact-to-buy) | ⬜ Deliberately undecided — revisit when first shirts exist |

## Repository map

```
docs/brand/BRAND.md          ← THE brand book: all decisions + decisions log
mockups/brand-board.html     ← visual identity, one scrollable page (Sunday League)
mockups/instagram-kit.html   ← IG templates at real dimensions, first-12 grid plan, caption formulas
mockups/website-prototype.html ← approved layout, OUTDATED palette (re-skin pending)
brand-assets/logo-mark.svg   ← canonical logo (+ -inverse for dark grounds, -small for ≲24px)
brand-assets/avatar-*.png    ← 1080×1080 profile pictures (pitch = in use on IG)
brand-assets/avatar-*.html   ← generators for the PNGs (see "Regenerating assets")
brand-assets/post-01/        ← first IG post: 4 slides (1080×1350) + caption.txt + slide generators
.claude/launch.json          ← local static server config (python3 -m http.server 4173)
```

## Key decisions in one paragraph (details in BRAND.md)

The brand sells **stories, not jerseys** — every shirt "has lived a first half"; buying starts its second. Sourcing is **"found, not stocked"** (scavenged one by one from individual sellers — uniqueness is structural, not marketing). Voice rules are law: **never** call the shirts "worn/used/second-hand" (they *have lived*); **price is a consequence, never an argument** (no price on first-touch surfaces, only on listings/Stories); **we talk about ourselves, never about others** (no comparatives, no positioning against collectors — they're cousins, not enemies). Palette is **Sunday League** (cream paper / espresso / pitch green as the one recognition colour) and **the brand wears no club's colours** — critically, never black+yellow (Dortmund; shop is in Germany). The logo is **the kickoff circle**: monochrome, halfway line extending beyond the circle (non-negotiable — it's what makes it read as pitch markings, not a ball), left half solid (played), right half open (yours), spot as negative space. Instagram is **brand-first**: cinematic wearer-story films, annotated marks carousels, manifesto cards; **selling only in Stories/Highlights, never the feed**.

## Roadmap (agreed next steps, in order)

1. **Publish & pin post-01** (founder action — assets ready).
2. **Scavenge the first shirts** (founder action). Photograph each in the three brand moods: golden hour, night flash, macro on the marks (photography rules in BRAND.md §6).
3. **Assemble posts 2–3** from the launch kit templates (wearer film cover, marks carousel) once photos exist; follow the first-12 grid rhythm in the kit.
4. **Re-skin the website prototype** to Sunday League (layout stays; palette/tokens from BRAND.md §5).
5. **Decide commerce mechanics** (contact-to-buy via DM vs. real checkout) — only when shirts are ready to sell.
6. Later: packaging (programme-style insert card with the shirt's first half + blank "chapter two" page — noted in early brainstorm), and eventually the physical-shop dream.

## Working notes for future sessions (human or AI)

- Read BRAND.md before producing anything customer-facing; run the voice checks (banned words, no price on first-touch, self-referential only).
- All Instagram templates are built at true pixel dimensions (1080×1350 feed, 1080×1920 story) inside scaled wrappers — reuse the kit rather than designing new formats.
- The founder prefers deciding from **visual options** (2–3 built alternatives) over abstract descriptions; big decisions were made this way throughout (design direction, palette, logo).
- Local preview: `python3 -m http.server 4173` from repo root (or the `.claude/launch.json` "mockups" config), then open `http://localhost:4173/mockups/brand-board.html`.

## Regenerating assets

The PNGs are rendered from their HTML generators with headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --screenshot=brand-assets/avatar-pitch.png --window-size=1080,1080 --hide-scrollbars \
  "file://$PWD/brand-assets/avatar-pitch.html"
```

(Post slides use `--window-size=1080,1350` and `--virtual-time-budget=8000` so webfonts load.)
