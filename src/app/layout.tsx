import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Hong Kong vs Shenzhen | Comparative Urban Systems Thesis',
  description: 'An interactive thesis exploring governance models, innovation ecosystems, and urban development in Hong Kong and Shenzhen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  )
}
