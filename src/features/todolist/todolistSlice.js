import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos:[],
    newtodo:{
        task :'',
        isDone:false,
    },
    editindex : null,
   isupdate:false,
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        newtodo:(state,action)=>{
            state.newtodo.task=action.payload
        },
        addtodo:(state,action)=>{
        state.todos.push(state.newtodo)
        },
        deletetodo:(state,action)=>{state.todos.splice(action.payload,1)},

        done:(state,action)=>{state.todos[action.payload].isDone = true},

        undo:(state,action)=>{state.todos[action.payload].isDone = false},

        edit:(state,action)=>{
            action.payload.input.current.value = state.todos[action.payload.index].task
            state.editindex = action.payload.index
            state.isupdate = true
        },

        update:(state,action)=>{
            state.todos[state.editindex].task =action.payload.current.value
            state.isupdate = false
            state.editindex = null
         }
    }
})
console.log(initialState.newtodo);
export var {addtodo,deletetodo,newtodo,done,undo, edit,update} = todoSlice.actions
var todoReducer = todoSlice.reducer
export default todoReducer