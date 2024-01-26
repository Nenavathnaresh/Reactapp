import React from "react";
import { connect } from "react-redux";
import { increment,decrement,reset } from "./Store/Action";

function Counter(props){

    return(
        <div className='border border-2 border-danger m-2 p-2'>
            <h1>Counter:{props.count}</h1>
            <button className="rounded btn bg-light border-success " onClick={()=>{props.inc()}}>Increment</button>
            <button className="rounded btn bg-light border-success m-3" onClick={()=>{props.dec()}}>Decrement</button>
            <button className="rounded btn bg-light border-success" onClick={()=>{props.res()}}>Reset</button>
        </div>
    )
}
function MapToStore(store){
    return store.counter
}
function MapToDispatch(dispatch){
    return {
        inc:()=>{
            dispatch(increment())
        },
        dec:()=>{
            dispatch(decrement())
        },
        res:()=>{
            dispatch(reset())
        }
    }
}
export default connect(MapToStore,MapToDispatch)(Counter)