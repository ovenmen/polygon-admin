import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IArticle {
    _id: string
    header: string
    shortDescription: string
    mdContent: string
    createdDate: string,
    modifiedData: string,
    user: [
        {
            login: string
            name: string
            role: string
            about: string
        }
    ]
}

const ArticleCard: FC<IArticle> = ({ _id, header, shortDescription }) =>  (
    <Link to={`/admin/articles/${_id}`} className="contents">
        <div className="rounded-md p-5 shadow-lg">
            <h1 className="text-3xl mb-3">{header}</h1>
            <p className="text-slate-500">{shortDescription}</p>
        </div>
    </Link>
);

export default ArticleCard;
