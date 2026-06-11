import './globals.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import type { ReactNode } from 'react'
import { Inter } from "next/font/google";
import { localBusinessSchema, organizationSchema, faqSchema, websiteSchema } from '@/lib/schema'

const inter = Inter({ subsets: ["latin"] });

const siteUrl = 'https://www.smilexprinting.com'
const siteName = 'Smilex Digital Printing & Designing'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | High-Quality Printing & Design Services in Islamabad`,
    template: `%s | ${siteName}`,
  },
  description:
    'Smilex Digital Printing & Designing offers premium digital printing, graphic design, wedding cards, photo framing, and creative design solutions in Islamabad, Rawalpindi, and Bahria Town. Visit our shop near PWD Islamabad.',
  keywords: [
    'printing shop near me',
    'photostudio near me',
    'digital printing Islamabad',
    'graphic design services Rawalpindi',
    'wedding cards Islamabad',
    'photo framing PWD',
    'Smilex printing',
    'offset printing Islamabad',
    'printing services Bahria Town',
    'Smilex Digital Printing & Designing',
  ],
  authors: [{ name: 'Smilex Digital Printing & Designing' }],
  creator: 'Smilex Digital Printing & Designing',
  publisher: 'Smilex Digital Printing & Designing',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteName,
    description:
      'Premium digital printing, graphic design, wedding cards, photo framing and creative design solutions in Islamabad & Rawalpindi.',
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Smilex Digital Printing & Designing Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description:
      'Premium digital printing, graphic design, wedding cards, photo framing and creative design solutions in Islamabad & Rawalpindi.',
    images: ['/logo.png'],
  },
  category: 'printing',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-PK" className="scroll-smooth">
      <body className={`flex min-h-screen flex-col bg-background text-foreground antialiased ${inter.className}`}>
        <main className="flex-1">
          {children}
        </main>

        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  )
}
