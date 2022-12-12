import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => (
    <div className="flex px-5">
        <Link className="bg-green-500 text-white px-3 py-2 rounded-md" to="/admin/articles/create">
            Добавить статью
        </Link>
    </div>
);

export default Header;
