import { useFormik } from "formik";
import React from "react";

function checkForm(values){
    var error={};
    if(!values.firstname){
        error.firstname = 'firstname is mandatory'
    }
    if(!values.mail){
        error.mail = 'Enter your mail id'
    }
    return error 
}

function Studentregistration() {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            mail: '',
            number: ''
        },

        validate:checkForm,

        onSubmit: (values) => {
            console.log(values);
        }
    })

    console.log(formik);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input className="form-control" id="fn" type="text"  name="firstname" placeholder="fn" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <label htmlFor="fn">firstname</label>
                    <div className="text-danger">{formik.touched.firstname && formik.errors.firstname}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" name="lastname" placeholder="ln" onChange={formik.handleChange}/>
                    <label for="floatingInput">Lastname</label>
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
export default Studentregistration