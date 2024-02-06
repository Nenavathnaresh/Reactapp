// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const playersApi = createApi({
    reducerPath: 'playersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/players' }),
    endpoints: (builder) => ({
        getAllPlayers: builder.query({
            query: () => ``,
        }),
        getSelectedPlayers: builder.query({
            query: () => `http://localhost:4000/selectedPlayers`,
        }),
        addNewPlayer: builder.mutation({
            query: (newPlayer) => {
                return {
                    url: "http://localhost:4000/selectedPlayers",
                    method: 'POST',
                    body: newPlayer,
                }
            }
        }),
        updatePlayer: builder.mutation({
            query: (player) => {
                return {
                    url: `http://localhost:4000/players/${player.id}`,
                    method: 'PUT',
                    body: {...player,isSelected:!player.isSelected},
                }
            }
        }),
        deletePlayer: builder.mutation({
            query: (player) => {
                return {
                    url: `http://localhost:4000/selectedPlayers/${player.id}`,
                    method: 'DELETE',
                }
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetAllPlayersQuery,
    useAddNewPlayerMutation,
    useUpdatePlayerMutation,
    useGetSelectedPlayersQuery,
    useLazyGetSelectedPlayersQuery,
    useLazyGetAllPlayersQuery,
    useDeletePlayerMutation,
} = playersApi