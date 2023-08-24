import { FC } from 'react'
import { ComponentProps } from '../../@types'

export const Card: FC<ComponentProps> = ({
    children
}) => (
    <div className="bg-white p-5 rounded-xl">
        {children}
    </div>
)
