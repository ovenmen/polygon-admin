import React, { FC, ReactNode } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

interface IProps {
    children: ReactNode
}

const EditorLayout: FC<IProps> = ({ children }) => (
    <div className="grid grid-cols-[200px_1fr_300px] gap-2 h-[100vh] grid-rows-[50px_1fr_50px]">
        <header className="bg-slate-300 col-span-2 flex items-center justify-end">
            <Header />
        </header>
        <aside className="bg-sky-700 row-start-1 row-span-3">
            <Navigation />
        </aside>
        <section>
            {children}
        </section>
        <aside className="bg-slate-200 row-span-2">aside</aside>
        <footer className="bg-slate-200 col-span-1">footer</footer>
    </div>
);

export default EditorLayout;
