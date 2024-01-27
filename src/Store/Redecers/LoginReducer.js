const initialState = {
    login:{}
}

const LoginReducer = (state=initialState,action)=>{
    if(action.type === 'LOGIN'){
        return {...state,login:action.payload}
    }
    return state
}
export default LoginReducer