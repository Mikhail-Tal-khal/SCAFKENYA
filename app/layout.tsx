import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SCAFKENYA | Sickle Cell Awareness Foundation Kenya',
  description: "Kenya's first nonprofit health NGO dedicated to improving the lives of Persons Living With Sickle Cell Disease through provision of Health, Awareness and Hope.",
  keywords: ['sickle cell disease', 'Kenya', 'NGO', 'health', 'awareness', 'nonprofit', 'PLWSCD'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
