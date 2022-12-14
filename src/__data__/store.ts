import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './services/articles';
import { setupListeners } from '@reduxjs/toolkit/query';

import appReducer from './slices/app';
import { authApi } from './services/auth';
import { usersApi } from './services/users';

const store = configureStore({
    reducer: {
        app: appReducer,
        [articlesApi.reducerPath]: articlesApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath] : usersApi.reducer
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            articlesApi.middleware,
            authApi.middleware,
            usersApi.middleware
        ]),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
