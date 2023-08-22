import { FC } from 'react'
import { ComponentProps } from '../../@types'

export const TableBody: FC<ComponentProps> = ({
    children
}) => (
    <tbody>
        {children}
    </tbody>
)
