import { configureStore } from "@reduxjs/toolkit";
import { jsonServerApi } from "../servises/jsonServer";
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from "../servises/productAPI";
import loginSlice from "../features/registation/loginSlice";
import productSlice from "../features/products/productSlice";


export const store = configureStore({
    reducer: {
        [jsonServerApi.reducerPath]: jsonServerApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        loginDetails : loginSlice,
        pro : productSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jsonServerApi.middleware,productsApi.middleware),
})
setupListeners(store.dispatch)