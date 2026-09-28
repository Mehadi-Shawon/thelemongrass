import { site } from '../data/site.js'

// "1250" -> "৳1,250"
export const formatPrice = (amount) => {
  const value = Number(amount)
  return Number.isFinite(value) ? `${site.currency}${value.toLocaleString('en-IN')}` : amount
}

// "Wings (6 Pcs)" -> "Wings (6\u00a0Pcs)" so a quantity never splits across lines.
export const keepQuantitiesTogether = (text) => text.replace(/(\d+) (?=Pcs?\b)/gi, '$1\u00a0')
