import { Metadata } from 'next'
import { Card } from '../../../components/card'
import { UsersTable } from '../../../components/users-table'
import clientPromise from '../../../lib/connection-db'

export const metadata: Metadata = {
    title: 'Dashboard page',
}

const getUsers = async () => {
    try {
        const client = await clientPromise
        const db = client.db(process.env.MONGODB_DBNAME)
        const users = db.collection('users').find().toArray()

        return (await users).map(user => ({
            ...user,
            _id: user._id.toString()
        }))
    } catch (error) {
        console.error(error)
    }
}

export default async function DashboardPage() {
    const users = await getUsers()

    return (
        <>
            <Card>
                <UsersTable users={users} />
            </Card>
        </>
    )
}
