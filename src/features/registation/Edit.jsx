import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../servises/jsonServer";
import { updateDet } from "./loginSlice";
import { useNavigate } from "react-router-dom";

function Edit() {

    const loginDet = useSelector((store)=>{return store.loginDetails.loginDet})
    const dispatch = useDispatch()
    const nav = useNavigate()

    const [updateUser] = useUpdateUserMutation()

    const userFormik = useFormik({
        initialValues: loginDet[0],
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
            updateUser(values)

            dispatch(updateDet(values))

            nav('/dashboard/profile')
            // adduser(values)

            // userDetails.current.reset()
            // userFormik.handleReset()
        }

    })
    return (
        <div>
            <h1>Edit Profile</h1>
            <div className="w-50 m-auto border border-3 rounded p-3">
                <form onSubmit={userFormik.handleSubmit} >
                    <h1 className="text-center">*Registation Form*</h1>
                    <div class="form-floating mb-3">
                        <input type="text" value={userFormik.values.firstname} class={userFormik.touched.firstname ? (userFormik.errors.firstname ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} id="floatingInput" placeholder="name@example.com" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} name="firstname" />
                        <label for="floatingInput">First Name</label>
                        <div className="text-danger">{userFormik.touched.firstname && userFormik?.errors?.firstname}</div>
                    </div>
                    <div class="form-floating">
                        <input type="text" value={userFormik.values.lastname} class={userFormik.touched.lastname ? (userFormik.errors.lastname ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} id="floatingPassword" placeholder="Password" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} name="lastname" />
                        <label for="floatingPassword">Last Name</label>
                        <div className="text-danger">{userFormik.touched.lastname && userFormik?.errors?.lastname}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="date" value={userFormik.values.dob} class={userFormik.touched.dob ? (userFormik.errors.dob ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} id="floatingInput" placeholder="name@example.com" name="dob" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                        <label for="floatingInput">Date of Birth</label>
                        <div className="text-danger">{userFormik.touched.dob && userFormik?.errors?.dob}</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" value={userFormik.values.phone} class={userFormik.touched.phone ? (userFormik.errors.phone ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} id="floatingPassword" placeholder="Password" name="phone" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                        <label for="floatingPassword">Phone Number</label>
                        <div className="text-danger">{userFormik.touched.phone && userFormik?.errors?.phone}</div>
                    </div>
                    <div>
                        <select class="form-select mb-3" value={userFormik.values.gender} name="gender" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur}>
                            <option selected>Please select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Others</option>
                        </select>
                        <div className="text-danger">{userFormik.touched.gender && userFormik?.errors?.gender} </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" value={userFormik.values.email} class={userFormik.touched.email ? (userFormik.errors.email ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} id="floatingInput" placeholder="name@example.com" name="email" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                        <label for="floatingInput">Email address</label>
                        <div className="text-danger">{userFormik.touched.email && userFormik?.errors?.email}</div>
                    </div>
                    <div class="form-floating">
                        <input type="password" value={userFormik.values.password} class={userFormik.touched.password ? (userFormik.errors.password ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} id="floatingPassword" placeholder="Password" name="password" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                        <label for="floatingPassword">Password</label>
                        <div className="text-danger">{userFormik.touched.password && userFormik?.errors?.password}</div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary m-3 w-25" type="submit">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Edit