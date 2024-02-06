import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonServerApi = createApi({
    reducerPath: 'jsonServerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/Users' }),
    endpoints: (builder) => ({
      addNewUsers: builder.mutation({
        query: (newUsers) => {
            return{
                url:'',
                method:'POST',
                body:newUsers,
            }
        }
      }),
    }),
  })

  export const { useAddNewUsersMutation } = jsonServerApi