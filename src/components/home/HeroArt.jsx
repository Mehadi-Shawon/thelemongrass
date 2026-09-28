// Decorative lemongrass blades shown in the hero until a hero photo is provided.
// Each blade: base x, tip (x, y), curve control (x, y), half-width at the base.
const blades = [
  [300, 40, 260, 230, 470, 16],
  [310, 170, 70, 270, 360, 14],
  [320, 330, 0, 305, 330, 15],
  [335, 470, 40, 345, 310, 14],
  [345, 590, 170, 390, 420, 15],
  [350, 640, 390, 430, 560, 13],
  [290, -20, 430, 210, 590, 13],
  [325, 250, 140, 300, 400, 10],
  [340, 400, 110, 330, 380, 10],
]

export default function HeroArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 640 800" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <linearGradient id="blade" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#17602a" />
          <stop offset="0.6" stopColor="#2f9e44" />
          <stop offset="1" stopColor="#f6e03c" />
        </linearGradient>
      </defs>
      {blades.map(([bx, tx, ty, cx, cy, w], i) => (
        <path
          key={i}
          d={`M${bx - w} 800 Q${cx - w} ${cy} ${tx} ${ty} Q${cx + w} ${cy} ${bx + w} 800Z`}
          fill="url(#blade)"
          opacity={i > 6 ? 0.5 : 0.85}
        />
      ))}
    </svg>
  )
}
