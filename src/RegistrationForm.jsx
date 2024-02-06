import { useFormik } from "formik";
import * as Yup from 'yup'
import React from "react";

function RegistrationForm() {

    const userFormik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            dob: '',
            email: '',
            password: '',
            gender: '',
            phone: '',
            cart: []

        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('*First Name is required field').min(3, 'Too short!').max(50, 'Too long!'),
            lastname: Yup.string().required('*Last Name is required field').min(3, 'Too short!').max(50, 'Too long!'),
            email: Yup.string().required('*Email is required field').email('Invalid email'),
            password: Yup.string().required('*Password is required field').matches((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/), { message: "Please create a stronger password" }),
            phone: Yup.string().required('*Phone Number is required field'),
            dob: Yup.string().required('*Date of Birth is required field'),
            gender: Yup.string().required('*Please select gender')
        }),

        onSubmit: (values) => {
            console.log('values::', values);
        }

    })
    console.log('formik::', userFormik);
    return (
        <div className="w-50">
            <form onSubmit={userFormik.handleSubmit}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={userFormik.handleChange} name="firstname" />
                    <label for="floatingInput">First Name</label>
                    <div className="text-danger">{userFormik?.errors?.firstname}</div>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Password" onChange={userFormik.handleChange} name="lastname" />
                    <label for="floatingPassword">Last Name</label>
                    <div className="text-danger">{userFormik?.errors?.lastname}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="floatingInput" placeholder="name@example.com" name="dob" onChange={userFormik.handleChange} />
                    <label for="floatingInput">Date of Birth</label>
                    <div className="text-danger">{userFormik?.errors?.dob}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingPassword" placeholder="Password" name="phone" onChange={userFormik.handleChange} />
                    <label for="floatingPassword">Phone Number</label>
                    <div className="text-danger">{userFormik?.errors?.phone}</div>
                </div>
                <div>
                    <select class="form-select mb-3" name="gender" onChange={userFormik.handleChange}>
                        <option selected>Please select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div className="text-danger">{ userFormik?.errors?.gender}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={userFormik.handleChange} />
                    <label for="floatingInput">Email address</label>
                    <div className="text-danger">{userFormik?.errors?.email}</div>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={userFormik.handleChange} />
                    <label for="floatingPassword">Password</label>
                    <div className="text-danger">{userFormik?.errors?.password}</div>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
export default RegistrationForm