'use client'

import type { JSX } from 'react'
import { useEffect, useRef, useState } from 'react'

import { ArrowIcon } from '@/modules/common/icons'
import type { IconProps } from '@/modules/common/types'

type Tab = 'lojistas' | 'entregadores'

/* ── Local icons ──────────────────────────────────────────────────────────── */

const TagIcon = (p: IconProps) => (
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

const TrendUpIcon = (p: IconProps) => (
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

const GridIcon = (p: IconProps) => (
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

const LinkIcon = (p: IconProps) => (
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

const WalletIcon = (p: IconProps) => (
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

const CalendarCheckIcon = (p: IconProps) => (
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

const HeadphonesIcon = (p: IconProps) => (
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

const MotoIcon = (p: IconProps) => (
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

/* ── Viz components ───────────────────────────────────────────────────────── */

const VizZero = () => (
  <div className="absolute inset-x-0 bottom-0 flex h-full items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <span
        className="font-display text-amber3/18 leading-none font-bold select-none"
        style={{ fontSize: 'clamp(2.6rem, 6vw, 4rem)' }}
      >
        R$&nbsp;0
      </span>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-amber2/25 h-1 w-7 rounded-full" />
        ))}
      </div>
    </div>
  </div>
)

const VizTrendBars = () => (
  <div className="absolute inset-x-3 bottom-2 flex h-[78%] items-end justify-center gap-1">
    {[28, 42, 35, 58, 48, 72, 65, 90].map((h, i) => (
      <div
        key={i}
        className="grow-bar bg-amber2/40 flex-1 rounded-t-sm"
        style={{
          height: `${h}%`,
          animationDelay: `${i * 0.12}s`,
          animationDuration: '1.7s',
        }}
      />
    ))}
  </div>
)

const VizProgress = () => (
  <div className="absolute inset-x-4 bottom-3 flex h-[72%] flex-col justify-end gap-2">
    {[
      { label: 'Entregas', pct: 82 },
      { label: 'Custo/km', pct: 54 },
      { label: 'Rating', pct: 96 },
    ].map((d, i) => (
      <div key={i} className="flex items-center gap-2">
        <span className="text-muted/50 w-11 shrink-0 font-mono text-[8px] uppercase">
          {d.label}
        </span>
        <div className="bg-amber1/15 h-1.5 flex-1 overflow-hidden rounded-full">
          <div className="amber-bg h-full rounded-full" style={{ width: `${d.pct}%` }} />
        </div>
        <span className="text-muted/50 tnum w-6 text-right font-mono text-[8px]">{d.pct}%</span>
      </div>
    ))}
  </div>
)

const VizNetwork = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 160 80"
    preserveAspectRatio="xMidYMid meet"
  >
    {(
      [
        [26, 18],
        [134, 18],
        [22, 62],
        [138, 62],
      ] as [number, number][]
    ).map(([x, y], i) => (
      <g key={i}>
        <line
          x1="80"
          y1="40"
          x2={x}
          y2={y}
          stroke="#ffbd2e"
          strokeWidth="0.9"
          strokeDasharray="3 3"
          className="route-flow"
          style={{ animationDelay: `${i * 0.28}s` }}
        />
        <circle cx={x} cy={y} r="5.5" fill="#ff914d" opacity="0.2" />
        <circle cx={x} cy={y} r="3" fill="#ff914d" opacity="0.65" />
      </g>
    ))}
    <circle
      cx="80"
      cy="40"
      r="16"
      fill="none"
      stroke="#ffbd59"
      strokeWidth="1.2"
      opacity="0.3"
      className="radar-ring"
    />
    <circle cx="80" cy="40" r="9" fill="#ff914d" opacity="0.12" />
    <circle cx="80" cy="40" r="5" fill="#ff914d" opacity="0.85" />
  </svg>
)

const VizEarnings = () => (
  <div className="absolute inset-x-0 bottom-0 flex h-full items-center justify-center">
    <div className="flex flex-col items-center gap-2.5">
      <span
        className="font-display text-amber3/20 tnum leading-none font-bold select-none"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}
      >
        +24%
      </span>
      <div className="flex items-end gap-1">
        {[16, 28, 22, 40, 32, 52].map((h, i) => (
          <div
            key={i}
            className="wave-bar bg-amber2/35 w-3 rounded-sm"
            style={{ height: `${h}px`, animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>
    </div>
  </div>
)

const VizWeek = () => (
  <div className="absolute inset-x-3 bottom-2 flex h-[82%] flex-col items-center justify-end gap-2">
    <div className="grid w-full grid-cols-7 gap-1">
      {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className="text-muted/40 font-mono text-[7px]">{d}</span>
          <div
            className={`flex h-5 w-full items-center justify-center rounded-md ${
              i < 5 ? 'amber-bg' : 'bg-line/70'
            }`}
          >
            {i < 5 && <div className="bg-ink/45 h-1.5 w-1.5 rounded-full" />}
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
      <span className="text-muted/65 font-mono text-[9px] tracking-wider uppercase">
        Pago · Sex
      </span>
    </div>
  </div>
)

const VizPulse = () => (
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

const VizSmartRoute = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 160 80"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M16 64 C28 64 30 26 52 26 C74 26 74 52 94 52 C114 52 118 16 144 16"
      fill="none"
      stroke="#ffbd59"
      strokeWidth="2"
      strokeDasharray="4 4"
      className="route-flow"
    />
    <circle cx="16" cy="64" r="5" fill="#292828" opacity="0.18" />
    <circle cx="16" cy="64" r="3" fill="#ff914d" />
    {(
      [
        [52, 26],
        [94, 52],
      ] as [number, number][]
    ).map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="3.5" fill="#ff914d" opacity="0.55" />
    ))}
    <circle cx="144" cy="16" r="8" fill="#ffbd59" opacity="0.22" className="node-pulse" />
    <circle cx="144" cy="16" r="5" fill="#ffbd59" opacity="0.75" />
    <circle cx="144" cy="16" r="2.2" fill="#292828" opacity="0.55" />
  </svg>
)

/* ── Benefit data ─────────────────────────────────────────────────────────── */

interface Benefit {
  num: string
  Icon: (p: IconProps) => JSX.Element
  Viz: () => JSX.Element
  title: string
  body: string
  stat: string
}

const lojistas: Benefit[] = [
  {
    num: '01',
    Icon: TagIcon,
    Viz: VizZero,
    title: 'Zero mensalidade fixa',
    body: 'Pague apenas pelas entregas realizadas. Sem taxas escondidas, sem surpresas no bolso do mês.',
    stat: 'sem mensalidade',
  },
  {
    num: '02',
    Icon: TrendUpIcon,
    Viz: VizTrendBars,
    title: 'Mais pedidos entregues',
    body: 'Motoboys sempre disponíveis reduzem cancelamentos e aumentam a conversão da sua loja.',
    stat: '+32% conversão',
  },
  {
    num: '03',
    Icon: GridIcon,
    Viz: VizProgress,
    title: 'Relatórios em tempo real',
    body: 'Dashboard completo com visão de entregas, custos e desempenho. Dados que viram decisões.',
    stat: 'dados ao vivo',
  },
  {
    num: '04',
    Icon: LinkIcon,
    Viz: VizNetwork,
    title: 'Integração imediata',
    body: 'Conecte seu PDV ou cardápio digital em minutos. Sem desenvolvimento, sem atrito, sem espera.',
    stat: '< 10 min setup',
  },
]

const entregadores: Benefit[] = [
  {
    num: '01',
    Icon: WalletIcon,
    Viz: VizEarnings,
    title: 'Ganhos transparentes',
    body: 'Veja exatamente quanto vai receber por corrida antes de aceitar. Sem desconto surpresa no final.',
    stat: 'sem desconto oculto',
  },
  {
    num: '02',
    Icon: CalendarCheckIcon,
    Viz: VizWeek,
    title: 'Pagamento semanal',
    body: 'Receba toda semana, direto na sua conta. Sem esperar 30 dias ou mais para ter o seu dinheiro.',
    stat: 'pago toda semana',
  },
  {
    num: '03',
    Icon: HeadphonesIcon,
    Viz: VizPulse,
    title: 'Suporte exclusivo',
    body: 'Time dedicado a entregadores, disponível 7 dias por semana. Você nunca fica sozinho na rua.',
    stat: '7 dias / semana',
  },
  {
    num: '04',
    Icon: MotoIcon,
    Viz: VizSmartRoute,
    title: 'Rotas inteligentes',
    body: 'Menos km rodado por corrida, mais entregas no dia. O app calcula o melhor caminho em segundos.',
    stat: '−18% km rodado',
  },
]

/* ── BenefitCard ──────────────────────────────────────────────────────────── */

interface BenefitCardProps {
  benefit: Benefit
  idx: number
}

const BenefitCard = ({ benefit: b, idx }: BenefitCardProps): JSX.Element => (
  <article
    className="reveal fcard border-line flex flex-col rounded-3xl border bg-white p-5 md:p-6"
    style={{ transitionDelay: `${idx * 90}ms` }}
  >
    <div className="fviz relative h-35 rounded-2xl md:h-37.5">
      <div className="fviz-grid" />
      <b.Viz />
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <span className="amber-bg text-ink shadow-amber-soft grid h-7 w-7 place-items-center rounded-lg">
          <b.Icon className="h-3.5 w-3.5" />
        </span>
        <span className="text-amber1/90 font-mono text-[10px] tracking-[0.18em] uppercase">
          /{b.num}
        </span>
      </div>
      <div className="border-amber3/40 absolute top-3 right-3 flex items-center gap-1.5 rounded-md border bg-white/90 px-2 py-1 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        <span className="text-muted-dark font-mono text-[9px] tracking-wider uppercase">
          {b.stat}
        </span>
      </div>
    </div>

    <div className="flex flex-1 flex-col pt-5 md:pt-6">
      <h3 className="font-display text-ink text-[20px] leading-snug font-bold tracking-tight md:text-[22px]">
        {b.title}
      </h3>
      <p className="text-muted-dark mt-2.5 flex-1 text-[14.5px] leading-relaxed">{b.body}</p>
      <div className="border-line mt-5 flex items-center justify-between border-t pt-4">
        <span className="text-muted font-mono text-[10px] tracking-[0.18em] uppercase">
          vantagem /{b.num}
        </span>
        <ArrowIcon className="text-muted fcard-arrow h-4 w-4" />
      </div>
    </div>
  </article>
)

/* ── Benefits section ─────────────────────────────────────────────────────── */

const Benefits = (): JSX.Element => {
  const [tab, setTab] = useState<Tab>('lojistas')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const rect = root.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0
    if (!isVisible) return
    const raf = requestAnimationFrame(() => {
      root.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => {
        el.classList.add('in')
      })
    })
    return () => cancelAnimationFrame(raf)
  }, [tab])

  const items = tab === 'lojistas' ? lojistas : entregadores

  return (
    <section id="beneficios" ref={sectionRef} className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-10 max-w-3xl md:mb-12">
          <div className="text-muted font-mono text-[11px] tracking-[0.22em] uppercase">
            Benefícios
          </div>
          <h2
            className="font-display text-ink mt-3 leading-[1.02] font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Vantagens <span className="amber-text">reais</span> para quem faz a entrega acontecer.
          </h2>
          <p className="text-muted mt-5 max-w-150 text-[17px] leading-relaxed">
            Seja você dono de loja ou entregador parceiro — a BoxBoy foi construída pensando no
            sucesso de cada um.
          </p>
        </div>

        <div className="reveal mb-10 md:mb-12" style={{ transitionDelay: '80ms' }}>
          <div className="border-line bg-paper-alt inline-flex gap-1 rounded-full border p-1">
            {(['lojistas', 'entregadores'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] uppercase transition-all duration-300 ${
                  tab === t ? 'amber-bg text-ink shadow-amber-soft' : 'text-muted hover:text-ink'
                }`}
              >
                {t === 'lojistas' ? 'Lojistas' : 'Entregadores'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {items.map((b, i) => (
            <BenefitCard key={`${tab}-${b.num}`} benefit={b} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Benefits }
