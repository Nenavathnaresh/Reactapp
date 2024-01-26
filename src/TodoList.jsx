import { connect } from "react-redux";
import React from "react";

function TodoList(props){
    console.log(props);
    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" onKeyUp={(e)=>{props.dispatch({type:'UPDATE_TODO',payload:e.target.valu})}} />
            <button>Add Task</button>
        </div>
    )
}
export default connect((store)=>{return store})(TodoList)
