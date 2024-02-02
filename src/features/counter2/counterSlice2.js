import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 10
}

var counterSlice2 = createSlice({
    name:'counter2',
    initialState,
    reducers:{
        increment2:(state,action)=>{state.count += 10},
        decrement2:(state,action)=>{state.count -= 10},
        reset2:(state,action)=>{state.count = initialState.count}
    }

})

export var {increment2,decrement2,reset2} = counterSlice2.actions
var counterReducer2 = counterSlice2.reducer
export default counterReducer2