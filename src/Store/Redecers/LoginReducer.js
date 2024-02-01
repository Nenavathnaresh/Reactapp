const initialState = {
    login:{},
    isLogin:false,
}

const LoginReducer = (state=initialState,action)=>{
    if(action.type === 'LOGIN'){
        return {...state,login:action.payload,isLogin:!state.isLogin}
    }
    if(action.type === 'UPDATELOGIN'){
        return{...state,login:action.payload}
    }
    if(action.type==='REMOVELOGIN')
    {
        return {...state,login:action.payload}
    }
    return state
}


export default LoginReducer