# Second Half — website

The real Next.js build of the Second Half site: real vintage football shirts, found one
by one. Brand spec lives at `../docs/brand/BRAND.md` — read that first if you're touching
copy or visual design.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To check the production build compiles (do this before shipping any change):

```bash
npm run build
```

## Adding or updating a shirt

All shirt data lives in one place: `data/shirts.ts`. It exports a typed array of `Shirt`
objects — add a new object to the array (or edit an existing one) and the homepage rack
picks it up automatically, no other file needs to change.

```ts
{
  id: 'unique-slug',
  number: 4,                    // display index — shows as "Shirt Nº 04"
  title: 'Ajax Home 1995–96',
  storyLine: 'A short, honest, present-tense line about this shirt.',
  marks: ['Small mark one', 'Small mark two'],
  maker: 'Umbro',
  size: 'M',
  price: '€105',                // display only — small and calm, never a headline
  status: 'available',          // or 'gone'
  kleinanzeigenUrl: undefined,  // add the real listing URL once one exists
  kitStyle: 'milan',            // which placeholder illustration to render — see below
}
```

A few rules baked into the brand voice (see `docs/brand/BRAND.md` §4 for the full list):

- Never describe the shirt itself as "worn", "used", or "second-hand" — say it "has lived",
  "has a past", "has a first half behind it" instead.
- Price never leads. It's the last, quiet thing in the card footer.
- No comparisons to other sellers or to collectors — the copy only ever talks about this
  shirt.

### Marking a shirt as sold ("gone to its second half")

Set `status: 'gone'`. The card automatically drops its CTA button and shows a quiet
pitch-green "Gone to its second half" tag instead — never "SOLD OUT," never a struck-through
price.

### The CTA button logic

The card picks its call-to-action automatically based on the shirt's fields:

- `status: 'gone'` → no button, just the "Gone to its second half" tag.
- `status: 'available'` with a `kleinanzeigenUrl` set → "Start its second half →" button
  linking to that URL.
- `status: 'available'` with no `kleinanzeigenUrl` → "DM on Instagram to ask" button linking
  to the Instagram profile.

### Placeholder illustrations

There are three placeholder jersey illustrations right now (`kitStyle`: `'milan'` |
`'dortmund'` | `'fiorentina'`), in `components/jerseys/`. They stand in for real product
photography — once real photos exist, swap `<JerseyIllustration kitStyle={...} />` in
`components/ShirtCard.tsx` for a real `<img>`/`next/image` of the shirt.

## Before this goes fully public

`app/impressum/page.tsx` has bracketed placeholders (`[Your full name]`,
`[Your street address]`, etc.) — fill those in with the real registered details required
for a natural-person Impressum before the site is live for real visitors.

## Structure

```
app/
  layout.tsx        — fonts (Fraunces/Archivo/Space Mono), metadata, favicon
  page.tsx           — homepage, assembles the sections below
  globals.css         — design tokens (Sunday League palette) + base reset
  impressum/
    page.tsx          — Impressum page (placeholders — see above)
components/
  Header.tsx          — sticky header, logo + nav
  Hero.tsx            — hero section
  Manifesto.tsx        — the three manifesto lines
  Rack.tsx            — "The Rack" section, renders ShirtCard per shirt
  ShirtCard.tsx        — one shirt listing card
  StoriesTeaser.tsx    — "the marks always have a story" teaser
  Footer.tsx           — site footer
  jerseys/            — placeholder SVG jersey illustrations
data/
  shirts.ts           — the shirt data model (see above)
public/
  logo-mark*.svg       — canonical logo files (copied from ../brand-assets)
```
