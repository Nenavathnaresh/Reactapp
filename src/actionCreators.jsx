import axios from "axios"
import { useNavigate } from "react-router"
import Products from "./Products"

// user form
export function actAddUser(values) {
    return (dispatch) => {
        axios.post('http://localhost:4000/Users', values).then((res) => {
            dispatch({ type: 'ADD_USER', payload: values })
        })
    }
}

// login form 

export function actLoginUser(values, Navigate) {
    return (dispatch) => {
        axios.get(`http://localhost:4000/Users/?email=${values.email}&password=${values.password}`).then((res) => {

            if (res.data.length !== 0) {
                axios.get('https://fakestoreapi.com/products').then((resallpro) => {
                dispatch({ type: 'LOGIN', payload: res.data[0] });
                dispatch({type:"SETCART",payload:res.data[0].cart})
                dispatch({ type: 'ADD_PRODUCTS', payload: resallpro.data })
            })
                Navigate('/dashboard')
            }

        })
    }
}

export function actupdate(values) {
    return (dispatch) => {
        axios.put(`http://localhost:4000/Users/` + values.id, values).then((res) => {
            dispatch({ type: 'LOGIN', payload: res.data })
        })
    }
}

export function actSignOut(Navigate) {
    return (dispatch) => {
        dispatch({ type: 'LOGIN', payload: null })
        Navigate('/')
    }

}

export function actAddproducts() {
    return (dispatch) => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            dispatch({ type: 'ADD_PRODUCTS', payload: res.data })
        })
    }
}

export function actaddtocart(product, ind, login) {
    return (dispatch) => {
        product.cartcount = 1
        axios.put(`http://localhost:4000/Users/` + login.id, { ...login, cart: [...login.cart, product] }).then((res) => {
            console.log(login);
            dispatch({ type: 'ADD_CART', payload: product, index: ind })
            dispatch({ type: 'UPDATELOGIN', payload: { ...login, cart: [...login.cart, product] } })
        })
    }

}

export function actincre(i, login) {
    return (dispatch) => {
        let temp = login.cart
        temp[i].cartcount++
        axios.put(`http://localhost:4000/Users/` + login.id, { ...login, cart: [...temp] }).then((res) => {
            dispatch({ type: 'INC', payload: temp })
        })
    }
}
export function actdecre(i, login) {
    return (dispatch) => {
        let temp = login.cart
        if (temp[i].cartcount > 1) {
            temp[i].cartcount--
            axios.put(`http://localhost:4000/Users/` + login.id, { ...login, cart: [...temp] }).then((res) => {
                dispatch({ type: 'DEC', payload: temp })
            })
        }
    }
}
export function actremove(i, login) {
    return (dispatch) => {
        console.log(i, login);
        let temp = [...login.cart]
        let ghh = temp.splice(i, 1)
        console.log(temp)
        axios.put(`http://localhost:4000/Users/` + login.id, { ...login, cart: [...temp] }).then((res) => {
            dispatch({ type: 'REMOVE', payload: temp })
            dispatch({ type: 'REMOVELOGIN', payload: { ...login, cart: [...temp] } })
        })
    }
}