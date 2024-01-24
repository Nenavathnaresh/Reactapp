import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'


function StudentregistrationYup() {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            mail: '',
            number: ''
        },

        validationSchema:Yup.object({
            firstname:Yup.string().max(8,'name is too big').min(3,'name is too small').required(),
            lastname:Yup.string().max(8,'name is too big').min(3,'name is too small').required()
        }),

        onSubmit: (values) => {
            console.log(values);
        }
    })

    console.log(formik);
    return (
        <div className="border m-3 p-3 rounded bg-light">
            <h1>Students Details with Yup</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input className="form-control" id="fn" type="text"  name="firstname" placeholder="fn" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <label htmlFor="fn">firstname</label>
                    <div className="text-danger">{formik.touched.firstname && formik.errors.firstname}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" name="lastname" placeholder="ln" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <label for="floatingInput">Lastname</label>
                    <div className="text-danger">{formik.touched.lastname && formik.errors.lastname}</div>

                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="mail" name="mail" id="mail" placeholder="mail" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <label htmlFor="mail">Email address</label>
                    <div className="text-danger">{formik.touched.mail && formik.errors.mail}</div>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="number" name="number" id="mail" placeholder="num" onChange={formik.handleChange} />
                    <label htmlFor="mail">Number</label>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default StudentregistrationYup