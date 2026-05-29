'use client'

import type { JSX } from 'react'

import { useEffect, useRef, useState } from 'react'

import {
  ArrowIcon,
  CalendarCheckIcon,
  GridIcon,
  HeadphonesIcon,
  LinkIcon,
  MotoIcon,
  TagIcon,
  TrendUpIcon,
  WalletIcon,
} from '@/modules/common/icons'
import {
  VizEarnings,
  VizNetwork,
  VizProgress,
  VizPulse,
  VizSmartRoute,
  VizTrendBars,
  VizWeek,
  VizZero,
} from '../benefits-viz'

import type { IconProps } from '@/modules/common/types'

type Tab = 'lojistas' | 'entregadores'

interface Benefit {
  num: string
  Icon: (p: IconProps) => JSX.Element
  Viz: () => JSX.Element
  title: string
  body: string
  stat: string
}

interface BenefitCardProps {
  benefit: Benefit
  idx: number
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
