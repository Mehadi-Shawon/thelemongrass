import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname, hash } = useLocation()
  // Pages with a full-bleed hero let the header sit on top of it.
  const overlay = pathname === '/'

  // On a new page, start at the top — or at the linked section (e.g. /menu#set-menu).
  // Runs only when the page changes; in-page anchor links scroll by themselves.
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // Elements marked data-reveal ease in as they scroll into view, on every page.
  useScrollReveal()

  return (
    <div className={`layout ${overlay ? 'layout--overlay' : ''}`.trim()}>
      <Header overlay={overlay} />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
