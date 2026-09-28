// Builds a tel: link from a display phone number, e.g. "+88 01747-437070" -> "tel:+8801747437070".
export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`

// Full single-line address from the address object in site.js.
export const formatAddress = (address) => Object.values(address).filter(Boolean).join(', ')

// Embeddable Google Map (no API key needed) with a pin from a search for the address.
// Google's own framing leaves the pin off-centre, so pass `center` ({ lat, lng }) to
// centre the view on it. With a centre, z=15 gives the same scale as z=16 without one.
export const mapEmbedHref = (address, center) => {
  const q = encodeURIComponent(formatAddress(address))
  return center
    ? `https://maps.google.com/maps?q=${q}&ll=${center.lat},${center.lng}&z=15&output=embed`
    : `https://maps.google.com/maps?q=${q}&z=16&output=embed`
}

// Google Maps search link for an address object from site.js.
export const mapsHref = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatAddress(address))}`
