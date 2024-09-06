import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import LeadModel from '../../models/lead-model.ts';
import { createApi } from '@reduxjs/toolkit/query/react';
import LeadCredentials from '../../models/lead-credentials.ts';

export const leadsApi = createApi({
    reducerPath: 'leads',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://66d058f0181d059277de33d5.mockapi.io/leads'
    }),
    tagTypes: ['Lead'],
    endpoints: (builder) => ({
        getLeads: builder.query<LeadModel[], void>({
            query: () => '/',
            providesTags: ['Lead']
        }),
        deleteLead: builder.mutation<void, number>({
            query: (id: number) => ({
                url: `/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Lead']
        }),
        createLead: builder.mutation<LeadModel, LeadCredentials>({
            query: (lead: LeadCredentials) => ({
                url: '/',
                method: 'POST',
                body: lead,
            }),
            invalidatesTags: ['Lead']
        })
    })
});

export const { useGetLeadsQuery, useDeleteLeadMutation, useCreateLeadMutation } = leadsApi;