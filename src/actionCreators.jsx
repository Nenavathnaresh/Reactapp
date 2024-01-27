import axios from "axios"

export function actAddUser(values){
    return(dispatch)=>{
        axios.post('http://localhost:4000/Users',values).then((res)=>{
            dispatch({ type: 'ADD_USER', payload: values })
        })
    }
}