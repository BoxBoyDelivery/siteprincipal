export type LegalTab = 'privacidade' | 'cookies' | 'termos' | 'juridico'

export interface LegalTabConfig {
  id: LegalTab
  label: string
  desc: string
}
