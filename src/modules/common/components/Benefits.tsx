import type { JSX } from 'react'

const Benefits = (): JSX.Element => {
  return (
    <section id="planos" className="bg-paper-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-12 max-w-3xl md:mb-14">
          <div className="text-muted font-mono text-[11px] tracking-[0.22em] uppercase">
            Beneficíos
          </div>
          <h2
            className="font-display text-ink mt-3 leading-[1.02] font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Vantagens <span className="amber-text">comerciais</span>, para você nosso Parceiro.
          </h2>
          <p className="text-muted mt-5 max-w-150 text-[17px] leading-relaxed">
            Com a BoxBoy, você tem acesso a uma série de benefícios comerciais que vão além da
            simples entrega.
          </p>
        </div>
      </div>
    </section>
  )
}

export { Benefits }
