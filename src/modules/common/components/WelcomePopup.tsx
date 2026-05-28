'use client'

import type { JSX } from 'react'
import { useEffect, useRef, useState } from 'react'

import { ArrowIcon, BoltIcon, LogoIcon, PulseIcon, RouteIcon } from '@/modules/common/icons'

const STORAGE_KEY = 'bb_welcome_ts'
const INTERVAL_MS = 5 * 60 * 1000

const highlights = [
  { icon: BoltIcon, label: 'Despacho automático', sub: 'Aloca em menos de 3 segundos' },
  { icon: PulseIcon, label: 'Monitoramento ao vivo', sub: 'Visibilidade total da entrega' },
  { icon: RouteIcon, label: 'Rotas inteligentes', sub: 'Até 18% menos KM rodado' },
]

const WelcomePopup = (): JSX.Element | null => {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const shouldShow = (): boolean => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return true
      return Date.now() - Number(raw) >= INTERVAL_MS
    } catch {
      return true
    }
  }

  const markShown = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {}
  }

  const close = () => {
    markShown()
    setVisible(false)
  }

  useEffect(() => {
    const initialId = setTimeout(() => {
      if (shouldShow()) {
        markShown()
        setVisible(true)
      }
    }, 0)

    timerRef.current = setInterval(() => {
      markShown()
      setVisible(true)
    }, INTERVAL_MS)

    return () => {
      clearTimeout(initialId)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Boas-vindas à BoxBoy"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="bg-ink-deep/40 absolute inset-0 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Card */}
      <article className="fcard border-line relative w-full max-w-lg rounded-3xl border bg-white shadow-(--shadow-card)">
        {/* Viz header */}
        <div className="fviz relative h-36 overflow-hidden rounded-t-3xl">
          <div className="fviz-grid" />

          {/* Logo badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2.5">
            <span className="amber-bg shadow-amber-soft grid h-9 w-9 place-items-center rounded-xl">
              <LogoIcon className="h-5 w-5" />
            </span>
            <span className="text-amber1/90 font-mono text-[10px] tracking-[0.2em] uppercase">
              BoxBoy · Plataforma
            </span>
          </div>

          {/* Live badge */}
          <div className="border-amber3/40 absolute top-4 right-4 flex items-center gap-1.5 rounded-md border bg-white/90 px-2 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-muted-dark font-mono text-[9px] tracking-wider uppercase">
              plataforma ativa
            </span>
          </div>

          {/* Bottom ambient glow */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-white to-transparent" />
        </div>

        {/* Body */}
        <div className="flex flex-col px-6 pt-5 pb-6">
          <div className="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">
            Bem-vindo
          </div>

          <h2
            className="font-display text-ink mt-2 leading-[1.05] font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)' }}
          >
            Tudo o que sua operação precisa —{' '}
            <span className="amber-text">em uma única parceria.</span>
          </h2>

          <p className="text-muted-dark mt-3 text-[14px] leading-relaxed">
            A BoxBoy conecta lojistas e entregadores para entregas instantâneas em todo o Rio de
            Janeiro. Conheça os recursos que transformam sua logística.
          </p>

          {/* Highlights */}
          <ul className="border-line divide-line mt-5 divide-y overflow-hidden rounded-2xl border">
            {highlights.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="bg-paper-alt/60 flex items-center gap-3 px-4 py-3">
                <span className="amber-bg shadow-amber-soft grid h-7 w-7 shrink-0 place-items-center rounded-lg">
                  <Icon className="text-ink h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-ink text-[13px] leading-none font-semibold">{label}</p>
                  <p className="text-muted mt-0.5 text-[11.5px]">{sub}</p>
                </div>
                <ArrowIcon className="text-muted h-3.5 w-3.5 shrink-0" />
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={close}
              className="amber-bg shadow-amber-soft text-ink flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Explorar plataforma
              <ArrowIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={close}
              className="border-line text-muted hover:text-ink rounded-xl border px-4 py-3 text-[13px] transition-colors"
            >
              Fechar
            </button>
          </div>

          {/* Timer hint */}
          <p className="text-muted mt-3 text-center font-mono text-[10px] tracking-wider">
            Este aviso reaparece a cada 5 minutos
          </p>
        </div>

        {/* Close X */}
        <button
          type="button"
          onClick={close}
          aria-label="Fechar boas-vindas"
          className="border-line text-muted hover:text-ink absolute top-4 right-4 grid h-7 w-7 place-items-center rounded-full border bg-white/90 backdrop-blur-sm transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-3.5 w-3.5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </article>
    </div>
  )
}

export { WelcomePopup }
