import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import LeadModel from '../../models/lead-model.ts';
import { createApi } from '@reduxjs/toolkit/query/react';

export const leadsApi = createApi({
    reducerPath: 'leads',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://66d058f0181d059277de33d5.mockapi.io/leads'
    }),
    endpoints: (builder) => ({
        getLeads: builder.query<LeadModel[], void>({
            query: () => '/',
        }),
    })
});

export const { useGetLeadsQuery } = leadsApi;