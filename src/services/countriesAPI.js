import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3' }),
    endpoints: (builder) => ({
      getCountryByAll: builder.query({
        query: () => `all`,
      }),
      getCountryDetailsByName: builder.query({
        query: (cname) => `name/${cname}`,
      }),
    }),
  })

  export const { useGetCountryByAllQuery,useGetCountryDetailsByNameQuery } = countryApi