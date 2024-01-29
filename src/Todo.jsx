import React from "react";

function Todo({ todo, ind, props, handleEdit }) {
    return (
        <li>
            <span style={todo.isStatus ? { color: 'red', textDecoration: 'line-through' } : { color: 'black' }}>{todo.task}</span>
            <button onClick={() => { props.done(ind) }}>{todo.isStatus ? 'Undo' : 'Done'}</button>
            {todo.isStatus && <button onClick={() => { props.delete(ind) }}>Delete</button>}
            {!todo.isStatus && <button onClick={()=>{handleEdit(ind,todo)}}>Edit</button>}

        </li>
    )
}
export default Todo