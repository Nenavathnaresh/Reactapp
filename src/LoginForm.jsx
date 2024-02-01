import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { connect } from "react-redux";
import { actLoginUser } from "./actionCreators";
import { Outlet, useNavigate } from "react-router";

function Login(props) {
    // console.log('loginprops', props);

    const Navigate = useNavigate()

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            email: Yup.string().required('*Email is required field').email('Invalid email'),
            password: Yup.string().required('*Password is required field').matches((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/), { message: "Please create a stronger password" }),
        }),

        onSubmit: (values) => {
            // console.log('loginval::', values);
            props.loginUser(values,Navigate)
        }

    })
    // console.log(loginFormik);
    return (
        <div className="w-50 m-auto border border-3 border-black rounded p-3 ">
            <form onSubmit={loginFormik.handleSubmit} className="">
                <h1 className="shadow p-2 rounded mb-3">Login</h1>
                <div>
                    {loginFormik.submitCount > 0 && <b className="text-danger">*Username or password is incorrect</b> }
                </div>
                <div class="form-floating mb-3 ">
                    <input type="email" class='form-control ' name='email' onChange={loginFormik.handleChange} id="mail" placeholder="name@example.com" />
                    <label for="mail">Email Address</label>
                    <div className="text-danger">{loginFormik.errors.email}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class='form-control ' name='password' onChange={loginFormik.handleChange} id="pd" placeholder="name@example.com" />
                    <label for="pd">Password</label>
                    <div className="text-danger">{loginFormik.touched.password && loginFormik.errors.password}</div>
                </div>
                <div>
                    <button className="btn bg-primary w-25" type="submit">Login</button>
                </div>
                <div className="p-2 me-0 text-end">
                    <b >Don't have an account? <button onClick={() => { Navigate('/register') }} className="btn btn-outline-success">Create Account</button></b>
                </div>
            </form>
        </div>
    )
}
function MapStateToProps(state) {
    return state.newLogin
}
function MapDispatchToProps(dispatch) {
    return {
        loginUser: (values,Navigate) => { dispatch(actLoginUser(values, Navigate)) }
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Login)