import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Item Details - Trial Task',
  description: 'Read-only Item Facts Panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

