import type { IconProps } from '@/modules/common/types'

/* ── Partners ─────────────────────────────────────────────────────────────── */

export { ChinaInBoxIcon } from './ChinaInBoxIcon'
export { ClubeVerdeIcon } from './ClubeVerdeIcon'
export { DominosPizzaIcon } from './DominosPizzaIcon'
export { KoniIcon } from './KoniIcon'
export { LaMoleIcon } from './LaMoleIcon'
export { LosGuacamolesIcon } from './LosGuacamolesIcon'
export { SpoletoIcon } from './SpoletoIcon'

/* ── Brand ────────────────────────────────────────────────────────────────── */

export const LogoIcon = (p: IconProps) => (
  <svg viewBox="0 0 36 36" {...p}>
    <defs>
      <linearGradient id="boxboy-logo-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#FF914D" />
        <stop offset="1" stopColor="#FFBD59" />
      </linearGradient>
    </defs>
    <rect x="3" y="6" width="30" height="24" rx="6" fill="url(#boxboy-logo-grad)" />
    <path d="M3 12 L18 18 L33 12" stroke="#292828" strokeWidth="2" fill="none" />
    <path d="M18 18 L18 30" stroke="#292828" strokeWidth="2" fill="none" />
  </svg>
)

/* ── UI ───────────────────────────────────────────────────────────────────── */

export const ArrowIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export const PlayIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M10 9l5 3-5 3z" fill="currentColor" />
  </svg>
)

export const CheckIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M4 12l5 5 11-11" />
  </svg>
)

export const ChevronIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
)

/* ── Feature icons ────────────────────────────────────────────────────────── */

export const BoltIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
  </svg>
)

export const PulseIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M3 12h4l3-8 4 16 3-8h4" />
  </svg>
)

export const RouteIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="5" r="2.5" />
    <path d="M8.5 19H14a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h5.5" />
  </svg>
)

export const HeadsetIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="2" y="14" width="5" height="7" rx="1.5" />
    <rect x="17" y="14" width="5" height="7" rx="1.5" />
    <path d="M20 21a5 5 0 0 1-5 5h-2" />
  </svg>
)

export const PlugIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0z M12 18v4" />
  </svg>
)

export const CoinIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9h4.5a2 2 0 0 1 0 4H10a2 2 0 0 0 0 4h5" />
    <path d="M12 6v2M12 16v2" />
  </svg>
)

/* ── Social ───────────────────────────────────────────────────────────────── */

export const IGIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

export const FBIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.9 2-1.9h2V2.1C16.7 2 15.5 2 14.2 2 11.6 2 10 3.6 10 6.5V10H7v4h3v8z" />
  </svg>
)

export const INIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM9 9h3v1.8c.6-1 1.9-2.1 4-2.1 4.3 0 5 2.8 5 6.4V21h-3v-5.2c0-1.5-.4-2.9-2.2-2.9-2 0-2.3 1.6-2.3 3V21H9z" />
  </svg>
)

export const YTIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23 12s0-3.4-.4-5a2.7 2.7 0 0 0-1.9-1.9C18.9 4.7 12 4.7 12 4.7s-6.9 0-8.7.4A2.7 2.7 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.7 2.7 0 0 0 1.9 1.9c1.8.4 8.7.4 8.7.4s6.9 0 8.7-.4a2.7 2.7 0 0 0 1.9-1.9c.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5z" />
  </svg>
)
