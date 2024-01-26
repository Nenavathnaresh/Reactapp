export  const handleAddTodo = (props,inp)=>{
    props.dispatch({type:'ADDTODO'})
    props.dispatch({type:'UPDATENEWTODO',payload:''})
    inp.current.value = ''
}

export const delTodo = (todo,i)=>{
    return {type:'DONE',index:i}
}

export const undo = (todo,i)=>{
    return {type:'UNDO',index:i}
}

export const done = (todo,i)=>{
    return {type:"DONE",index:i}
}