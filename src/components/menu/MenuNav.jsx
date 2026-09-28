import { useCallback, useEffect, useRef, useState } from 'react'
import useActiveSection from '../../hooks/useActiveSection.js'
import Icon from '../ui/Icon.jsx'
import './MenuNav.css'

// Header (76px) + this bar (64px): sections count as "being read" once they pass
// a line 20% of the viewport below the bar.
const SPY = { top: 140, ratio: 0.2 }

// Sticky category bar. Always lists every category (dimming ones a search has
// emptied), highlights the section being read and keeps that chip in view.
export default function MenuNav({ sections, visibleIds }) {
  const listRef = useRef(null)
  const spied = useActiveSection(
    sections.filter((s) => visibleIds.has(s.id)).map((s) => s.id),
    SPY,
  )
  // A clicked chip stays highlighted until its smooth scroll has finished.
  const [clicked, setClicked] = useState(null)
  const active = clicked ?? spied
  const [edges, setEdges] = useState({ left: false, right: false })

  const updateEdges = useCallback(() => {
    const list = listRef.current
    if (!list) return
    setEdges({
      left: list.scrollLeft > 4,
      right: list.scrollLeft + list.clientWidth < list.scrollWidth - 4,
    })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  useEffect(() => {
    const list = listRef.current
    const link = list?.querySelector(`[data-id="${active}"]`)
    if (!link) return
    list.scrollTo({ left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2, behavior: 'smooth' })
  }, [active])

  useEffect(() => {
    if (!clicked) return
    let timer = setTimeout(() => setClicked(null), 1000)
    const onScroll = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setClicked(null), 150)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [clicked])

  const scrollChips = (direction) => {
    const list = listRef.current
    list.scrollBy({ left: direction * list.clientWidth * 0.6, behavior: 'smooth' })
  }

  const listClasses = ['menu-nav__list', edges.left && 'has-left', edges.right && 'has-right']
    .filter(Boolean)
    .join(' ')

  return (
    <nav className="menu-nav" aria-label="Menu categories">
      <div className="container menu-nav__inner">
        {edges.left && (
          <button type="button" className="menu-nav__arrow menu-nav__arrow--left" onClick={() => scrollChips(-1)}>
            <Icon name="arrow" size={18} />
            <span className="visually-hidden">Scroll categories left</span>
          </button>
        )}

        <ul ref={listRef} className={listClasses} onScroll={updateEdges}>
          {sections.map((section) => {
            const empty = !visibleIds.has(section.id)
            const isActive = !empty && active === section.id
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  data-id={section.id}
                  className={['menu-nav__link', isActive && 'is-active', empty && 'is-empty'].filter(Boolean).join(' ')}
                  aria-current={isActive ? 'true' : undefined}
                  aria-disabled={empty || undefined}
                  tabIndex={empty ? -1 : undefined}
                  onClick={() => setClicked(section.id)}
                >
                  {section.name}
                </a>
              </li>
            )
          })}
        </ul>

        {edges.right && (
          <button type="button" className="menu-nav__arrow menu-nav__arrow--right" onClick={() => scrollChips(1)}>
            <Icon name="arrow" size={18} />
            <span className="visually-hidden">Scroll categories right</span>
          </button>
        )}
      </div>
    </nav>
  )
}
