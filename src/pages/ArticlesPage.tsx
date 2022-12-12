import React, { FC, useEffect } from 'react';

import { useGetArticlesQuery } from '../__data__/services/articles';
import MainLayout from '../layouts/MainLayout';
import ArticleCard from '../components/ArticleCard';

interface IArticle {
    _id: string
    header: string
    shortDescription: string
    mdContent: string
    createdDate: string
    modifiedData: string
    user: [
        {
            login: string
            name: string
            role: string
            about: string
        }
    ]
}

interface IHookData {
    isLoading: boolean,
    data: {
        count: number
        articles: IArticle[]
    }
    error?: {
        data: {
            error: string
        }
    }
}

const ArticlesPage: FC = () => {
    const { data, error, isLoading, refetch } = useGetArticlesQuery<IHookData>({});

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <MainLayout>
            <h1 className="text-3xl text-center mb-5">Articles</h1>
            {isLoading && (
                <p className="w-1/2 mx-auto text-center p-4">Загрузка постов...</p>
            )}
            {error && (
                <p className="bg-rose-500 text-white w-1/2 mx-auto p-4 rounded-md text-center">
                    {error?.data?.error || 'Ошибка загрузки данных'}
                </p>
            )}
            {data && (
                <div className="grid grid-cols-[repeat(auto-fit,200px)] gap-2">
                    {data.articles.map((article: IArticle) => (
                        <ArticleCard key={article._id} {...article} />
                    ))}
                </div>
            )}
        </MainLayout>
    );
};

export default ArticlesPage;
