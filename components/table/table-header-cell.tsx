import { FC } from 'react'
import { ComponentProps } from '../../@types'

export const TableHeaderCell: FC<ComponentProps> = ({
    children,
    className
}) => (
    <td className={className}>
        {children}
    </td>
)
