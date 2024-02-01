import { applyMiddleware, combineReducers, createStore } from "redux";
import FormReducer from "./Redecers/FormReducer";
import { thunk } from "redux-thunk";
import LoginReducer from "./Redecers/LoginReducer";
import ProductReducer from "./Redecers/ProductReducer";

const store = new createStore(combineReducers({
    newUser:FormReducer,
    newLogin:LoginReducer,
    products:ProductReducer,
}), applyMiddleware(thunk))

export default store