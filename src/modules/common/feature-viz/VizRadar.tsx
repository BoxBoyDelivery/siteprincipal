import type { JSX } from 'react'

const VizRadar = (): JSX.Element => {
  return (
    <svg viewBox="0 0 120 80" className="h-full w-full">
      <defs>
        <radialGradient id="viz-radar-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF914D" stopOpacity="0" />
          <stop offset="70%" stopColor="#FF914D" stopOpacity=".35" />
          <stop offset="100%" stopColor="#FF914D" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform="translate(60 42)">
        <circle r="12" className="radar-ring" fill="none" stroke="#FF914D" strokeWidth="1.5" />
        <circle r="12" className="radar-ring r2" fill="none" stroke="#FFBD2E" strokeWidth="1.5" />
        <circle r="12" className="radar-ring r3" fill="none" stroke="#FF914D" strokeWidth="1.5" />
        <circle r="6" fill="url(#viz-radar-grad)" />
        <circle r="3.5" fill="#FF914D" />
        <circle r="1.5" fill="#fff" />
      </g>
      <circle cx="22" cy="22" r="2" fill="#292828" />
      <circle cx="100" cy="20" r="2" fill="#292828" />
      <circle cx="105" cy="60" r="2" fill="#292828" />
      <circle cx="18" cy="58" r="2" fill="#292828" />
    </svg>
  )
}

export { VizRadar }
