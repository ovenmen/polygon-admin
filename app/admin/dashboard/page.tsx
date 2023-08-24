import { Metadata } from 'next'
import { Card } from '../../../components/card'
import { UsersTable } from '../../../components/users-table'

export const metadata: Metadata = {
    title: 'Dashboard page',
}

export default function DashboardPage() {
    return (
        <>
            <Card>
                <UsersTable />
            </Card>
        </>
    )
}
