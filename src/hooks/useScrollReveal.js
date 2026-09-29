import { useEffect } from 'react'

// Eases in elements marked `data-reveal` the first time they scroll into view by
// setting `data-revealed` on them (an attribute React doesn't manage, so re-renders
// can't undo it). New elements are picked up as they're added — on a page change, or
// when a search brings menu sections back — so nothing is left hidden. The hidden
// starting state only exists in CSS for visitors who haven't asked for reduced motion.
export default function useScrollReveal() {
  useEffect(() => {
    const reveal = (el) => el.setAttribute('data-revealed', '')
    const pending = (root) => [
      ...(root.matches?.('[data-reveal]:not([data-revealed])') ? [root] : []),
      ...(root.querySelectorAll?.('[data-reveal]:not([data-revealed])') ?? []),
    ]

    if (!('IntersectionObserver' in window)) {
      pending(document.body).forEach(reveal)
      return
    }

    const intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target)
          intersection.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    const watch = (root) => pending(root).forEach((el) => intersection.observe(el))

    watch(document.body)
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => node.nodeType === Node.ELEMENT_NODE && watch(node))
        record.removedNodes.forEach(
          (node) => node.nodeType === Node.ELEMENT_NODE && pending(node).forEach((el) => intersection.unobserve(el)),
        )
      }
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      intersection.disconnect()
      mutations.disconnect()
    }
  }, [])
}
