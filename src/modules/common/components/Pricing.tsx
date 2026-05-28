import type { JSX, ReactNode } from 'react'

import { ArrowIcon } from '@/modules/common/icons'

interface RowProps {
  label: string
  caption: string
  value: ReactNode
}

interface ColProps {
  pill: string
  title: string
  children: ReactNode
}

const PriceRow = ({ label, caption, value }: RowProps): JSX.Element => {
  return (
    <div className="grid grid-cols-[1fr_auto] items-baseline gap-4 px-5 py-4">
      <div>
        <div className="text-muted font-mono text-[10px] tracking-[0.18em] uppercase">{label}</div>
        <div className="text-ink mt-0.5 font-medium">{caption}</div>
      </div>
      <div className="font-display text-ink text-3xl font-bold">{value}</div>
    </div>
  )
}

const PriceColumn = ({ pill, title, children }: ColProps): JSX.Element => {
  return (
    <>
      <div className="text-muted flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase">
        <span className="bg-amber3 h-1.5 w-1.5 rounded-full" /> {pill}
      </div>
      <h3 className="font-display text-ink mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h3>
      <div className="divide-line border-line mt-7 divide-y overflow-hidden rounded-2xl border">
        {children}
      </div>
    </>
  )
}

const Pricing = (): JSX.Element => {
  return (
    <section id="planos" className="bg-paper-alt py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="reveal mb-12 max-w-3xl md:mb-14">
          <div className="text-muted font-mono text-[11px] tracking-[0.22em] uppercase">
            Comercial
          </div>
          <h2
            className="font-display text-ink mt-3 leading-[1.02] font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Tabela <span className="amber-text">comercial</span>, sem letrinha miúda.
          </h2>
          <p className="text-muted mt-5 max-w-[600px] text-[17px] leading-relaxed">
            Preço por moto na sua loja + taxa por KM. Simples de calcular, fácil de escalar.
          </p>
        </div>

        <div className="reveal border-line shadow-card-lite overflow-hidden rounded-3xl border bg-white">
          <div className="grid md:grid-cols-2">
            <div className="border-line border-b p-7 md:border-r md:border-b-0 md:p-10">
              <PriceColumn pill="Fixo garantido · 6 horas" title="Pedidos por moto na loja">
                <PriceRow
                  label="Seg – Qui"
                  caption="Dias úteis"
                  value={
                    <>
                      12<span className="text-muted ml-1 text-base font-medium">pedidos</span>
                    </>
                  }
                />
                <PriceRow
                  label="Sex – Dom"
                  caption="Final de semana"
                  value={
                    <>
                      14<span className="text-muted ml-1 text-base font-medium">pedidos</span>
                    </>
                  }
                />
              </PriceColumn>
            </div>

            <div className="p-7 md:p-10">
              <PriceColumn pill="Taxa de entrega por KM" title="Valor da corrida">
                <PriceRow label="0 a 3 km" caption="Faixa inicial" value="R$ 13,50" />
                <PriceRow
                  label="acima de 3 km"
                  caption="Adicional por km"
                  value={
                    <>
                      + R$ 2,50<span className="text-muted ml-1 text-base font-medium">/km</span>
                    </>
                  }
                />
              </PriceColumn>
            </div>
          </div>

          <div className="border-line bg-paper-alt text-muted-dark grid gap-5 border-t p-6 text-[13px] leading-relaxed md:grid-cols-3 md:gap-8 md:p-8">
            <div>
              <div className="text-muted mb-1.5 font-mono text-[10px] tracking-[0.18em] uppercase">
                Chuva / alta demanda
              </div>
              + R$ 2,00 por pedido durante períodos sinalizados pela operação.
            </div>
            <div>
              <div className="text-muted mb-1.5 font-mono text-[10px] tracking-[0.18em] uppercase">
                Alerta da Defesa Civil
              </div>
              + R$ 4,00 por pedido enquanto durar o alerta oficial.
            </div>
            <div>
              <div className="text-muted mb-1.5 font-mono text-[10px] tracking-[0.18em] uppercase">
                Refeição por turno
              </div>
              Refeição do motoboy a cada turno por conta do cliente. Acima de 5.000 pedidos/mês
              recomendamos líder operacional in loco.
            </div>
          </div>

          <div className="border-line flex flex-col justify-between gap-4 border-t p-6 sm:flex-row sm:items-center md:p-7">
            <p className="text-muted-dark text-[14px]">
              Quer simular sua tabela com volume real? A gente monta com você.
            </p>
            <a
              href="#formulario"
              className="amber-bg text-ink hover:shadow-amber-soft inline-flex h-11 items-center gap-2 self-start rounded-xl px-5 font-semibold transition-shadow sm:self-auto"
            >
              Falar com comercial <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Pricing }
