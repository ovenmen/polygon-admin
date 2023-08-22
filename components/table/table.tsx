import { FC } from 'react'
import { ComponentProps } from '../../@types'

export const Table: FC<ComponentProps> = ({
    children,
    className
}) => {
    return (
        <table className={className}>
            {children}
        </table>
    )
}
