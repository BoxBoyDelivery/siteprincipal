import type { JSX } from 'react'

const VizRoute = (): JSX.Element => {
  return (
    <svg viewBox="0 0 180 80" className="h-full w-full">
      <path
        d="M14 60 Q 50 10, 90 38 T 168 18"
        fill="none"
        stroke="#FF914D"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="route-flow"
      />
      <g transform="translate(14 60)">
        <circle r="6" fill="#FF914D" />
        <circle r="2.5" fill="#fff" />
      </g>
      <g transform="translate(90 38)">
        <circle r="4" fill="#FFBD2E" />
        <circle r="1.5" fill="#fff" />
      </g>
      <g transform="translate(168 18)">
        <path d="M0 -10 a6 6 0 1 1 -0.01 0 z" fill="#292828" />
        <circle cy="-10" r="2" fill="#fff" />
      </g>
      <line
        x1="10"
        x2="170"
        y1="70"
        y2="70"
        stroke="#FFBD2E"
        strokeOpacity=".25"
        strokeDasharray="2 4"
      />
    </svg>
  )
}

export { VizRoute }
