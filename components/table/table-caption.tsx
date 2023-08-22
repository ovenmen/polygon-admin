import { FC } from 'react'
import { ComponentProps } from '../../@types'

export const TableCaption: FC<ComponentProps> = ({
    children
}) => (
    <caption className="caption-top mb-5 font-bold">
        {children}
    </caption>
)
