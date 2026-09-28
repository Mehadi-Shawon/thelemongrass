// Restaurant details used across the site (header, footer, contact page).
// Phones and address are from the menu card. Hours are PLACEHOLDER until confirmed.
export const site = {
  name: 'The Lemon Grass',
  tagline: 'Restaurant',
  phones: ['+88 01747-437070', '+88 01575-704046'],
  email: '',
  address: {
    street: 'House 1, Road 4, Block B',
    area: 'Bosila City Housing Developers Ltd.',
    city: 'Dhaka',
  },
  locality: 'Bosila', // short area name, used where the full address is too long
  mapUrl: '', // paste the Google Maps link here once available
  // Google Maps → Share → "Embed a map" → paste just the src="…" URL here for an exact pin;
  // until then the Contact page map searches the address.
  mapEmbedUrl: '',
  // Where Google's address search puts its pin (Bosila City Housing), so the map can be
  // centred on it. Approximate — not needed once mapEmbedUrl is set.
  mapCenter: { lat: 23.75359, lng: 90.35475 },
  currency: '৳',
  hours: [
    // weekdays: 0 = Sunday … 6 = Saturday (used to highlight today)
    { days: 'Saturday – Thursday', short: 'Sat–Thu', time: '11:30am – 10:30pm', weekdays: [6, 0, 1, 2, 3, 4] },
    { days: 'Friday', short: 'Fri', time: '3:00pm – 11:00pm', weekdays: [5] },
  ],
  social: {
    facebook: '',
    instagram: '',
  },
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]
