import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginDet : [],
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        addloginDet : (state,action)=>{state.loginDet = action.payload},
        updateDet: (state,action)=>{state.loginDet = [action.payload]} ,
        decrement: (state,action)=>{
            state.loginDet[0].cart[action.payload].count-=1
        },
        increment: (state,action)=>{state.loginDet.count = state.loginDet.count++},
    }
})

export const {addloginDet,updateDet,decrement,increment} = loginSlice.actions
export default loginSlice.reducer