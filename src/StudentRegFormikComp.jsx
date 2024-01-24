import { Formik } from "formik";
import React from "react";
import * as Yup from 'yup'


function StudentRegFormikComp() {

    return (
        <div className="border m-3 p-3 rounded bg-light">
            <h1>Students Details Formik Component</h1>

            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    mail: '',
                    number: ''
                }}

                validationSchema={Yup.object({
                    firstname: Yup.string().max(8, 'less than 8').min(3, 'min 3 char').required('*firstname Required'),
                    lastname: Yup.string().max(10, 'less than 10').min(5, 'min 5 char').required('*lastname Required')
                })}

                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {
                    (formik) => {
                        return (
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="fn" type="text" placeholder="fn" {...formik.getFieldProps('firstname')} />
                                    <label htmlFor="fn">firstname</label>
                                    <div className="text-danger">{formik.touched.firstname && formik.errors.firstname}</div>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="ln" {...formik.getFieldProps('lastname')} />
                                    <label for="floatingInput">Lastname</label>
                                    <div className="text-danger">{formik.touched.lastname && formik.errors.lastname}</div>

                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" type="mail" id="mail" placeholder="mail" {...formik.getFieldProps('mail')} />
                                    <label htmlFor="mail">Email address</label>
                                    <div className="text-danger">{formik.touched.mail && formik.errors.mail}</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" type="number" id="mail" placeholder="num" {...formik.getFieldProps('number')} />
                                    <label htmlFor="mail">Number</label>
                                </div>
                                <button type="submit">Register</button>
                            </form>
                        )
                    }
                }
            </Formik>


        </div>
    )
}
export default StudentRegFormikComp