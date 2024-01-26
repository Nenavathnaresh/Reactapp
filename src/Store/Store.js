import { createStore,combineReducers } from "redux";
import TodoReducer from "./Reducers/TodoReducer";

const store = new createStore(TodoReducer)

export default store 