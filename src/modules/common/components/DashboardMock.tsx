import type { JSX } from 'react/jsx-dev-runtime'

import { PulseIcon } from '@/modules/common/icons'

interface DashboardMockProps {
  floating?: boolean
}

type Kpi = { k: string; v: string; d: string }
type Slice = readonly [label: string, value: string, color: string]
type OrderRow = readonly [id: string, route: string, eta: string, status: string]

const KPIS: Kpi[] = [
  { k: 'Em rota', v: '128', d: '+12%' },
  { k: 'Concluídas', v: '1.482', d: '+4%' },
  { k: 'SLA médio', v: '27′', d: '-3′' },
]

const SLICES: Slice[] = [
  ['No prazo', '62%', '#FFBD59'],
  ['Em rota', '22%', '#FF914D'],
  ['Atraso', '16%', '#292828'],
]

const ORDERS: OrderRow[] = [
  ['#48201', 'Botafogo → Humaitá', '8 min', 'A caminho'],
  ['#48198', 'Leblon → Gávea', '14 min', 'Coletado'],
  ['#48190', 'Centro → Tijuca', '22 min', 'A caminho'],
]

const DashboardMock = ({ floating = false }: DashboardMockProps): JSX.Element => {
  return (
    <div className={`relative w-full max-w-[560px] ${floating ? 'lg:max-w-[600px]' : ''}`}>
      {/* glow */}
      <div
        className="absolute -inset-10 -z-10 opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,145,77,.28), transparent 70%)',
        }}
      />
      <div className="shadow-card overflow-hidden rounded-3xl border border-white/5 bg-white">
        {/* topbar */}
        <div className="border-line flex h-10 items-center gap-2 border-b bg-[#FAFAFA] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="text-muted ml-3 font-mono text-[11px]">painel.boxboydelivery.com</span>
        </div>

        <div className="grid grid-cols-12 gap-4 p-5">
          {/* KPIs */}
          <div className="col-span-12 grid grid-cols-3 gap-3">
            {KPIS.map((x) => (
              <div key={x.k} className="border-line min-w-0 rounded-2xl border p-3 sm:p-3.5">
                <div className="text-muted truncate font-mono text-[10px] tracking-wider uppercase">
                  {x.k}
                </div>
                <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                  <div className="font-display text-ink tnum text-lg font-bold sm:text-xl">
                    {x.v}
                  </div>
                  <div className="tnum text-[10px] font-medium text-emerald-600">{x.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Donut */}
          <div className="border-line col-span-12 min-w-0 rounded-2xl border p-4 sm:col-span-7">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-muted font-mono text-[11px] tracking-wider uppercase">
                Distribuição
              </div>
              <div className="text-muted font-mono text-[10px]">hoje</div>
            </div>
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative h-[96px] w-[96px] shrink-0 sm:h-[112px] sm:w-[112px]">
                <div className="donut absolute inset-0 rounded-full" />
                <div className="absolute inset-[12px] grid place-items-center rounded-full bg-white sm:inset-[14px]">
                  <div className="text-center">
                    <div className="font-display text-ink tnum text-lg leading-none font-bold">
                      84%
                    </div>
                    <div className="text-muted mt-0.5 font-mono text-[9px] tracking-wider uppercase">
                      no prazo
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1 space-y-2 text-[12px]">
                {SLICES.map(([k, v, c]) => (
                  <div
                    key={k}
                    className="grid grid-cols-[10px_1fr_auto] items-center gap-2.5 whitespace-nowrap"
                  >
                    <span className="h-2.5 w-2.5 rounded-sm" style={{ background: c }} />
                    <span className="text-ink truncate">{k}</span>
                    <span className="text-muted tnum font-mono">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* mini map */}
          <div className="border-line relative col-span-12 min-h-[140px] overflow-hidden rounded-2xl border p-3 sm:col-span-5">
            <div
              className="absolute inset-0 opacity-[.55]"
              style={{
                backgroundImage:
                  'linear-gradient(transparent 95%, #E5E7EB 95%), linear-gradient(90deg, transparent 95%, #E5E7EB 95%)',
                backgroundSize: '18px 18px',
              }}
            />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 200 160"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M30 120 Q 70 60, 110 90 T 175 40"
                stroke="#FF914D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="3 4"
              />
              <circle cx="30" cy="120" r="5" fill="#FF914D" />
              <circle cx="30" cy="120" r="2" fill="#fff" />
              <circle cx="110" cy="90" r="4" fill="#FFBD2E" />
              <circle cx="110" cy="90" r="1.5" fill="#fff" />
              <circle cx="175" cy="40" r="5" fill="#292828" />
              <circle cx="175" cy="40" r="2" fill="#fff" />
            </svg>
            <div className="relative flex items-start justify-between gap-2">
              <div className="text-muted font-mono text-[10px] tracking-wider uppercase">
                RJ · Zona Sul
              </div>
              <div className="text-muted font-mono text-[10px] tracking-wider uppercase">live</div>
            </div>
            <div className="relative mt-auto pt-12 sm:pt-10">
              <div className="border-line inline-flex items-center gap-1.5 rounded-lg border bg-white/90 px-2 py-1 backdrop-blur-sm">
                <span className="bg-amber1 h-1.5 w-1.5 rounded-full" />
                <span className="text-ink text-[11px] font-medium">Rotas ativas</span>
                <span className="text-amber4 tnum font-mono text-[11px]">12</span>
              </div>
            </div>
          </div>

          {/* orders list */}
          <div className="border-line col-span-12 rounded-2xl border">
            <div className="border-line flex items-center justify-between border-b px-4 py-2.5">
              <div className="text-muted font-mono text-[11px] tracking-wider uppercase">
                Pedidos em rota
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> ao vivo
              </div>
            </div>
            <ul className="divide-line divide-y text-[12px]">
              {ORDERS.map(([id, route, eta, st]) => (
                <li key={id} className="flex min-w-0 items-center gap-2 px-4 py-2.5 sm:gap-3">
                  <span className="text-muted tnum shrink-0 font-mono">{id}</span>
                  <span className="text-ink min-w-0 flex-1 truncate">{route}</span>
                  <span className="text-muted tnum hidden shrink-0 font-mono sm:inline">{eta}</span>
                  <span className="text-amber4 border-amber3/30 shrink-0 rounded-md border bg-amber-50 px-2 py-1 text-[10px] font-medium whitespace-nowrap">
                    {st}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* floating callout card */}
      {floating && (
        <div className="bg-ink shadow-card absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-white md:flex">
          <div className="amber-bg text-ink grid h-9 w-9 place-items-center rounded-xl">
            <PulseIcon className="h-5 w-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-wider text-white/60 uppercase">
              SLA 30 dias
            </div>
            <div className="font-display text-lg leading-none font-bold">96,4%</div>
          </div>
        </div>
      )}
    </div>
  )
}

export { DashboardMock }
