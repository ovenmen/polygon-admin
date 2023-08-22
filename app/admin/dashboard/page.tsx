import { Metadata } from 'next'
import { Card } from '../../../components/card'
import DashboardTable from '../../../components/dashboard-table'

export const metadata: Metadata = {
    title: 'Dashboard page',
}

export default function DashboardPage() {
    return (
        <>
            <Card>
                <DashboardTable />
            </Card>
        </>
    )
}
