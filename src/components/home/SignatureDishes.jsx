import { featuredDishes } from '../../data/home.js'
import { findMenuItem } from '../../data/menu.js'
import { formatPrice } from '../../utils/format.js'
import Button from '../ui/Button.jsx'
import Photo from '../ui/Photo.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import './SignatureDishes.css'

// "৳280", or "From ৳450" when the dish comes in several sizes/options.
const priceText = (prices) => {
  const amounts = prices.map((p) => Number(p.amount)).filter(Number.isFinite)
  if (!amounts.length) return ''
  const lowest = formatPrice(Math.min(...amounts))
  return amounts.length > 1 ? `From ${lowest}` : lowest
}

export default function SignatureDishes() {
  const dishes = featuredDishes
    .map(({ id, ...photo }) => {
      const item = findMenuItem(id)
      return item && { ...item, ...photo }
    })
    .filter(Boolean)

  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="From our kitchen"
          title="Signature Dishes"
          text="A few favourites to start with — there is plenty more on the menu."
          align="center"
          reveal
        />

        <div className="dishes">
          {dishes.map((dish, i) => (
            // The wrapper carries the reveal, so the card's own hover lift is untouched.
            <div
              key={dish.id}
              className="dish-reveal"
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <article className="dish">
                <div className="dish__media">
                  <Photo
                    src={dish.image}
                    alt={dish.imageAlt || dish.name}
                    position={dish.imagePosition}
                    label="Dish photo"
                  />
                </div>
                <div className="dish__body">
                  <span className="dish__category">{dish.section.name}</span>
                  <h3 className="dish__name">{dish.name}</h3>
                  <span className="dish__price">{priceText(dish.prices)}</span>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="dishes__action" data-reveal style={{ '--reveal-delay': '200ms' }}>
          <Button to="/menu" variant="dark">
            See the Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
