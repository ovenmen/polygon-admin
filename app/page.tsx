import React from 'react'
import { Metadata } from 'next'
import { DashboardCard } from '../components/card'

export const metadata: Metadata = {
    title: 'Main page',
}

export default function Page() {
    return (
        <DashboardCard />
    )
}
