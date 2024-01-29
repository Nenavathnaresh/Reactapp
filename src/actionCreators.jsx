import axios from "axios"
import { useNavigate } from "react-router"

// user form
export function actAddUser(values) {
    return (dispatch) => {
        axios.post('http://localhost:4000/Users', values).then((res) => {
            dispatch({ type: 'ADD_USER', payload: values })
        })
    }
}

// login form 

export function actLoginUser(values,Navigate) {
    return (dispatch) => {
        axios.get(`http://localhost:4000/Users/?email=${values.email}&password=${values.password}`).then((res) => {
            console.log('res',res.data);
            dispatch({ type: 'LOGIN', payload: res.data[0] });
            if(res.data.length !== 0){
                Navigate('/dashboard')
            }
            
        })
    }
}

export function actupdate(values){
    return(dispatch)=>{
        axios.put(`http://localhost:4000/Users/`+values.id,values).then((res)=>{
        dispatch({type:'LOGIN',payload:res.data})
        })
    }
}

export function actSignOut(Navigate){
    return (dispatch)=>{
       dispatch( {type:'LOGIN',payload:null})
       Navigate('/login')
    }

}