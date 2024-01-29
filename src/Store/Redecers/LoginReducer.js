const initialState = {
    login:{},
    isLogin:false,
}

const LoginReducer = (state=initialState,action)=>{
    if(action.type === 'LOGIN'){
        return {...state,login:action.payload,isLogin:!state.isLogin}
    }
  
    return state
}
export default LoginReducer