import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'

function Login() {

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
            console.log('loginvalues::', values);
        }
    })
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginFormik.handleSubmit}>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={loginFormik.handleChange} />
                    <label for="floatingInput">Email address</label>
                    <div className="text-danger">{loginFormik?.errors?.email}</div>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={loginFormik.handleChange} />
                    <label for="floatingPassword">Password</label>
                    <div className="text-danger">{loginFormik?.errors?.password}</div>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login