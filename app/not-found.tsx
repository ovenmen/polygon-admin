import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '404 - Страница не найдена',
}

export default function Custom404() {
    return (
        <div className="grid place-content-center h-[100vh]">
            <h1 className="text-4xl">
                404 - Страница не найдена
            </h1>
            <Link href="/admin" className="pt-6 text-center text-cyan-500 hover:text-cyan-400">
                Вернуться в админку
            </Link>
        </div>
    )
}
