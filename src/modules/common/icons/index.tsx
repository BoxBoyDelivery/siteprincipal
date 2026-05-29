import type { JSX } from 'react'

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

const LogoIcon = (p: IconProps): JSX.Element => (
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

const ArrowIcon = (p: IconProps): JSX.Element => (
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

const PlayIcon = (p: IconProps): JSX.Element => (
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

const CheckIcon = (p: IconProps): JSX.Element => (
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

const ChevronIcon = (p: IconProps): JSX.Element => (
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

const BoltIcon = (p: IconProps): JSX.Element => (
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

const PulseIcon = (p: IconProps): JSX.Element => (
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

const RouteIcon = (p: IconProps): JSX.Element => (
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

const HeadsetIcon = (p: IconProps): JSX.Element => (
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

const PlugIcon = (p: IconProps): JSX.Element => (
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

const CoinIcon = (p: IconProps): JSX.Element => (
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

const IGIcon = (p: IconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

const FBIcon = (p: IconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.9 2-1.9h2V2.1C16.7 2 15.5 2 14.2 2 11.6 2 10 3.6 10 6.5V10H7v4h3v8z" />
  </svg>
)

const INIcon = (p: IconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM9 9h3v1.8c.6-1 1.9-2.1 4-2.1 4.3 0 5 2.8 5 6.4V21h-3v-5.2c0-1.5-.4-2.9-2.2-2.9-2 0-2.3 1.6-2.3 3V21H9z" />
  </svg>
)

const YTIcon = (p: IconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23 12s0-3.4-.4-5a2.7 2.7 0 0 0-1.9-1.9C18.9 4.7 12 4.7 12 4.7s-6.9 0-8.7.4A2.7 2.7 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.7 2.7 0 0 0 1.9 1.9c1.8.4 8.7.4 8.7.4s6.9 0 8.7-.4a2.7 2.7 0 0 0 1.9-1.9c.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5z" />
  </svg>
)

const TagIcon = (p: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
  </svg>
)

const TrendUpIcon = (p: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const GridIcon = (p: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

const LinkIcon = (p: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

const WalletIcon = (p: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="2" y="5" width="20" height="14" rx="3" />
    <path d="M16 12h2" />
    <path d="M2 10h20" />
  </svg>
)

const CalendarCheckIcon = (p: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M9 16l2 2 4-4" />
  </svg>
)

const HeadphonesIcon = (p: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
)

const MotoIcon = (p: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx="5.5" cy="17.5" r="2.5" />
    <circle cx="18.5" cy="17.5" r="2.5" />
    <path d="M8 17.5h7" />
    <path d="M15 6h2l2 4H9l1.5-4H15z" />
    <path d="M9 10l-3 7.5" />
    <circle cx="15" cy="4" r="1" fill="currentColor" />
  </svg>
)

export {
  LogoIcon,
  ArrowIcon,
  PlayIcon,
  CheckIcon,
  ChevronIcon,
  BoltIcon,
  PulseIcon,
  RouteIcon,
  HeadsetIcon,
  PlugIcon,
  CoinIcon,
  IGIcon,
  FBIcon,
  INIcon,
  YTIcon,
  TagIcon,
  TrendUpIcon,
  GridIcon,
  LinkIcon,
  WalletIcon,
  CalendarCheckIcon,
  HeadphonesIcon,
  MotoIcon,
}
