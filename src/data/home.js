// Home page content. Copy is written from the printed menu — adjust freely.
// Photos are free Unsplash stock (credits beside each import) until the restaurant's
// own photos arrive: drop a file in src/assets/images, import it here and set `image`.
// `imagePosition` is the CSS object-position that keeps the food in frame when cropped.
import hero1000 from '../assets/images/hero-1000.webp' // Benoît Deschasaux, mirrored — unsplash.com/photos/60WT-38Mrwo
import hero2000 from '../assets/images/hero-2000.webp'
import hero2800 from '../assets/images/hero-2800.webp'
import heroPortrait800 from '../assets/images/hero-portrait-800.webp' // 2:3 crop of the same photo for tall screens
import heroPortrait1400 from '../assets/images/hero-portrait-1400.webp'
import ourStoryImage from '../assets/images/our-story.webp' // Julia Vivcharyk — unsplash.com/photos/tUMUjTr5nq4
import wingsImage from '../assets/images/dish-bbq-wings.webp' // Snappr — unsplash.com/photos/-7xpgPVH8bw
import burgerImage from '../assets/images/dish-beef-burger.webp' // amirali mirhashemian — unsplash.com/photos/sc5sTPMrVfk
import pizzaImage from '../assets/images/dish-naga-pizza.webp' // veda kiran — unsplash.com/photos/WQrzWvG-k3M
import pastaImage from '../assets/images/dish-baked-pasta.webp' // Shourav Sheikh — unsplash.com/photos/G3QteM5boY8

export const hero = {
  eyebrow: 'Welcome to',
  title: 'The Lemon Grass',
  // "oven‑baked" uses a non-breaking hyphen so it never splits across lines.
  subtitle: 'Crispy wings, loaded burgers, pizza, oven\u2011baked pasta and Thai soups — cooked fresh to order in Bosila.',
  // [file, pixel width] pairs; portrait is used on tall screens (phones, portrait tablets).
  image: {
    landscape: [
      [hero1000, 1000],
      [hero2000, 2000],
      [hero2800, 2800],
    ],
    portrait: [
      [heroPortrait800, 800],
      [heroPortrait1400, 1400],
    ],
    position: '64% 85%',
    portraitPosition: '25% 65%',
  },
}

export const intro = {
  eyebrow: 'Our Story',
  title: 'Big flavours, made fresh to order',
  body: [
    'At The Lemon Grass we cook the food we love to eat — crispy wings, juicy burgers, cheesy baked pasta, pizza, chow mein and Thai-style soups — all made fresh when you order.',
    'Drop in for a meal with family and friends, grab one of our set menus, or pick up a takeaway on your way home — we would love to cook for you.',
  ],
  image: ourStoryImage,
  imageAlt: 'A cook tossing food in a pan over tall orange flames',
  // Desktop's tall 4:5 crop shows more flame; phones' 4:3 crop keeps the whole pan.
  imagePosition: { narrow: '50% 60%', wide: '50% 25%' },
}

// Dishes featured on the home page, by id from menu.js (name and price come from there).
export const featuredDishes = [
  {
    id: 'bbq-chicken-wings-6-pcs',
    image: wingsImage,
    imageAlt: 'Sticky glazed chicken wings topped with chopped chilli and spring onion',
    imagePosition: '50% 50%',
  },
  {
    id: 'beef-burger',
    image: burgerImage,
    imageAlt: 'Double beef cheeseburger with pickles, tomato and lettuce in a sesame bun',
    imagePosition: '50% 30%',
  },
  {
    id: 'naga-pizza',
    image: pizzaImage,
    imageAlt: 'Pizza topped with chicken, red pepper and sliced green chillies',
    imagePosition: '50% 50%',
  },
  {
    id: 'oven-baked-pasta-medium',
    image: pastaImage,
    imageAlt: 'Baked pasta with a long cheese pull, lifted from a white dish',
    imagePosition: '50% 45%',
  },
]

export const features = [
  {
    icon: 'leaf',
    title: 'Fresh every day',
    text: 'Every dish is cooked fresh to order in our own kitchen.',
  },
  {
    icon: 'bowl',
    title: 'Dine in',
    text: 'Relaxed seating for family meals, friends and celebrations.',
  },
  {
    icon: 'bag',
    title: 'Takeaway',
    text: 'Your favourites packed hot and ready to enjoy at home.',
  },
]

export const cta = {
  eyebrow: 'Hungry?',
  title: 'Book a table or order takeaway',
  highlight: 'takeaway', // word in the title shown with an orange marker stroke
  text: 'Call us to reserve your table or place a takeaway order — we will have it ready when you arrive.',
}
