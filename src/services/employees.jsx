// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/employees' }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => ``,
    }),
    addNewEmployee: builder.mutation({
      query: (newEmp) => {
        return {
          url: "",
          method: 'POST',
          body: newEmp,
        }
      }
    }),
    deleteEmployee: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        }
      }
    }),
    updateEmployee: builder.mutation({
      query: (upemp) => {
        return {
          url: `/${upemp.id}`,
          method: "PUT",
          body: upemp,
        }
      }
    }),
    getDetails: builder.query({
      query: (id) => `/${id}`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeesQuery,
  useAddNewEmployeeMutation,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
  useGetDetailsQuery,
  useLazyGetAllEmployeesQuery,
  
} = employeesApi