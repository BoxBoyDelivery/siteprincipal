import type { Metadata } from 'next'

import Script from 'next/script'

import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { inter, jetbrainsMono, spaceGrotesk } from '@/utils/fonts'

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://boxboydelivery.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'BoxBoy — Entregas ultrarrápidas com as melhores taxas',
    template: '%s | BoxBoy',
  },
  icons: {
    icon: '/assets/boxboy.ico',
  },
  description:
    'A BoxBoy conecta lojistas e entregadores para entregas instant delivery, same-day e next-day em todo a cidade do Rio de Janeiro. Mais de 1 milhão de entregas ao mês.',
  keywords: ['delivery', 'entrega', 'lojista', 'entregador', 'box boy', 'entregas rápidas'],
  authors: [{ name: 'BoxBoy' }],
  creator: 'BoxBoy',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'BoxBoy',
    title: 'BoxBoy — Entregas ultrarrápidas com as melhores taxas',
    description:
      'Conectamos lojistas e entregadores com entregas rápidas em toda a cidade do Rio de Janeiro.',
    images: [
      {
        url: `${BASE_URL}/assets/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'BoxBoy — Entregas ultrarrápidas com as melhores taxas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoxBoy — Entregas ultrarrápidas',
    description:
      'Conectamos lojistas e entregadores com entregas rápidas na cidade do Rio de Janeiro.',
    images: [`${BASE_URL}/assets/og-image.png`],
  },
  robots: { index: true, follow: true },
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
      <body className="font-sans">
        {children}
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  )
}
