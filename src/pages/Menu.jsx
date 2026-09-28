import { useMemo, useState } from 'react'
import { menu } from '../data/menu.js'
import CtaBanner from '../components/ui/CtaBanner.jsx'
import MenuNav from '../components/menu/MenuNav.jsx'
import MenuSection from '../components/menu/MenuSection.jsx'
import Icon from '../components/ui/Icon.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import './Menu.css'

const matches = (item, query) => `${item.name} ${item.description ?? ''}`.toLowerCase().includes(query)

export default function Menu() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const sections = useMemo(
    () =>
      q
        ? menu
            .map((section) => ({ ...section, items: section.items.filter((item) => matches(item, q)) }))
            .filter((section) => section.items.length)
        : menu,
    [q],
  )
  const visibleIds = useMemo(() => new Set(sections.map((s) => s.id)), [sections])
  const count = sections.reduce((total, section) => total + section.items.length, 0)

  return (
    <>
      <PageHero
        eyebrow="The Lemon Grass"
        title="Our Menu"
        text="Burgers, wings, pizza, pasta, soups and set menus — cooked fresh to order."
      />

      {/* The category bar only sticks while the menu itself is on screen. */}
      <div className="menu-body">
        <MenuNav sections={menu} visibleIds={visibleIds} />

        <div className="container menu-page">
          <div className="menu-page__toolbar">
            <div className="menu-search">
              <Icon name="search" size={20} />
              <label htmlFor="menu-search" className="visually-hidden">
                Search dishes
              </label>
              <input
                id="menu-search"
                type="search"
                placeholder="Search dishes…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button type="button" className="menu-search__clear" onClick={() => setQuery('')}>
                  <Icon name="close" size={18} />
                  <span className="visually-hidden">Clear search</span>
                </button>
              )}
            </div>
            <p className="menu-page__count" aria-live="polite">
              {q ? `${count} ${count === 1 ? 'dish' : 'dishes'} found` : `${count} dishes`}
            </p>
          </div>

          {sections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}

          {!sections.length && (
            <div className="menu-page__empty">
              <p>No dishes match “{query.trim()}”.</p>
              <button type="button" className="text-link" onClick={() => setQuery('')}>
                Clear search
              </button>
            </div>
          )}

          <p className="menu-page__footnote">All prices are in Bangladeshi Taka (৳).</p>
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
