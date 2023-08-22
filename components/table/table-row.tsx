import { FC } from 'react'
import { ComponentProps } from '../../@types'

export const TableRow: FC<ComponentProps> = ({
    children,
    className
}) => (
    <tr className={`${className} border-b last:border-b-0`}>
        {children}
    </tr>
)
