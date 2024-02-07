import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'
import { useCheckUserByEmailQuery, useLazyCheckUserByEmailQuery } from "../../servises/jsonServer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addloginDet } from "./loginSlice";

function Login() {

    const nav = useNavigate()

    const loginDet = useSelector((store)=>{return store.loginDetails.loginDet})
    const dispatch = useDispatch()
    // console.log('logindet',loginDet);

    // const x = useCheckUserByEmailQuery()
    const [checkuser] = useLazyCheckUserByEmailQuery()

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
            checkuser(values).then((res)=>{
                dispatch(addloginDet(res.data))
                if(res.data.length > 0){
                    nav('/dashboard')
                }   
            })
        }
    })
    return (
        <div className="w-50 border border-3 p-3 rounded m-auto text-center">
            <h1>Login</h1>
            <form onSubmit={loginFormik.handleSubmit}>
                <div class="form-floating mb-3">
                    <input type="email" class={loginFormik.touched.email ? (loginFormik.errors.email ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} id="floatingInput" placeholder="name@example.com" name="email" onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} />
                    <label for="floatingInput">Email address</label>
                    <div className="text-danger">{ loginFormik.touched.email &&loginFormik?.errors?.email}</div>
                </div>
                <div class="form-floating">
                    <input type="password" class={loginFormik.touched.password ? (loginFormik.errors.password ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} id="floatingPassword" placeholder="Password" name="password" onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} />
                    <label for="floatingPassword">Password</label>
                    <div className="text-danger">{loginFormik.touched.password &&loginFormik?.errors?.password}</div>
                </div>
                <div>
                    <button className="btn btn-primary m-2 w-25" type="submit">Login</button>
                </div>
                <div className="">
                    <b>Don't have an account?</b>
                    <button className="btn btn-success m-2 w-25" onClick={()=>{nav('/form')}} >Register</button>
                </div>
            </form>
        </div>
    )
}
export default Login