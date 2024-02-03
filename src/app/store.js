import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { employeesApi } from "../services/employees";

export const store = configureStore({
    reducer:{
        [employeesApi.reducerPath]: employeesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeesApi.middleware), 
})

setupListeners(store.dispatch)