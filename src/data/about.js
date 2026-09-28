// About page content. The story paragraphs are PLACEHOLDER copy — replace them with
// the restaurant's own story (who started it, when and why). Everything with a number
// is worked out from the menu, so it stays correct when the menu changes.
import { menu } from './menu.js'
import { site } from './site.js'
import { formatPrice } from '../utils/format.js'
// Unsplash stock placeholders until the restaurant's own photos arrive.
import ingredientsImage from '../assets/images/about-ingredients.webp' // wu yi — unsplash.com/photos/ARXL7bkz32o
import kitchenImage from '../assets/images/about-kitchen.webp' // Airam Dato-on — unsplash.com/photos/DYVVuq3J-Zg
import sharingImage from '../assets/images/about-sharing.webp' // Louis Hansel — unsplash.com/photos/qdE7A8XqUgc

const section = (id) => menu.find((s) => s.id === id)
const lowestPrice = (items) =>
  Math.min(...items.flatMap((item) => item.prices.map((p) => Number(p.amount)).filter(Number.isFinite)))

const setMenus = section('set-menu')?.items ?? []
const forThree = section('for-3-persons')?.items ?? []
const burgers = section('burger')?.items ?? []
// Dishes only — Add-Ons (e.g. Naga Sauce) aren't dishes.
const nagaDishes = menu
  .filter((s) => s.id !== 'add-ons')
  .flatMap((s) => s.items)
  .filter((item) => /naga/i.test(item.name))
const itemCount = menu.reduce((total, s) => total + s.items.length, 0)

export const aboutHero = {
  eyebrow: 'About us',
  title: 'Our story',
  text: `Burgers, wings, pizza, pasta and Thai-style favourites, cooked fresh in ${site.locality}.`,
}

export const story = {
  eyebrow: 'Who we are',
  title: 'A neighbourhood kitchen with big flavours',
  // PLACEHOLDER — replace with the real story.
  body: [
    `The Lemon Grass started with a simple idea: generous, full-flavoured food that everyone in ${site.locality} can enjoy.`,
    'Our menu brings together the dishes people love most — crispy and saucy wings, loaded burgers, oven-baked pasta, pizza, chow mein and warming Thai soups — with a proper kick of naga chilli for anyone who likes it hot.',
    'Come in with family, meet friends over a set menu, or call ahead for takeaway. However you join us, we would love to cook for you.',
  ],
  // `position` is the CSS object-position that keeps the subject in frame.
  mainImage: {
    image: ingredientsImage,
    alt: 'A dark bowl of fresh red chillies on slate, with ginger in the foreground',
    position: '40% 50%',
  },
  insetImage: {
    image: kitchenImage,
    alt: 'A cook spooning sauce onto a toasted bun beside a cheese-topped burger',
    position: '50% 60%',
  },
}

export const values = [
  {
    icon: 'leaf',
    title: 'Cooked to order',
    text: 'Nothing sits waiting under a lamp — every dish is cooked in our kitchen when you order it.',
  },
  {
    icon: 'flame',
    title: 'Bring the heat',
    text: 'Naga wings and naga pizza for chilli lovers — and plenty of milder picks for everyone else.',
  },
  {
    icon: 'users',
    title: 'Plenty of choice',
    text: 'Mild or fiery, a quick bite or a feast — one order covers the whole table.',
  },
  {
    icon: 'tag',
    title: 'Honest prices',
    text: `Burgers from ${formatPrice(lowestPrice(burgers))}, and set menus that won't stretch the budget.`,
  },
]

export const stats = [
  { value: itemCount, label: 'items on the menu' },
  { value: setMenus.length, label: `set menus, from\u00a0${formatPrice(lowestPrice(setMenus))}` },
  { value: forThree.length, label: 'family dishes that serve three' },
  { value: nagaDishes.length, label: 'naga-hot dishes for spice lovers' },
]

export const sharing = {
  eyebrow: 'Made for sharing',
  title: 'Good food tastes better shared',
  text: 'Pick a set menu for one, or a family dish made for three — lunch with colleagues or dinner at home, sorted.',
  image: sharingImage,
  imageAlt: 'Two people sharing a steaming bowl of stir-fried noodles topped with chilli and coriander',
  // Phones: centred on the fork and noodles. Desktop: shown almost whole beside the text.
  imagePosition: { narrow: '65% 50%', wide: '50% 55%' },
}
