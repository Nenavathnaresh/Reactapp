const initialState = {
    cartItems:[]
}

const cartReducer = (state=initialState,action)=>{
    if(action.type === 'ADDTOCART'){
        return {...state,cartItems:[...state.cartItems,action.payload]}
    }
    return state
}
export default cartReducer