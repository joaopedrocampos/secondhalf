// Placeholder content pending real photos and real Kleinanzeigen links.
//
// These three entries reuse the copy and specs from the approved prototype
// (mockups/website-prototype.html) so the tone is locked in before real
// stock exists. `kleinanzeigenUrl` is intentionally left undefined for all
// of them, which makes every card fall back to the "DM on Instagram to ask"
// CTA (see ShirtCard) — swap in a real Kleinanzeigen listing URL per shirt
// as soon as one exists, and the card will switch to "Start its second
// half →" automatically.

export type ShirtStatus = 'available' | 'gone'

export interface Shirt {
  id: string
  number: number // display index, "Shirt Nº 01" etc
  title: string // "Milan Home 1994–95"
  storyLine: string // italic Fraunces line
  marks: string[] // each becomes a "+ ..." line
  maker: string
  size: string
  price: string // e.g. "€95" — display only, never emphasized
  status: ShirtStatus
  kleinanzeigenUrl?: string
  kitStyle: 'milan' | 'dortmund' | 'fiorentina' // which placeholder illustration to render
}

export const shirts: Shirt[] = [
  {
    id: 'milan-home-1994-95',
    number: 1,
    title: 'Milan Home 1994–95',
    storyLine:
      'The fade on the shoulders says summers of five-a-side. The rest is yours to write.',
    marks: [
      'Pulled thread, left cuff',
      'Colours softened by 30 years of sun',
      'Original sponsor, intact',
    ],
    maker: 'Lotto',
    size: 'L',
    price: '€95',
    status: 'available',
    kleinanzeigenUrl: undefined,
    kitStyle: 'milan',
  },
  {
    id: 'dortmund-home-1996-97',
    number: 2,
    title: 'Dortmund Home 1996–97',
    storyLine:
      "Bought outside the Westfalenstadion, if the previous owner is to be believed. Loud then, loud now.",
    marks: [
      'Light pilling at the hem',
      "Faint number ghost on the back — it had a name once",
    ],
    maker: 'Nike',
    size: 'XL',
    price: '€90',
    status: 'available',
    kleinanzeigenUrl: undefined,
    kitStyle: 'dortmund',
  },
  {
    id: 'fiorentina-home-1998-99',
    number: 3,
    title: 'Fiorentina Home 1998–99',
    storyLine:
      "Purple doesn't survive three decades unless somebody truly refused to stop wearing it.",
    marks: [
      'Sponsor lightly cracked',
      'Tiny repair at the collar, done with love, not skill',
    ],
    maker: 'Fila',
    size: 'M',
    price: '€110',
    status: 'available',
    kleinanzeigenUrl: undefined,
    kitStyle: 'fiorentina',
  },
]
