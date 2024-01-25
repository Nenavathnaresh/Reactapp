import React from "react";
import { connect } from "react-redux";

function Counter(props){
    return(
        <div className='border border-2 border-danger m-2 p-2'>
            <h1>Counter:{props.counter.count}</h1>
            <button className="rounded btn bg-light border-success " onClick={()=>{props.dispatch({type:'INC'})}}>Increment</button>
            <button className="rounded btn bg-light border-success m-3" onClick={()=>{props.dispatch({type:'DEC'})}}>Decrement</button>
            <button className="rounded btn bg-light border-success" onClick={()=>{props.dispatch({type:'RESET'})}}>Reset</button>
        </div>
    )
}
export default connect((store)=>{return store})(Counter)