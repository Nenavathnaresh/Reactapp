import { connect } from "react-redux";
import React from "react";
import Todo from "./Todo";

function TodoList(props){
    const inp = React.useRef()
    console.log('props::', props);

    const handleInput = (e)=>{
        props.updatetodo(e)
        
    }

    const handleAddtodo = ()=>{
        props.addtodo()
        inp.current.value = ''
        props.updatetodo('')

    }
    const handleEdit = (ind,todo)=>{
        props.edit(ind)
        inp.current.value = todo.task
    }

    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" onKeyUp={(e)=>{handleInput(e.target.value)}} ref={inp} />
           { !props.isUpdate && <button onClick={()=>{handleAddtodo()}}>Add Task</button>}
          { props.isUpdate &&<button onClick={()=>{props.update()}}>Update</button>}
            <div>
                <ul>
                    {
                        props.todos.map((t,i)=>{
                            return(
                                <Todo handleEdit={handleEdit} todo={t} ind={i} props={props}></Todo>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

function MapsStateToProps(state){
    return state
}
function MapDispatchToProps(dispatch){
    return {
        updatetodo:(e)=>{dispatch({type:'UPDATE_TODO', payload:e})},
        addtodo:()=>{dispatch({type:'ADD_TODO'})},
        delete:(ind)=>{dispatch({type:'DELETE', index:ind})},
        done:(ind)=>{dispatch({type:'DONE', index:ind})},
        edit:(ind)=>{dispatch({type:'EDIT', index:ind})},
        update:()=>{dispatch({type:'UPDATE'})}
    }
}
export default connect(MapsStateToProps, MapDispatchToProps)(TodoList)
