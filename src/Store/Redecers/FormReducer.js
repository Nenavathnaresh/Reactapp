const initialState = {
    users : []
} 

const FormReducer = (state=initialState,action)=>{
    if(action.type === 'ADD_USER'){
        return{...state,users:[...state.users,action.payload]}
    }
    return state 
}

export default FormReducer