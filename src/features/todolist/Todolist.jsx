import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, newtodo, deletetodo, done, undo,edit,update } from "./todolistSlice";

function Todolist() {

    const todos = useSelector((state) => { return state.todolist })
    const inp = React.useRef() 

    console.log(todos);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Todolist</h1>
            <input type="text" ref={inp} onChange={(e) => { dispatch(newtodo(e.target.value)) }} />
           {!todos.isupdate && <button onClick={() => { dispatch(addtodo()) }}>Add todo</button>}
           {todos.isupdate && <button onClick={()=>{dispatch(update(inp))}}>Update</button>}
            <ul>
                {
                    todos.todos?.map((todo, ind) => {
                        return (
                            <li className={todo.isDone?'text-decoration-line-through text-danger':'text-decoration-none'}>{todo.task}
                               {todo.isDone && <button onClick={() => { dispatch(deletetodo(ind)) }}>Delete</button>}
                                {!todo.isDone &&<button onClick={()=>{dispatch(done(ind))}}>Done</button>}
                               { todo.isDone &&<button onClick={()=>{dispatch(undo(ind))}}>Undo</button>}
                              { !todo.isDone && <button onClick={()=>{dispatch(edit({index:ind,input:inp}))}}>Edit</button>}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist