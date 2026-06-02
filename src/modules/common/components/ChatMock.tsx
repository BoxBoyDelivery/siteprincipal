import type { JSX, ReactNode } from 'react'

import { BoltIcon, CheckIcon, CoinIcon, WhatsappIcon } from '@/modules/common/icons'

export type ChatVariant = 'pix' | 'comanda'

interface ChatMockProps {
  variant: ChatVariant
}

/** Tiny right-aligned timestamp shown at the bottom of a bubble. */
const ChatTime = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <span className="text-muted/70 tnum mt-0.5 block text-right font-mono text-[9px]">
      {children}
    </span>
  )
}

/** Incoming (white, left) or outgoing (green, right) WhatsApp message bubble. */
const ChatBubble = ({
  side = 'in',
  children,
}: {
  side?: 'in' | 'out'
  children: ReactNode
}): JSX.Element => {
  const out = side === 'out'
  return (
    <div
      className={`text-ink max-w-[88%] px-3 py-2 text-[12px] leading-snug shadow-sm ${
        out
          ? 'ml-auto rounded-2xl rounded-tr-sm bg-[#DCF8C6]'
          : 'mr-auto rounded-2xl rounded-tl-sm bg-white'
      }`}
    >
      {children}
    </div>
  )
}

const ChatMock = ({ variant }: ChatMockProps): JSX.Element => {
  const isPix = variant === 'pix'
  return (
    <div className="border-line shadow-card-lite flex flex-col overflow-hidden rounded-2xl border bg-white">
      {/* header */}
      <div className="bg-ink flex h-12 items-center gap-2.5 px-3 text-white">
        <div className="amber-bg text-ink grid h-8 w-8 shrink-0 place-items-center rounded-full">
          {isPix ? <CoinIcon className="h-4 w-4" /> : <BoltIcon className="h-4 w-4" />}
        </div>
        <div className="min-w-0">
          <div className="truncate text-[12px] leading-tight font-semibold">
            BoxBoy · {isPix ? 'Pagamentos' : 'Comandas'}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" /> online
          </div>
        </div>
        <WhatsappIcon className="ml-auto h-4 w-4 text-[#25D366]" />
      </div>

      {/* body */}
      <div
        className="relative flex-1 space-y-2 p-3"
        style={{
          background: '#F3EEE6',
          backgroundImage: 'radial-gradient(rgba(0,0,0,.035) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      >
        {isPix ? (
          <>
            <ChatBubble side="out">
              Quero solicitar o pagamento do dia.
              <ChatTime>09:24</ChatTime>
            </ChatBubble>
            <ChatBubble side="in">
              Boa, João! Você fez <strong>14 entregas</strong> hoje.
              <ChatTime>09:24</ChatTime>
            </ChatBubble>
            <div className="mr-auto max-w-[92%] rounded-2xl rounded-tl-sm bg-white p-2 shadow-sm">
              <div className="border-amber3/40 rounded-xl border bg-amber-50 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-amber4 font-mono text-[10px] tracking-wider uppercase">
                    PIX · copia e cola
                  </span>
                  <CoinIcon className="text-amber1 h-3.5 w-3.5" />
                </div>
                <div className="font-display text-ink tnum mt-1 text-xl font-bold">R$ 196,00</div>
                <div className="text-muted border-line mt-1.5 truncate rounded-md border bg-white px-2 py-1 font-mono text-[9px]">
                  00020126360014BR.GOV.BCB.PIX0114+5521…5204
                </div>
                <button className="amber-bg text-ink mt-2 h-7 w-full rounded-md text-[11px] font-semibold">
                  Copiar código PIX
                </button>
              </div>
              <ChatTime>09:24</ChatTime>
            </div>
            <ChatBubble side="out">
              Recebido na conta, valeu!{' '}
              <CheckIcon className="inline h-3 w-3 align-[-1px] text-[#25D366]" />
              <ChatTime>09:25</ChatTime>
            </ChatBubble>
          </>
        ) : (
          <>
            <div className="mr-auto max-w-[92%] rounded-2xl rounded-tl-sm bg-white p-2 shadow-sm">
              <div className="border-line rounded-xl border p-2.5">
                <div className="text-muted flex items-center justify-between font-mono text-[10px] tracking-wider uppercase">
                  <span>Novo pedido</span>
                  <span className="text-ink tnum">#48213</span>
                </div>
                <div className="text-ink mt-1 text-[12px] font-medium">Leblon → Gávea</div>
                <div className="text-muted mt-0.5 text-[11px]">2 itens · R$ 78,90</div>
              </div>
              <ChatTime>20:11</ChatTime>
            </div>
            <ChatBubble side="out">
              Comanda lançada no sistema. Motoboy a caminho.
              <ChatTime>20:11</ChatTime>
            </ChatBubble>
            <div className="flex justify-center">
              <div className="border-line text-muted inline-flex items-center gap-1.5 rounded-full border bg-white/85 px-2.5 py-1 font-mono text-[10px]">
                <CheckIcon className="h-3 w-3 text-[#25D366]" /> lançado no painel · 0,8s
              </div>
            </div>
            <ChatBubble side="in">
              Status atualizado para <strong>“A caminho”</strong> no painel.
              <ChatTime>20:11</ChatTime>
            </ChatBubble>
          </>
        )}
      </div>
    </div>
  )
}

export { ChatMock }
