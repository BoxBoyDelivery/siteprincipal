import type { JSX } from 'react'

import { cn } from '@/utils/cn'
import {
  ChinaInBoxIcon,
  ClubeVerdeIcon,
  DominosPizzaIcon,
  KoniIcon,
  LaMoleIcon,
  LosGuacamolesIcon,
  SpoletoIcon,
} from '@/modules/common/icons'
import type { IconComponent, PartnerSlot } from '@/modules/common/types'

const partnerLogos: Record<string, IconComponent> = {
  ChinaInBoxIcon,
  ClubeVerdeIcon,
  DominosPizzaIcon,
  KoniIcon,
  LaMoleIcon,
  LosGuacamolesIcon,
  SpoletoIcon,
}

interface PartnerChipProps {
  slot: PartnerSlot
}

const PartnerChip = ({ slot }: PartnerChipProps): JSX.Element => {
  const Logo = partnerLogos[slot.id]

  return (
    <div
      data-partner-slot={slot.id}
      title={slot.label}
      className={cn(
        'border-line group flex h-18 w-50 shrink-0 items-center justify-center rounded-2xl border bg-white px-7 select-none',
        slot.chipClassName,
      )}
    >
      {Logo ? (
        <Logo
          role="img"
          aria-label={slot.label}
          className={cn(
            'text-ink h-auto max-h-10 w-auto max-w-32 opacity-65 grayscale transition duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0',
            slot.iconClassName
          )}
        />
      ) : (
        <span className="font-display text-ink text-[15px] leading-none font-bold tracking-tight">
          {slot.label}
        </span>
      )}
    </div>
  )
}

export { PartnerChip }
