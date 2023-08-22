'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'

export default function TopMenu() {
    const { data: session } = useSession()

    const handleClickSigIn = useCallback(() => {
        signIn()
    }, [])

    const handleClickSigOut = useCallback(() => {
        signOut()
    }, [])

    return (
        <nav className="shadow-md px-8 py-1">
            <ul className="flex justify-end items-center h-16">
                <li>
                    {session ? (
                        <div className="flex items-center divide-slate-400">
                            <div className="flex flex-col mr-5">
                                <p className="self-end text-sm">{session.user.email}</p>
                                <p className="self-end text-sm">{session.user.name}</p>
                            </div>
                            <Image
                                src={session.user.image}
                                alt="user logo"
                                width={50}
                                height={50}
                                className="rounded-full self-center mr-5"
                            />
                            <Link
                                href="#"
                                onClick={handleClickSigOut}
                                className="self-center font-semibold transition-colors ease-in-out duration-300 hover:bg-slate-200 rounded-lg p-3"
                            >
                                Sig out
                            </Link>
                        </div>
                    ) : (
                        <Link
                            href="#"
                            onClick={handleClickSigIn}
                            className="self-center font-semibold transition-colors ease-in-out duration-300 hover:bg-slate-200 rounded-lg p-3"
                        >
                            Sig in
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}
