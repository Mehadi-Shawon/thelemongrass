import { formatPrice, keepQuantitiesTogether } from '../../utils/format.js'

// One dish row. In a section with price columns (`labels`), prices line up under the
// column headers; an item with a single unlabelled price shows just that price.
// Labelled options (e.g. "With Cheese") are listed underneath, as on the printed menu.
export default function MenuItem({ item, labels }) {
  const main = item.prices.find((p) => !p.label)
  const useColumns = labels && !main
  const options = useColumns ? [] : item.prices.filter((p) => p.label)

  return (
    <li className="menu-item">
      <div className="menu-item__row">
        <h3 className="menu-item__name">{keepQuantitiesTogether(item.name)}</h3>
        {useColumns ? (
          <div className="menu-item__prices">
            {labels.map((label) => {
              const price = item.prices.find((p) => p.label === label)
              return price ? (
                <span key={label} className="menu-item__price menu-item__price--col">
                  <span className="visually-hidden">{label}: </span>
                  {formatPrice(price.amount)}
                </span>
              ) : (
                <span key={label} className="menu-item__price menu-item__price--col menu-item__price--none">
                  <span aria-hidden="true">–</span>
                  <span className="visually-hidden">{label}: not available</span>
                </span>
              )
            })}
          </div>
        ) : (
          main && <span className="menu-item__price">{formatPrice(main.amount)}</span>
        )}
      </div>

      {item.description && <p className="menu-item__desc">{item.description}</p>}

      {options.map((option) => (
        <p key={option.label} className="menu-item__option">
          <span className="menu-item__option-label">{option.label}</span>
          <span className="menu-item__option-price">{formatPrice(option.amount)}</span>
        </p>
      ))}
    </li>
  )
}
