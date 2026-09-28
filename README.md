# The Lemon Grass

Restaurant website built with React + Vite.

## Getting started

Requires Node.js 20.19+ or 22.12+ (the LTS release from https://nodejs.org is fine).

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Project structure

```
public/                 static files served as-is (favicon, robots.txt)
src/
  assets/
    images/             photos, logo
    icons/              SVG icons
    fonts/              self-hosted web fonts
  components/
    layout/             Layout, Header, Footer, Logo
    home/               home page sections (Hero, Intro, SignatureDishes, ...)
    menu/               menu page pieces (MenuNav, MenuSection, MenuItem)
    ui/                 reusable pieces (Button, Icon, Photo, PageHero, BrushEdge, ...)
  pages/                one file per route (Home, Menu, About, Contact)
  data/                 site details (site.js), home page copy (home.js), full menu (menu.js)
  hooks/                custom React hooks
  utils/                helper functions
  styles/               variables.css (colours, fonts) and global.css
  App.jsx               routes
  main.jsx              entry point
```

## Updating the menu

All dishes and prices live in `src/data/menu.js`, transcribed from the printed menu.
Edit a price there and it updates everywhere, including the home page's Signature
Dishes, which pick dishes from the menu by `id` (see `featuredDishes` in `home.js`).

## Photo credits

Home page photos are free stock from [Unsplash](https://unsplash.com/license) and are
placeholders until the restaurant's own photos arrive:

- Hero: [Benoît Deschasaux](https://unsplash.com/photos/60WT-38Mrwo) (mirrored)
- Our Story: [Julia Vivcharyk](https://unsplash.com/photos/tUMUjTr5nq4)
- BBQ Chicken Wings: [Snappr](https://unsplash.com/photos/-7xpgPVH8bw)
- Beef Burger: [amirali mirhashemian](https://unsplash.com/photos/sc5sTPMrVfk)
- Naga Pizza: [veda kiran](https://unsplash.com/photos/WQrzWvG-k3M)
- Oven Baked Pasta: [Shourav Sheikh](https://unsplash.com/photos/G3QteM5boY8)
- About, ingredients: [wu yi](https://unsplash.com/photos/ARXL7bkz32o)
- About, kitchen: [Airam Dato-on](https://unsplash.com/photos/DYVVuq3J-Zg)
- About, sharing: [Louis Hansel](https://unsplash.com/photos/qdE7A8XqUgc)
