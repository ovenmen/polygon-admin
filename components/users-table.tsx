'use client'

import Image from 'next/image'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeaderCell, TableRow } from './table'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback } from 'react'

const salesPeople = [
    {
        id: '0',
        email: 'detanton@gmail.com',
        username: 'detanton',
        avatar: 'https://lh3.googleusercontent.com/a/AAcHTtckZ5Q_aWpiw9LBRfdyGjDJcbVvU_v8VyEHzcsBG6ktZpj-=s96-c',
        role: 'admin',
        permissions: 'read, create, edit, delete',
        createdDate: new Date().toLocaleDateString(),
        modifiedDate: '',
    },
    {
        id: '1',
        email: 'det-anton@yandex.ru',
        username: 'det-anton',
        avatar: 'https://avatars.yandex.net/get-yapic/24700/enc-b70343f2253fe88af8c0dbae87469cdb75e174156018245c4cfe7b34b4e2e489/islands-200',
        role: 'admin',
        permissions: 'read, create, edit, delete',
        createdDate: new Date().toLocaleDateString(),
        modifiedDate: '',
    },
    {
        id: '2',
        email: 'madam-pmv@yandex.ru',
        username: 'madam-pmv',
        avatar: '',
        role: 'user',
        permissions: 'read',
        createdDate: new Date().toLocaleDateString(),
        modifiedDate: ''
    }
]

export const UsersTable = () => {
    const handleClickEdit = useCallback((id) => {
        console.log('edit', id)
    }, [])

    const handleClickRemove = useCallback((id) => {
        console.log('remove', id)
    }, [])

    return (
        <Table className="w-full">
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Avatar</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Username</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Email</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Role</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Permissions</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">CreatedDate</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">ModifiedDate</TableHeaderCell>
                    <TableHeaderCell className="text-right p-3">Actions</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {salesPeople.map((item) => (
                    <TableRow key={item.username}>
                        <TableCell>
                            {item.avatar && (
                                <Image
                                    src={item.avatar}
                                    alt={item.username}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            )}
                        </TableCell>
                        <TableCell className="text-right p-3">{item.username}</TableCell>
                        <TableCell className="text-right p-3">{item.email}</TableCell>
                        <TableCell className="text-right p-3">{item.role}</TableCell>
                        <TableCell className="text-right p-3">{item.permissions}</TableCell>
                        <TableCell className="text-right p-3">{item.createdDate}</TableCell>
                        <TableCell className="text-right p-3">{item.modifiedDate}</TableCell>
                        <TableCell className="text-right p-3 flex justify-between">
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="fa-fw h-4 cursor-pointer text-yellow-600"
                                onClick={() => handleClickEdit(item.id)}
                            />
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                className="fa-fw h-4 cursor-pointer text-red-600"
                                onClick={() => handleClickRemove(item.id)}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )}
