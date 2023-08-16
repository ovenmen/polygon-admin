'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import './globals.css'

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}
