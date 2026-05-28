import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { inter, jetbrainsMono, spaceGrotesk } from '@/utils/fonts'

export const metadata: Metadata = {
  title: {
    default: 'BoxBoy Delivery — Performance logística para o crescimento do seu negócio.',
    template: '%s | BoxBoy',
  },
  description:
    'Entregas inteligentes, despacho automático e monitoramento em tempo real para sua operação no Rio de Janeiro.',
  icons: { icon: '/assets/boxboy.ico' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn('antialiased', inter.variable, spaceGrotesk.variable, jetbrainsMono.variable)}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}
