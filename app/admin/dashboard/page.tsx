import { Metadata } from 'next'
import { Card } from '../../../components/card'
import { UsersTable } from '../../../components/users-table'
import { dataFetcher } from '../../../lib/data-fetcher'

export const metadata: Metadata = {
    title: 'Dashboard page',
}

export default async function DashboardPage() {
    const users = await dataFetcher.getUsers()

    return (
        <>
            <Card>
                <UsersTable users={users} />
            </Card>
        </>
    )
}
