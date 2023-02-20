import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  API_BASE_URL,
  API_COLORS_ENDPOINT,
  API_SUBMIT_ENDPOINT,
} from './apiConstants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchColors: builder.query({
      query: () => API_COLORS_ENDPOINT,
    }),
    signupUser: builder.mutation({
      query: (data) => ({
        url: API_SUBMIT_ENDPOINT,
        method: 'POST',
        body: data,
        responseHandler: (response) => {
          /**
           * Custom handler necessary since API returns a "OK" text for status 200
           * instead of a JSON, and RTK can't handle that directly.
           */
          return response.status === 200 ? response.text() : response.json();
        },
      }),
    }),
  }),
});

export const { useFetchColorsQuery, useSignupUserMutation } = api;
