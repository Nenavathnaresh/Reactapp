import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import * as Yup from 'yup'

function StudentDetails() {

    const Navigate = useNavigate()
     
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            mail: '',
            password: '',
        },

        validationSchema:Yup.object({
            firstname:Yup.string().required('*firstname required').min(3,'Atleast three char').max(10,'Lessthan ten char'),
            mail:Yup.string().email().required('*Email is required'),
            password:Yup.string().required('*Password is required').min(8,'*minimum eight char')
        }),

        onSubmit: (values) => {
            const student = JSON.stringify(values)
            Navigate(`/studentObj/${student}`)
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="w-25 text-center bg-light rounded shadow p-3">
                <h1>Login Form</h1>
                <div className="form-floating mb-3">
                    <input className={formik.touched.firstname&& formik.errors.firstname?('form-control is-invalid'):('form-control')} type="text" name="firstname" id="fn" placeholder="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <label htmlFor="fn">First Name</label>
                    <div className="text-danger">{formik.touched.firstname && formik.errors.firstname}</div>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="text" name="lastname" id="ln" placeholder="lastname" onChange={formik.handleChange}/>
                    <label htmlFor="ln">Last Name</label>

                </div>
                <div className="form-floating mb-3">
                    <input className={formik.touched.mail && formik.errors.mail?('form-control is-invalid'):('form-control')} type="email" name="mail" id="mail" placeholder="mail" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <label htmlFor="mail">Email address</label>
                    <div className="text-danger">{formik.touched.mail && formik.errors.mail}</div>

                </div>
                <div className="form-floating mb-3">
                    <input className={formik.touched.password && formik.errors.password?('form-control is-invalid'):('form-control')} type="password" name="password" id="pd" placeholder="pass   " onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <label htmlFor="pd">Passward</label>
                    <div className="text-danger">{formik.touched.password && formik.errors.password}</div>

                </div>
                <button className="btn btn-info" type="submit">Login</button>
            </form>
        </div>
    )
}
export default StudentDetails