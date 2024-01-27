import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { connect } from "react-redux";

function Login(props){
    const loginFormik = useFormik({
        initialValues:{
            email:'',
            password:''
        },

        validationSchema:Yup.object({
            email: Yup.string().required('*Email is required field').email('Invalid email'),
            password: Yup.string().required('*Password is required field').matches((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/), { message: "Please create a stronger password" }),
        }),

        onSubmit:(values)=>{
            console.log('loginval::', values);
            props.loginUser(values)
        }

    })
    return(
        <div className="w-50 m-auto border border-3 border-black rounded p-3 ">
            <form onSubmit={loginFormik.handleSubmit} className="">
                <h1 className="shadow p-2 rounded mb-3">Login</h1>
            <div class="form-floating mb-3 ">
                    <input type="email" class={loginFormik.touched.email ? (loginFormik.errors.email ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} name='email' onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} id="mail" placeholder="name@example.com" />
                    <label for="mail">Email Address</label>
                    <div className="text-danger">{loginFormik.touched.email && loginFormik.errors.email}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class={loginFormik.touched.password ? (loginFormik.errors.password ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} name='password' onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} id="pd" placeholder="name@example.com" />
                    <label for="pd">Password</label>
                    <div className="text-danger">{loginFormik.touched.password && loginFormik.errors.password}</div>
                </div>
                <div>
                    <button className="btn bg-primary w-25" type="button">Login</button>
                </div>
                <div className="p-2 me-0">
                    <b>Don't have an account? <button className="btn bg-success w-25">Register</button></b>
                </div>
            </form>

        </div>
    )
}
function MapStateToProps(state){
    return state.newLogin
}
function MapDispatchToProps(dispatch){
    return {
        loginUser:(values)=>{dispatch({type : 'LOGIN', payload:values})}
    }
}
export default connect(MapStateToProps, MapDispatchToProps) (Login)