'use client'

import { SessionProvider } from 'next-auth/react'

import TopMenu from '../../components/top-menu'
import AsideMenu from '../../components/aside-menu'

export default function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="grid grid-cols-[250px_minmax(0px,_1fr)] h-[100vh]">
                    <section className="bg-cyan-600">
                        <AsideMenu />
                    </section>
                    <section className="bg-slate-100">
                        <header>
                            <SessionProvider>
                                <TopMenu />
                            </SessionProvider>
                        </header>
                        <div className="p-8">
                            <SessionProvider>
                                {children}
                            </SessionProvider>
                        </div>
                    </section>
                </div>
            </body>
        </html>
    )
}
