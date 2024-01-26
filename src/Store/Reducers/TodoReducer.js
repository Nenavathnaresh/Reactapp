const initialState = {
    todos : [],
    newTodo :{
        task : '',
        isStatus:false,
    }
    
}

const TodoReducer = (state=initialState,action)=>{
    if(action.type === 'UPDATE_TODO'){
        return {...state,newTodo:{task:action.payload,isStatus:false}}
    }
    if(action.type === 'ADD_TODO'){
        return{...state,todos:[...state.todos, state.newTodo]}
    }
    return state
}

export default TodoReducer