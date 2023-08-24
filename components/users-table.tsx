'use client'

import Image from 'next/image'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeaderCell, TableRow } from './table'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback } from 'react'

export const UsersTable = ({
    users
}) => {
    const handleClickEdit = useCallback((id: string) => {
        console.log('edit', id)
    }, [])

    const handleClickRemove = useCallback((id: string) => {
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
                {users.map((user) => {
                    const { _id: id, username, email, avatar, role, permissions, createdDate, modifiedDate } = user

                    return (
                        <TableRow key={id}>
                            <TableCell>
                                {avatar && (
                                    <Image
                                        src={avatar}
                                        alt={username}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                )}
                            </TableCell>
                            <TableCell className="text-right p-3">{username}</TableCell>
                            <TableCell className="text-right p-3">{email}</TableCell>
                            <TableCell className="text-right p-3">{role}</TableCell>
                            <TableCell className="text-right p-3">{permissions}</TableCell>
                            <TableCell className="text-right p-3">{new Date(createdDate).toLocaleDateString()}</TableCell>
                            <TableCell className="text-right p-3">{new Date(modifiedDate).toLocaleDateString()}</TableCell>
                            <TableCell className="text-right p-3 flex justify-between">
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="fa-fw h-4 cursor-pointer text-yellow-600"
                                    onClick={() => handleClickEdit(id)}
                                />
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    className="fa-fw h-4 cursor-pointer text-red-600"
                                    onClick={() => handleClickRemove(id)}
                                />
                            </TableCell>
                        </TableRow>
                    )})}
            </TableBody>
        </Table>
    )}
