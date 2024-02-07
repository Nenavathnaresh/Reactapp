import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/Users' }),
  endpoints: (builder) => ({
    addNewUsers: builder.mutation({
      query: (newUsers) => {
        return {
          url: '',
          method: 'POST',
          body: newUsers,
        }
      }
    }),
    updateUser: builder.mutation({
      query: (newUsers) => {
        return {
          url: `http://localhost:4000/Users/${newUsers.id}`,
          method: 'PUT',
          body: newUsers,
        }
      }
    }),
  
    checkUserByEmail: builder.query({
      query: (newUsers) => `/?email=${newUsers.email}&password=${newUsers.password}`
    }),
    getCartItems: builder.query({
      query: () => ``,
    }),
  }),
})

export const {
  useAddNewUsersMutation,
  useCheckUserByEmailQuery,
  useLazyCheckUserByEmailQuery,
  useUpdateUserMutation,
  useGetCartItemsQuery,
  
} = jsonServerApi