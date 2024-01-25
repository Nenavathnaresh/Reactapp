const initialState = {
    todos : [],
    newtodo :{
        task:'',
        isStatus:false
    }
}

const TodoReducer = (state=initialState,action)=>{
    if(action.type === 'UPDATENEWTODO'){
        return{...state,newtodo:{task:action.payload,isStatus:false}}
    }
    if(action.type === 'ADDTODO'){
        return{...state, todos:[...state.todos,state.newtodo]}
    }
    if(action.type === 'DELETETODO'){
        var temp = [...state.todos];
        temp.splice(action.index,1)
        return{...state, todos:[...temp]}
    }
    if(action.type === 'DONE'){
        let temp = [...state.todos]
        temp[action.index].isStatus = true
        return{...state,todos:[...temp]}

    }
    if(action.type === 'UNDO'){
        let temp = [...state.todos]
        temp[action.index].isStatus = false
        return{...state,todos:[...temp]}

    }
    return state
}
export default TodoReducer