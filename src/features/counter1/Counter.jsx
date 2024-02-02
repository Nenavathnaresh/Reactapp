import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";


function Counter(){
    var count = useSelector((state)=>{return state.counter1.count})
    var dispatch = useDispatch()

    // console.log(dispatch)
    return(
        <div className="border border-5 m-2 p-2 border-danger">
            <h1>Counter1:{count}</h1>
            <button className="btn btn-success m-3" onClick={()=>{dispatch(increment())}}>Increment</button>
            <button className="btn btn-danger m-3" onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button className="btn btn-primary m-3" onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}
export default Counter