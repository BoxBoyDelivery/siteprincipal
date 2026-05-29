import type { JSX } from 'react'

const VizPulse = (): JSX.Element => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 160 80"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle
      cx="80"
      cy="40"
      r="30"
      fill="none"
      stroke="#ffbd59"
      strokeWidth="1"
      opacity="0.22"
      className="radar-ring"
    />
    <circle
      cx="80"
      cy="40"
      r="21"
      fill="none"
      stroke="#ff914d"
      strokeWidth="1.1"
      opacity="0.38"
      className="radar-ring r2"
    />
    <circle
      cx="80"
      cy="40"
      r="13"
      fill="none"
      stroke="#ff914d"
      strokeWidth="1.2"
      opacity="0.52"
      className="radar-ring r3"
    />
    <circle cx="80" cy="40" r="7" fill="#ff914d" opacity="0.18" />
    <circle cx="80" cy="40" r="4" fill="#ff914d" opacity="0.88" />
    <circle cx="76" cy="40" r="1.1" fill="white" opacity="0.85" />
    <circle cx="80" cy="40" r="1.1" fill="white" opacity="0.85" />
    <circle cx="84" cy="40" r="1.1" fill="white" opacity="0.85" />
  </svg>
)

export { VizPulse }
