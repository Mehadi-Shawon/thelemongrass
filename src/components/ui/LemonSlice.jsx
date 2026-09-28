// Decorative lemon slice (the brand logo's motif): orange rind, pale pith and
// ten juicy segments separated by pith lines.
const SEGMENTS = 10

export default function LemonSlice({ className }) {
  const lines = Array.from({ length: SEGMENTS }, (_, i) => {
    const angle = (i / SEGMENTS) * Math.PI * 2
    return [Math.cos(angle) * 172, Math.sin(angle) * 172]
  })

  return (
    <svg className={className} viewBox="-200 -200 400 400" aria-hidden="true">
      <defs>
        <radialGradient id="lemon-flesh">
          <stop offset="0" stopColor="#fbe96a" />
          <stop offset="1" stopColor="#efc50f" />
        </radialGradient>
      </defs>
      <circle r="198" fill="#f39200" />
      <circle r="184" fill="#fff4c9" />
      <circle r="170" fill="url(#lemon-flesh)" />
      {lines.map(([x, y], i) => (
        <line key={i} x1="0" y1="0" x2={x} y2={y} stroke="#fff4c9" strokeWidth="8" strokeLinecap="round" />
      ))}
      <circle r="20" fill="#fff4c9" />
    </svg>
  )
}
