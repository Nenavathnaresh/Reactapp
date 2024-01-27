const initialState = {
    todos : [],
    newTodo :{
        task : '',
        isStatus:false,
    },
    isUpdate:false,
    selectedIndInd:null,
    
}

const TodoReducer = (state=initialState,action)=>{
    console.log('action::',action);
    if(action.type === 'UPDATE_TODO'){
        return {...state,newTodo:{task:action.payload,isStatus:false}}
    }
    if(action.type === 'ADD_TODO'){
        return{...state,todos:[...state.todos, state.newTodo]}
    }
    if(action.type === 'DELETE'){
        let temp = [...state.todos]
        temp.splice(action.index,1)
        return{...state,todos:[...temp]}
    }
    if(action.type === 'DONE'){
        let temp = [...state.todos]
        temp[action.index].isStatus = !temp[action.index].isStatus
        return {...state, todos:[...temp]}
    }
    if(action.type === 'EDIT'){
        return{...state,isUpdate:true,selectedInd:action.index}
    }
    return state
}

export default TodoReducer