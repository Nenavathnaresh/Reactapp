import { createSlice } from "@reduxjs/toolkit"
import { productsApi } from "../../servises/productAPI"


const initialState = {}

export const productSlice = createSlice({
    name:productsApi,
    initialState,
    reducers:{
        increment :(state,action)=>{}
    }
})

export default productSlice.reducer
export const {} = productSlice.actions