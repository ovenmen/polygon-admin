import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                {children}
            </body>
        </html>
    )
}
  
