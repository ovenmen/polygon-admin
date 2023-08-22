import { FC } from 'react'
import { ComponentProps } from '../../@types'

export const TableCell: FC<ComponentProps> = ({
    children,
    className
}) => (
    <td className={className}>
        {children}
    </td>
)
