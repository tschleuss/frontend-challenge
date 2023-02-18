import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    fetchColors: builder.query({
      query: () => "/colors",
    }),
    signupUser: builder.mutation({
      query: (data) => ({
        url: "/submit",
        method: "POST",
        body: data,
        responseHandler: (response) =>
          response.status === 200 ? response.text() : response.json(),
      }),
    }),
  }),
});

export const { useFetchColorsQuery, useSignupUserMutation } = api;
