import { Metadata } from 'next'
import Image from 'next/image'
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../../../components/table'
import { Card } from '../../../components/card'

const users = [
    {
        id: '0',
        avatar: 'https://lh3.googleusercontent.com/a/AAcHTtckZ5Q_aWpiw9LBRfdyGjDJcbVvU_v8VyEHzcsBG6ktZpj-=s96-c',
        username: 'det-anton',
        email: 'get-anton@yandex.ru',
        role: 'admin'
    },
    {
        id: '1',
        avatar: 'https://lh3.googleusercontent.com/a/AAcHTtckZ5Q_aWpiw9LBRfdyGjDJcbVvU_v8VyEHzcsBG6ktZpj-=s96-c',
        username: 'det-anton',
        email: 'get-anton@yandex.ru',
        permissions: 'read, write'
    },
    {
        id: '2',
        avatar: 'https://lh3.googleusercontent.com/a/AAcHTtckZ5Q_aWpiw9LBRfdyGjDJcbVvU_v8VyEHzcsBG6ktZpj-=s96-c',
        username: 'det-anton',
        email: 'get-anton@yandex.ru'
    }
]

export const metadata: Metadata = {
    title: 'Users page',
}

export default function UsersPage() {
    return (
        <Card>
            <Table className="w-full">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell className="text-right p-3">Avatar</TableHeaderCell>
                        <TableHeaderCell className="text-right p-3">Username</TableHeaderCell>
                        <TableHeaderCell className="text-right p-3">Email</TableHeaderCell>
                        <TableHeaderCell className="text-right p-3">Role</TableHeaderCell>
                        <TableHeaderCell className="text-right p-3">Permissions</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.username}</TableCell>
                            <TableCell className="text-right p-3"><Image src={item.avatar} alt="Avatar" width={50} height={50} className="rounded-full" /></TableCell>
                            <TableCell className="text-right p-3">{item.username}</TableCell>
                            <TableCell className="text-right p-3">{item.email}</TableCell>
                            <TableCell className="text-right p-3">{item.role}</TableCell>
                            <TableCell className="text-right p-3">{item.permissions}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}
