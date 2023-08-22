import { FC } from 'react'
import { ComponentProps } from '../../@types'

export const TableHead: FC<ComponentProps> = ({
    children,
    className
}) => (
    <thead className={`${className} font-bold`}>
        {children}
    </thead>
)
