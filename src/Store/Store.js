import { combineReducers,createStore } from "redux";
import counterReducer from "./Reducer/CounterReducer";
import TodoReducer from "./Reducer/TodoReducer";

var store = createStore(combineReducers({
    counter:counterReducer,
    todolist:TodoReducer,

}))

export default store