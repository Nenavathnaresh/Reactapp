import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "../services/countriesAPI";
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer:{
        [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
})

setupListeners(store.dispatch)