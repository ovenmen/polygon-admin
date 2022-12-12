import React, { FC } from 'react';

import Editor from '../components/Editor';
import EditorLayout from '../layouts/EditorLayout';

const CreateArticlePage: FC = () => {
    return (
        <EditorLayout>
            <h1 className="text-4xl m-auto text-center mb-7">Create article</h1>
            <Editor />
        </EditorLayout>
    );
};

export default CreateArticlePage;
