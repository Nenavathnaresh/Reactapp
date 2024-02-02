import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter1/counterSlice";
import counterReducer2 from "../features/counter2/counterSlice2";
import todoReducer from "../features/todolist/todolistSlice";

export const store = configureStore({
    reducer:{
        counter1:counterReducer,
        counter2:counterReducer2,
        todolist:todoReducer
    }, 
})