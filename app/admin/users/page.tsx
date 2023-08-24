import { Metadata } from 'next'
import Table from '../../../components/table'

const tableHeads = ['Avatar', 'Username', 'email', 'role', 'permissions']
const tableRows = [
    {
        avatar: 'https://lh3.googleusercontent.com/a/AAcHTtckZ5Q_aWpiw9LBRfdyGjDJcbVvU_v8VyEHzcsBG6ktZpj-=s96-c',
        username: 'det-anton',
        email: 'get-anton@yandex.ru',
        role: 'admin'
    },
    {
        avatar: 'https://lh3.googleusercontent.com/a/AAcHTtckZ5Q_aWpiw9LBRfdyGjDJcbVvU_v8VyEHzcsBG6ktZpj-=s96-c',
        username: 'det-anton',
        email: 'get-anton@yandex.ru',
        permissions: 'read, write'
    },
    {
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
        <>
            
        </>
    )
}
