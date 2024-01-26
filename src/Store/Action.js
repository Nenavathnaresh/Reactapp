export  const handleAddTodo = (inp)=>{
    
    updateNewTodo(inp.current.value = '')
    return({type:'ADDTODO'})
    
}

export const updateNewTodo = (e)=>{
    return{type:'UPDATENEWTODO', payload:e}
}

export const delTodo = (todo,i)=>{
    return {type:'DELETETODO',index:i}
}

export const undo = (todo,i)=>{
    return {type:'UNDO',index:i}
}

export const done = (todo,i)=>{
    return {type:"DONE",index:i}
}

// counter 

export const increment = ()=>{
    return {type:'INC'}
}
export const decrement = ()=>{
    return {type:'DEC'}
}
export const reset = ()=>{
    return {type:'RESET'}
}