import { Metadata } from 'next'
import DashboardPage from './dashboard/page'

export const metadata: Metadata = {
    title: 'Dashboard page',
}

export default function Index() {
    return <DashboardPage />
}
