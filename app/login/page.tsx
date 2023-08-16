'use client'

import React from 'react'
import { Metadata } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@tremor/react'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Login page',
}

export default function LoginPage() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                <h3 className="text-3xl">Login page</h3>
                Signed in as {session.user.email} <br />
                <Image src={session.user.image} alt={session.user.name} width={100} height={100} />
                <Button onClick={() => signOut()}>Sign out</Button>
            </>
        )
    }

    return (
        <>
            <h3 className="text-3xl">Not signed in</h3>
            <Button onClick={() => signIn()}>Sign in</Button>
        </>
    )
}
