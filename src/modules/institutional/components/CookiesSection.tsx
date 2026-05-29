import type { JSX } from 'react'

import type { IconProps } from '@/modules/common/types'

/* ── Local icons ──────────────────────────────────────────────────────────── */

const ShieldCheckIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const BarChartIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)

const SlidersIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
)

const MegaphoneIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
)

const SettingsIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

/* ── Data ─────────────────────────────────────────────────────────────────── */

interface CookieType {
  Icon: (p: IconProps) => JSX.Element
  name: string
  badge: string
  required: boolean
  description: string
  items: string[]
  badgeStyle: string
  iconBg: string
  borderStyle: string
  bgStyle: string
}

const COOKIE_TYPES: CookieType[] = [
  {
    Icon: ShieldCheckIcon,
    name: 'Essenciais',
    badge: 'Obrigatório',
    required: true,
    description:
      'Necessários para o funcionamento básico da plataforma. Não podem ser desativados.',
    items: ['Pop-up de boas-vindas', 'Preferências da página', 'Termos de uso aceitos'],
    badgeStyle: 'bg-amber-100 text-amber-700',
    iconBg: 'amber-bg text-ink',
    borderStyle: 'border-amber3/40',
    bgStyle: 'bg-amber3/5',
  },
  {
    Icon: BarChartIcon,
    name: 'Analíticos',
    badge: 'Opcional',
    required: false,
    description: 'Nos ajudam a entender como você usa a plataforma para melhorá-la continuamente.',
    items: ['Google Analytics', 'Heatmaps', 'Taxa de conversão'],
    badgeStyle: 'bg-amber-100 text-amber-700',
    iconBg: 'amber-bg text-ink',
    borderStyle: 'border-amber3/40',
    bgStyle: 'bg-amber3/5',
  },
  {
    Icon: SlidersIcon,
    name: 'Funcionais',
    badge: 'Opcional',
    required: false,
    description: 'Permitem funcionalidades aprimoradas e personalização da experiência do usuário.',
    items: ['Idioma preferido', 'Localização salva', 'Configurações de notificação'],
    badgeStyle: 'bg-amber-100 text-amber-700',
    iconBg: 'amber-bg text-ink',
    borderStyle: 'border-amber3/40',
    bgStyle: 'bg-amber3/5',
  },
  {
    Icon: MegaphoneIcon,
    name: 'Marketing',
    badge: 'Opcional',
    required: false,
    description: 'Utilizados para exibir anúncios relevantes. Você pode recusar esses cookies.',
    items: ['Facebook Pixel', 'Google Ads', 'Retargeting'],
    badgeStyle: 'bg-amber-100 text-amber-700',
    iconBg: 'amber-bg text-ink',
    borderStyle: 'border-amber3/40',
    bgStyle: 'bg-amber3/5',
  },
]

/* ── Sub-components ───────────────────────────────────────────────────────── */

const SectionLabel = ({ num, title }: { num: string; title: string }) => (
  <div className="reveal mb-6 flex items-start gap-4">
    <span className="amber-bg text-ink shadow-amber-soft mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl font-mono text-[11px] font-bold tracking-wider">
      {num}
    </span>
    <h2
      className="font-display text-ink leading-snug font-bold tracking-tight"
      style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}
    >
      {title}
    </h2>
  </div>
)

/* ── Section ──────────────────────────────────────────────────────────────── */

const CookiesSection = (): JSX.Element => (
  <div className="space-y-16 md:space-y-20">
    {/* Cookie types grid */}
    <div>
      <SectionLabel num="01" title="Tipos de cookies que utilizamos" />
      <div className="reveal grid gap-5 sm:grid-cols-2" style={{ transitionDelay: '60ms' }}>
        {COOKIE_TYPES.map((c, i) => (
          <article
            key={i}
            className={`fcard flex flex-col rounded-2xl border p-6 ${c.borderStyle} ${c.bgStyle}`}
            style={{ transitionDelay: `${60 + i * 70}ms` }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.iconBg}`}>
                <c.Icon className="h-4.5 w-4.5" />
              </span>
              <span
                className={`rounded-full px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] uppercase ${c.badgeStyle}`}
              >
                {c.badge}
              </span>
            </div>
            <div className="font-display text-ink mb-2 text-[17px] leading-snug font-bold">
              {c.name}
            </div>
            <p className="text-muted mb-4 text-[13.5px] leading-relaxed">{c.description}</p>
            <ul className="mt-auto space-y-1.5">
              {c.items.map((item, j) => (
                <li key={j} className="text-muted-dark flex items-center gap-2 text-[13px]">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-current opacity-50" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>

    {/* Management */}
    <div>
      <SectionLabel num="02" title="Como gerenciar cookies" />
      <div
        className="reveal border-line overflow-hidden rounded-3xl border"
        style={{ transitionDelay: '60ms' }}
      >
        <div className="fviz relative h-20 md:h-24">
          <div className="fviz-grid" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display text-amber3/18 leading-none font-bold select-none"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
            >
              Controle total
            </span>
          </div>
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="amber-bg text-ink shadow-amber-soft grid h-7 w-7 place-items-center rounded-lg">
              <SettingsIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-amber1/90 font-mono text-[10px] tracking-[0.18em] uppercase">
              Gerenciar
            </span>
          </div>
        </div>
        <div className="bg-white px-6 py-5 md:px-8 md:py-6">
          <p className="text-muted-dark text-[14.5px] leading-relaxed">
            Você pode controlar e/ou excluir cookies conforme desejar. É possível excluir todos os
            cookies já armazenados no seu computador e configurar a maioria dos navegadores para
            impedir que sejam adicionados novos. Lembre-se que, ao fazer isso, talvez precise
            ajustar manualmente algumas preferências a cada visita.
          </p>
        </div>
      </div>
    </div>

    {/* Third-party notice */}
    <div>
      <SectionLabel num="03" title="Cookies de terceiros" />
      <div
        className="reveal border-amber3/30 bg-amber3/5 flex items-start gap-5 rounded-2xl border p-6"
        style={{ transitionDelay: '60ms' }}
      >
        <div className="amber-bg text-ink shadow-amber-soft grid h-10 w-10 shrink-0 place-items-center rounded-xl">
          <MegaphoneIcon className="h-4.5 w-4.5" />
        </div>
        <div>
          <div className="font-display text-ink mb-2 text-[16px] font-bold">Facebook Pixel</div>
          <p className="text-muted-dark text-[14px] leading-relaxed">
            Utilizamos o <span className="text-ink font-semibold">Facebook Pixel</span> para
            mensurar a eficácia das nossas campanhas de marketing. Esse cookie é gerenciado pelo
            Facebook e está sujeito à política de privacidade da Meta Platforms, Inc. Você pode
            optar por não participar em{' '}
            <span className="text-muted bg-paper-alt rounded px-1.5 py-0.5 font-mono text-[12px]">
              facebook.com/settings
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export { CookiesSection }
