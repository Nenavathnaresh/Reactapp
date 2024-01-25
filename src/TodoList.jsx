import React, { useRef } from "react";
import { connect } from "react-redux";

function TodoList(props){
    const inp = React.useRef()
    const handleAddTodo = ()=>{
        props.dispatch({type:'ADDTODO'})
        props.dispatch({type:'UPDATENEWTODO',payload:''})
        inp.current.value = ''
    }
    
    return(
        <div className='border border-2 border-danger m-2 p-2'>
            <h1>Todo List</h1>
            <div className="d-flex flex-wrap">
            <input className="form-control w-50" type="text" onKeyUp={(e)=>{props.dispatch({type:'UPDATENEWTODO', payload:e.target.value})}} ref={inp} />
            <button className="btn bg-info m-2 " onClick={()=>{handleAddTodo()}}>Add Todo</button>
            </div>
            <ul>
                {
                    props.todolist && props.todolist.todos.map((t,i)=>{
                        return(
                        <li className="m-2"><span style={t.isStatus?({color:'red',textDecoration:'line-through'}):({color:'black'})}>{t.task}</span>
                            <button className="rounded btn bg-danger me-3 ms-3" onClick={()=>{props.dispatch({type:'DELETETODO', index:i})}}>Delete</button>
                          {  !t.isStatus&&<button className="rounded btn bg-warning me-3" onClick={()=>{props.dispatch({type:'DONE',index:i})}}>Done</button>}
                           { t.isStatus&&<button className="rounded btn bg-success me-3" onClick={()=>{props.dispatch({type:'UNDO',index:i})}}>Undo</button>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default connect((store)=>{return store}) (TodoList) 