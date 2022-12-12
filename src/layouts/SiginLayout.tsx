import React, { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode
}

const SiginLayout: FC<IProps> = ({ children }) => (
    <div className="grid place-content-center h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500">
        {children}
    </div>
);

export default SiginLayout;
