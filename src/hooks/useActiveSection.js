import { useEffect, useState } from 'react'

// Returns the id of the section currently being read: the last one whose top has
// scrolled above a trigger line `top` px + `ratio` of the viewport height from the top.
export default function useActiveSection(ids, { top = 0, ratio = 0 } = {}) {
  const key = ids.join('|')
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sectionIds = key ? key.split('|') : []
    const onScroll = () => {
      const line = top + window.innerHeight * ratio
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [key, top, ratio])

  return active
}
