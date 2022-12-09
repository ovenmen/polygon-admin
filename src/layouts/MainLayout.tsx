import React, { FC, ReactNode } from 'react';
import Navigation from '../components/Navigation';

interface IProps {
    children: ReactNode
}

const MainLayout: FC<IProps> = ({ children }) => (
    <div className="grid grid-rows-3">
        <aside>
            <Navigation />
        </aside>
        <section className="w-full p-5 container m-auto col-span-2">
            {children}
        </section>
    </div>
);

export default MainLayout;
