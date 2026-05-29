import type { JSX } from 'react'

import type { IconProps } from '@/modules/common/types'

/* ── Local icons ──────────────────────────────────────────────────────────── */

const MailIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
)

const ShieldIcon = (p: IconProps) => (
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
  </svg>
)

const MapPinIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const BuildingIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 22V12h6v10M3 9h18M9 3v6M15 3v6" />
  </svg>
)

const AlertIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const UserCheckIcon = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
)

/* ── Data ─────────────────────────────────────────────────────────────────── */

interface ContactCard {
  Icon: (p: IconProps) => JSX.Element
  label: string
  sublabel: string
  value: string
  href?: string
  badge: string
  badgeStyle: string
  iconStyle: string
  borderStyle: string
  bgStyle: string
}

const CONTACTS: ContactCard[] = [
  {
    Icon: MailIcon,
    label: 'E-mail Jurídico',
    sublabel: 'Questões legais e contratuais',
    value: 'juridico@boxdelivery.com',
    href: 'mailto:juridico@boxdelivery.com',
    badge: 'Resp. em até 72h',
    badgeStyle: 'bg-amber-100 text-amber-700',
    iconStyle: 'amber-bg text-ink',
    borderStyle: 'border-amber3/40',
    bgStyle: 'bg-amber3/5',
  },
  {
    Icon: ShieldIcon,
    label: 'E-mail LGPD / DPO',
    sublabel: 'Proteção de dados pessoais',
    value: 'privacidade@boxdelivery.com',
    href: 'mailto:privacidade@boxdelivery.com',
    badge: 'Encarregado LGPD',
    badgeStyle: 'bg-amber-100 text-amber-700',
    iconStyle: 'amber-bg text-ink',
    borderStyle: 'border-amber3/40',
    bgStyle: 'bg-amber3/5',
  },
  {
    Icon: MapPinIcon,
    label: 'Endereço',
    sublabel: 'Sede Principal',
    value: 'Rua Maj. Toja Martinez Filho, 150 Apt 5 — Rio de Janeiro/RJ — CEP 22450-270',
    badge: 'Notificações · AR',
    badgeStyle: 'bg-amber-100 text-amber-700',
    iconStyle: 'amber-bg text-ink',
    borderStyle: 'border-amber3/40',
    bgStyle: 'bg-amber3/5',
  },
  {
    Icon: BuildingIcon,
    label: 'CNPJ',
    sublabel: 'BoxBoy Delivery LTDA',
    value: '58.765.722/0001-17',
    badge: 'Pessoa Jurídica',
    badgeStyle: 'bg-amber-100 text-amber-700',
    iconStyle: 'amber-bg text-ink',
    borderStyle: 'border-amber3/40',
    bgStyle: 'bg-amber3/5',
  },
]

/* ── Section ──────────────────────────────────────────────────────────────── */

