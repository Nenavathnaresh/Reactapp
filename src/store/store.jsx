import { combineReducers, createStore } from "redux"
import cartReducer from "./Reducer/Cart_Reducer"

const store = new createStore(combineReducers({
    cartitem : cartReducer
}))

export default store