import React, { FC } from 'react';

import Editor from '../components/Editor';
import MainLayout from '../layouts/MainLayout';

const CreateArticlePage: FC = () => {
    return (
        <MainLayout>
            <h1 className="text-4xl m-auto text-center mb-7">Create article</h1>
            <Editor />
        </MainLayout>
    );
};

export default CreateArticlePage;
