import { applyMiddleware, combineReducers, createStore } from "redux";
import FormReducer from "./Redecers/FormReducer";
import { thunk } from "redux-thunk";
import LoginReducer from "./Redecers/LoginReducer";

const store = new createStore(combineReducers({
    newUser:FormReducer,
    newLogin:LoginReducer,
}), applyMiddleware(thunk))

export default store