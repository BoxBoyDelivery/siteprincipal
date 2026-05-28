import type { JSX } from 'react'

import type { PartnerSlot } from '@/modules/common/types'

interface PartnerChipProps {
  slot: PartnerSlot
}

const PartnerChip = ({ slot }: PartnerChipProps): JSX.Element => {
  return (
    <div
      data-partner-slot={slot.id}
      className="border-line flex h-[72px] w-[200px] shrink-0 items-center justify-center rounded-2xl border bg-white px-6 select-none"
      title={`<${slot.id}/>`}
    >
      <div className="flex flex-col items-center gap-1">
        <div className="font-display text-ink text-[15px] leading-none font-bold tracking-tight">
          {slot.label}
        </div>
        <div className="text-muted font-mono text-[9px] tracking-[0.18em] uppercase">
          {`<${slot.id} />`}
        </div>
      </div>
    </div>
  )
}

export { PartnerChip }
