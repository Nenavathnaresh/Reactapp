import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "./counterSlice2";
import { increment2,decrement2,reset2 } from "./counterSlice2";

function Counter2(){
    const count = useSelector((state)=>{return state.counter2.count})
    const dispatch = useDispatch()
    
    return(
        <div className="border border-5 m-2 p-2 border-success">
            <h1>Counter2:{count}</h1>
            <button className="btn btn-primary m-3" onClick={()=>{dispatch(increment2())}}>Increment</button>
            <button className="btn btn-danger m-3" onClick={()=>{dispatch(decrement2())}}>Decrement</button>
            <button className="btn btn-success m-3" onClick={()=>{dispatch(reset2())}}>Reset</button>
        </div>
    )
}
export default Counter2