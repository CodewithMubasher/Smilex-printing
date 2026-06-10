import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: 'Smilex Printing Shop | High-Quality Printing & Design Services',
  description: 'Smilex Printing Shop offers premium digital printing, graphic design, wedding cards, photo framing and creative design solutions in Rawalpindi.',
}
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className= {`flex min-h-screen flex-col bg-background text-foreground antialiased ${inter.className}`}>
        
        <main className="flex-1">
          {children}
        </main>
        
      </body>
    </html>
  )
}