const LegalContactSection = (): JSX.Element => (
  <div className="space-y-12 md:space-y-16">
    {/* Contact cards */}
    <div>
      <div className="reveal mb-8 flex items-start gap-4">
        <span className="amber-bg text-ink shadow-amber-soft mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl font-mono text-[11px] font-bold tracking-wider">
          01
        </span>
        <div>
          <h2
            className="font-display text-ink leading-snug font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}
          >
            Departamento Jurídico
          </h2>
          <p className="text-muted mt-1 text-[14px]">
            Canais exclusivos para questões legais, LGPD e comunicações formais.
          </p>
        </div>
      </div>

      <div className="reveal grid gap-5 sm:grid-cols-2" style={{ transitionDelay: '60ms' }}>
        {CONTACTS.map((c, i) => (
          <article
            key={i}
            className={`fcard flex flex-col rounded-2xl border p-6 ${c.borderStyle} ${c.bgStyle}`}
            style={{ transitionDelay: `${60 + i * 70}ms` }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.iconStyle}`}>
                <c.Icon className="h-4.5 w-4.5" />
              </span>
              <span
                className={`rounded-full px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] whitespace-nowrap uppercase ${c.badgeStyle}`}
              >
                {c.badge}
              </span>
            </div>

            <div className="text-muted/60 mb-1 font-mono text-[10px] tracking-[0.18em] uppercase">
              {c.sublabel}
            </div>
            <div className="font-display text-ink mb-2 text-[16px] leading-snug font-bold">
              {c.label}
            </div>

            {c.href ? (
              <a
                href={c.href}
                className="amber-text text-[13.5px] font-semibold break-all transition-opacity hover:opacity-80"
              >
                {c.value}
              </a>
            ) : (
              <p className="text-muted-dark text-[13.5px] leading-relaxed">{c.value}</p>
            )}
          </article>
        ))}
      </div>
    </div>

    {/* Extrajudicial notices */}
    <div>
      <div className="reveal mb-6 flex items-start gap-4">
        <span className="amber-bg text-ink shadow-amber-soft mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl font-mono text-[11px] font-bold tracking-wider">
          02
        </span>
        <h2
          className="font-display text-ink leading-snug font-bold tracking-tight"
          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}
        >
          Notificações Extrajudiciais
        </h2>
      </div>

      <div
        className="reveal border-line overflow-hidden rounded-3xl border"
        style={{ transitionDelay: '60ms' }}
      >
        <div className="fviz relative h-20 md:h-24">
          <div className="fviz-grid" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display text-amber3/18 leading-none font-bold select-none"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}
            >
              15 dias úteis
            </span>
          </div>
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="amber-bg text-ink shadow-amber-soft grid h-7 w-7 place-items-center rounded-lg">
              <AlertIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-amber1/90 font-mono text-[10px] tracking-[0.18em] uppercase">
              Prazo padrão
            </span>
          </div>
          <div className="border-amber3/40 absolute top-3 right-3 flex items-center gap-1.5 rounded-md border bg-white/90 px-2 py-1 backdrop-blur-sm">
            <span className="bg-amber3 h-1.5 w-1.5 animate-pulse rounded-full" />
            <span className="text-muted-dark font-mono text-[9px] tracking-wider uppercase">
              via AR · fisicamente
            </span>
          </div>
        </div>
        <div className="bg-white px-6 py-5 md:px-8 md:py-6">
          <p className="text-muted-dark text-[14.5px] leading-relaxed">
            Notificações extrajudiciais devem ser encaminhadas ao endereço físico acima, com{' '}
            <span className="text-ink font-semibold">aviso de recebimento (AR)</span>, aos cuidados
            do Departamento Jurídico. O prazo de resposta padrão é de{' '}
            <span className="text-ink font-semibold">15 dias úteis</span>, conforme previsto na
            legislação.
          </p>
        </div>
      </div>
    </div>

    {/* DPO section */}
    <div>
      <div className="reveal mb-6 flex items-start gap-4">
        <span className="amber-bg text-ink shadow-amber-soft mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl font-mono text-[11px] font-bold tracking-wider">
          03
        </span>
        <h2
          className="font-display text-ink leading-snug font-bold tracking-tight"
          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}
        >
          Encarregado de Proteção de Dados (DPO)
        </h2>
      </div>

      <div
        className="reveal border-amber3/30 bg-amber3/5 flex items-start gap-5 rounded-2xl border p-6"
        style={{ transitionDelay: '60ms' }}
      >
        <div className="amber-bg text-ink shadow-amber-soft grid h-10 w-10 shrink-0 place-items-center rounded-xl">
          <UserCheckIcon className="h-4.5 w-4.5" />
        </div>
        <div>
          <div className="text-amber1/80 mb-1.5 font-mono text-[10px] tracking-[0.18em] uppercase">
            Art. 41 · LGPD
          </div>
          <p className="text-muted-dark text-[14.5px] leading-relaxed">
            Nos termos do <span className="text-ink font-semibold">Art. 41 da LGPD</span>, a Box
            Delivery S.A. designou um Encarregado de Proteção de Dados. Para exercer seus direitos
            ou obter informações sobre o tratamento dos seus dados, entre em contato diretamente
            pelo canal de LGPD:{' '}
            <a
              href="mailto:privacidade@boxdelivery.com"
              className="amber-text font-semibold transition-opacity hover:opacity-80"
            >
              privacidade@boxdelivery.com
            </a>
          </p>
        </div>
      </div>

      {/* Important notice */}
      <div
        className="reveal border-line bg-paper-alt mt-5 flex items-start gap-3 rounded-2xl border px-5 py-4"
        style={{ transitionDelay: '100ms' }}
      >
        <AlertIcon className="text-muted mt-0.5 h-4 w-4 shrink-0" />
        <p className="text-muted text-[13px] leading-relaxed">
          <span className="text-muted-dark font-semibold">Importante:</span> Os canais jurídicos são
          destinados exclusivamente para questões legais, contratuais e de proteção de dados. Para
          suporte técnico ou comercial, utilize nossos canais regulares de atendimento ao cliente.
        </p>
      </div>
    </div>
  </div>
)

export { LegalContactSection }
