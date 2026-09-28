// Transcribed from The Lemon Grass printed menu (pages 01–06). Prices in Taka.
// prices: label '' is the main price; other labels are either options such as
// 'With Cheese', or — when the section has priceLabels — its price columns.
export const menu = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    priceLabels: [],
    items: [
      { id: 'french-fry-regular', name: 'French Fry (Regular)', prices: [{ label: '', amount: 120 }] },
      { id: 'crispy-chicken-fry-leg-1-pc', name: 'Crispy Chicken Fry – Leg (1 Pc)', prices: [{ label: '', amount: 100 }] },
      { id: 'crispy-chicken-fry-breast-large-1-pc', name: 'Crispy Chicken Fry – Breast, Large (1 Pc)', prices: [{ label: '', amount: 140 }] },
      { id: 'thai-fried-chicken-2-pcs-small', name: 'Thai Fried Chicken (2 Pcs, Small)', prices: [{ label: '', amount: 130 }] },
      { id: 'crispy-chicken-wings-6-pcs', name: 'Crispy Chicken Wings (6 Pcs)', prices: [{ label: '', amount: 240 }] },
      { id: 'bbq-chicken-wings-6-pcs', name: 'BBQ Chicken Wings (6 Pcs)', prices: [{ label: '', amount: 270 }] },
      { id: 'naga-chicken-wings-6-pcs', name: 'Naga Chicken Wings (6 Pcs)', prices: [{ label: '', amount: 300 }] },
      { id: 'bbq-chicken-lollipop-6-pcs', name: 'BBQ Chicken Lollipop (6 Pcs)', prices: [{ label: '', amount: 320 }] },
    ],
  },
  {
    id: 'burger',
    name: 'Burger',
    priceLabels: [],
    items: [
      { id: 'mexican-burger', name: 'Mexican Burger', prices: [{ label: '', amount: 130 }, { label: 'With Cheese', amount: 150 }] },
      { id: 'special-burger', name: 'Special Burger', prices: [{ label: '', amount: 250 }] },
      { id: 'crispy-burger', name: 'Crispy Burger', prices: [{ label: '', amount: 170 }, { label: 'With Cheese', amount: 190 }] },
      { id: 'mexican-naga-burger', name: 'Mexican Naga Burger', prices: [{ label: '', amount: 150 }, { label: 'With Cheese', amount: 170 }] },
      { id: 'beef-burger', name: 'Beef Burger', prices: [{ label: '', amount: 280 }, { label: 'With Cheese', amount: 300 }] },
    ],
  },
  {
    id: 'sub-sandwich',
    name: 'Sub Sandwich',
    priceLabels: [],
    items: [
      { id: 'mexican-sub-sandwich', name: 'Mexican Sub Sandwich', prices: [{ label: '', amount: 190 }, { label: 'With Cheese', amount: 210 }] },
    ],
  },
  {
    id: 'shawarma',
    name: 'Shawarma',
    priceLabels: [],
    items: [
      { id: 'crispy-chicken-shawarma', name: 'Crispy Chicken Shawarma', prices: [{ label: '', amount: 150 }] },
      { id: 'crispy-chicken-cheese-shawarma', name: 'Crispy Chicken Cheese Shawarma', prices: [{ label: '', amount: 180 }] },
    ],
  },
  {
    id: 'chow-mein',
    name: 'Chow Mein',
    note: '1:1 serves one · 1:3 serves three',
    priceLabels: ['1:1', '1:3'],
    items: [
      { id: 'chicken-chow-mein', name: 'Chicken Chow Mein', prices: [{ label: '1:1', amount: 220 }, { label: '1:3', amount: 610 }] },
      { id: 'special-chow-mein', name: 'Special Chow Mein', prices: [{ label: '1:1', amount: 250 }, { label: '1:3', amount: 700 }] },
    ],
  },
  {
    id: 'soup',
    name: 'Soup',
    note: '1:1 serves one · 1:3 serves three',
    priceLabels: ['1:1', '1:3'],
    items: [
      { id: 'thai-soup', name: 'Thai Soup', prices: [{ label: '1:1', amount: 150 }, { label: '1:3', amount: 430 }] },
      { id: 'corn-soup', name: 'Corn Soup', prices: [{ label: '1:3', amount: 350 }] },
      { id: 'cream-of-mushroom-soup', name: 'Cream of Mushroom Soup', prices: [{ label: '1:3', amount: 700 }] },
      { id: 'thai-clear-soup', name: 'Thai Clear Soup', prices: [{ label: '1:3', amount: 450 }] },
      { id: 'chicken-wonton-3-pcs', name: 'Chicken Wonton (3 Pcs)', prices: [{ label: '', amount: 60 }] },
    ],
  },
  {
    id: 'meat-box',
    name: 'Meat Box',
    priceLabels: [],
    items: [
      { id: 'classic-meat-box', name: 'Classic Meat Box', prices: [{ label: '', amount: 240 }] },
      { id: 'hot-and-spicy-naga-meat-box', name: 'Hot and Spicy Naga Meat Box', prices: [{ label: '', amount: 270 }] },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    priceLabels: [],
    items: [
      { id: 'mexican-pan-pasta-small', name: 'Mexican Pan Pasta (Small)', prices: [{ label: '', amount: 200 }] },
      { id: 'oven-baked-pasta-medium', name: 'Oven Baked Pasta (Medium)', prices: [{ label: '', amount: 280 }] },
      { id: 'mexican-baked-pasta-large', name: 'Mexican Baked Pasta (Large)', prices: [{ label: '', amount: 400 }] },
      { id: 'white-cream-pasta-medium', name: 'White Cream Pasta (Medium)', prices: [{ label: '', amount: 350 }] },
      { id: 'penne-arrabbiata-pasta-small', name: 'Penne Arrabbiata Pasta (Small)', prices: [{ label: '', amount: 200 }] },
      { id: 'bbq-pan-pasta', name: 'BBQ Pan Pasta', prices: [{ label: '', amount: 220 }] },
      { id: 'oven-baked-naga-pasta', name: 'Oven Baked Naga Pasta', prices: [{ label: '', amount: 300 }] },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza',
    priceLabels: ['10"', '12"'],
    items: [
      { id: 'mexican-hot-pizza', name: 'Mexican Hot Pizza', prices: [{ label: '10"', amount: 430 }, { label: '12"', amount: 580 }] },
      { id: 'naga-pizza', name: 'Naga Pizza', prices: [{ label: '10"', amount: 450 }, { label: '12"', amount: 600 }] },
      { id: 'bbq-pizza', name: 'BBQ Pizza', prices: [{ label: '10"', amount: 470 }, { label: '12"', amount: 620 }] },
      { id: 'sausage-pizza', name: 'Sausage Pizza', prices: [{ label: '10"', amount: 520 }, { label: '12"', amount: 670 }] },
      { id: 'four-season-pizza', name: 'Four Season Pizza', prices: [{ label: '10"', amount: 620 }, { label: '12"', amount: 730 }] },
    ],
  },
  {
    id: 'for-3-persons',
    name: 'For 3 Persons',
    note: 'Each dish serves three.',
    priceLabels: [],
    items: [
      { id: 'chicken-fried-rice', name: 'Chicken Fried Rice', prices: [{ label: '', amount: 450 }] },
      { id: 'special-fried-rice', name: 'Special Fried Rice', prices: [{ label: '', amount: 550 }] },
      { id: 'chicken-masala-curry', name: 'Chicken Masala Curry', prices: [{ label: '', amount: 450 }] },
      { id: 'chicken-chilli-onion', name: 'Chicken Chilli Onion', prices: [{ label: '', amount: 450 }] },
      { id: 'sizzling-hot-curry', name: 'Sizzling Hot Curry', prices: [{ label: '', amount: 650 }] },
      { id: 'cashew-nut-salad', name: 'Cashew Nut Salad', prices: [{ label: '', amount: 500 }] },
      { id: 'chinese-chicken-vegetable', name: 'Chinese Chicken Vegetable', prices: [{ label: '', amount: 420 }] },
      { id: 'special-beef-curry', name: 'Special Beef Curry', prices: [{ label: '', amount: 800 }] },
    ],
  },
  {
    id: 'nachos',
    name: 'Nachos',
    priceLabels: [],
    items: [
      { id: 'mexican-nachos-with-cheese', name: 'Mexican Nachos With Cheese', prices: [{ label: '', amount: 200 }] },
      { id: 'spicy-cheese-nachos', name: 'Spicy Cheese Nachos', prices: [{ label: '', amount: 220 }] },
    ],
  },
  {
    id: 'set-menu',
    name: 'Set Menu',
    priceLabels: [],
    items: [
      { id: 'set-menu-1', name: 'Set Menu 1', description: 'Egg Fried Rice, Crispy Chicken (Leg Pcs), Chinese Vegetable', prices: [{ label: '', amount: 220 }] },
      { id: 'set-menu-2', name: 'Set Menu 2', description: 'Egg Fried Rice, Thai Fried Chicken (2 Pcs, Small), Chinese Vegetable', prices: [{ label: '', amount: 260 }] },
      { id: 'set-menu-3', name: 'Set Menu 3', description: 'Egg Fried Rice, Chicken Masala Curry, Chinese Vegetable', prices: [{ label: '', amount: 300 }] },
      { id: 'set-menu-4', name: 'Set Menu 4', description: 'Egg Fried Rice, Chicken Steak, Cosmo Salad, Chinese Vegetable, Poached Egg', prices: [{ label: '', amount: 420 }] },
      { id: 'set-menu-5', name: 'Set Menu 5', description: 'Egg Fried Rice, Masala Curry, Thai Fried Chicken 1 Pcs, Chinese Vegetable', prices: [{ label: '', amount: 300 }] },
    ],
  },
  {
    id: 'add-ons',
    name: 'Add-Ons',
    priceLabels: [],
    items: [
      { id: 'naga-sauce', name: 'Naga Sauce', prices: [{ label: '', amount: 30 }] },
      { id: 'extra-cheese', name: 'Extra Cheese', prices: [{ label: '', amount: 100 }] },
      { id: 'garlic-mushroom', name: 'Garlic Mushroom', prices: [{ label: '', amount: 200 }] },
      { id: 'honey-mustard-sauce', name: 'Honey Mustard Sauce', prices: [{ label: '', amount: 50 }] },
      { id: 'white-sauce', name: 'White Sauce', prices: [{ label: '', amount: 30 }] },
      { id: 'slice-cheese', name: 'Slice Cheese', prices: [{ label: '', amount: 30 }] },
      { id: 'extra-chicken', name: 'Extra Chicken', prices: [{ label: '', amount: 50 }] },
    ],
  },
  {
    id: 'shakes-and-coffee',
    name: 'Shakes & Coffee',
    priceLabels: [],
    items: [
      { id: 'cappuccino-hot-coffee', name: 'Cappuccino Hot Coffee', prices: [{ label: '', amount: 130 }] },
      { id: 'black-coffee', name: 'Black Coffee', prices: [{ label: '', amount: 100 }] },
      { id: 'oreo-milkshake', name: 'Oreo Milkshake', prices: [{ label: '', amount: 180 }] },
      { id: 'chocolate-milkshake', name: 'Chocolate Milkshake', prices: [{ label: '', amount: 180 }] },
      { id: 'strawberry-milkshake', name: 'Strawberry Milkshake', prices: [{ label: '', amount: 180 }] },
      { id: 'vanilla-milkshake', name: 'Vanilla Milkshake', prices: [{ label: '', amount: 180 }] },
      { id: 'chocolate-cold-coffee', name: 'Chocolate Cold Coffee', prices: [{ label: '', amount: 150 }] },
      { id: 'lassi', name: 'Lassi', prices: [{ label: '', amount: 140 }] },
      { id: 'mango-lassi', name: 'Mango Lassi', prices: [{ label: '', amount: 160 }] },
      { id: 'lemonade', name: 'Lemonade', prices: [{ label: '', amount: 120 }] },
      { id: 'drinks-250ml', name: 'Drinks (250ml)', prices: [{ label: '', amount: 40 }] },
      { id: 'water', name: 'Water', prices: [{ label: '', amount: 'MRP' }] },
    ],
  },
]

// Look up a dish by id, with the section it belongs to.
export const findMenuItem = (id) => {
  for (const section of menu) {
    const item = section.items.find((i) => i.id === id)
    if (item) return { ...item, section }
  }
  return null
}
