import { configureStore } from '@reduxjs/toolkit';
import { leadsApi } from '../features/api/leads-api.ts';

export const store = configureStore({
    reducer: {
        [leadsApi.reducerPath]: leadsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(leadsApi.middleware),
});