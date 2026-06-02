import type { ComponentType, SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>
export type IconComponent = ComponentType<IconProps>

export interface PartnerSlot {
  id: string
  label: string
  sub: string
  iconClassName?: string
  chipClassName?: string
}

export interface Feature {
  Viz: ComponentType
  icon: IconComponent
  num: string
  title: string
  body: string
  stat: string
}

export type LeadField = 'name' | 'email' | 'phone'
export type Touched = Partial<Record<LeadField, boolean>>
export type Errors = Record<LeadField, string>
