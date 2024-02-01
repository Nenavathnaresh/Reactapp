const initialState = {
    products: [],
    cartitems: [],
}

const ProductReducer = (state = initialState, action) => {
    if (action.type === 'ADD_PRODUCTS') {
        let temp = action.payload
        
        temp = temp.map((p) => {
            if(state.cartitems.some(b=>p.id===b.id))
            {
                p.incart=true
                return p
            }
            p.incart = false
            return p
        })
        return { ...state, products: [...temp] }
    }
    if (action.type === "ADD_CART") {
        let temp = [...state.products]
        temp[action.index].incart = true
        return { ...state, cartitems: [...state.cartitems, action.payload], products: [...temp] }
    }
    if(action.type==="SETCART")
    {
        return {...state,cartitems:[...action.payload]}
    }
    if (action.type === "INC") {

        return { ...state, cartitems: [...action.payload] }
    }
    if (action.type === 'DEC') {
        let temp = [...state.cartitems]

        return { ...state, cartitems: [...action.payload] }

    }
    if (action.type === 'REMOVE') {
       
        return { ...state, cartitems: [...action.payload] }
    }

    return state
}

export default ProductReducer