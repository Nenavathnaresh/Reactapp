import { useFormik } from "formik";
import { connect } from "react-redux";
import React from "react";
import * as Yup from 'yup'
import { useNavigate } from "react-router";
import { actupdate } from "./actionCreators";


function Editpro(props) {

    const userDetails = React.useRef()
    const Navigate = useNavigate()

    // console.log('edit::', props);

    const userFormik = useFormik({
        initialValues: props.login,

        validationSchema: Yup.object({
            firstname: Yup.string().required('*First Name is required field').min(3, 'Too short!').max(50, 'Too long!'),
            lastname: Yup.string().required('*Last Name is required field').min(3, 'Too short!').max(50, 'Too long!'),
            email: Yup.string().required('*Email is required field').email('Invalid email'),
            password: Yup.string().required('*Password is required field').matches((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/), { message: "Please create a stronger password" }),
            phone: Yup.string().required('*Phone Number is required field'),
            DateOfBirth: Yup.string().required('*Date of Birth is required field'),
            gender:Yup.string().required('*Please select gender')
        }),

        onSubmit: (values) => {
            console.log('Edval::', values);
            props.update(values)
            Navigate('/dashboard/profile')
            // userDetails.current.reset()
            // userFormik.handleReset()
        }
    })
    console.log('userFormik', userFormik);
    return (
        <div className="w-50 rounded m-2 ms-auto me-auto border border-3 border-black p-3">

            <form onSubmit={userFormik.handleSubmit} ref = {userDetails}>
                <h1 className="shadow rounded p-2 mb-3">*Update Profile*</h1>
                <div class="form-floating rounded mb-3">
                    <input type="text" value={userFormik.values.firstname} class={userFormik.touched.firstname ? (userFormik.errors.firstname ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} name='firstname' onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} id="floatingInput" placeholder="firstname" />
                    <label for="floatingInput">First Name</label>
                    <div className="text-danger">{userFormik.touched.firstname && userFormik.errors.firstname}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" value={userFormik.values.lastname} class={userFormik.touched.lastname ? (userFormik.errors.lastname ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} name='lastname' onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} id="ln" placeholder="name@example.com" />
                    <label for="ln">Last Name</label>
                    <div className="text-danger">{userFormik.touched.lastname && userFormik.errors.lastname}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" value={userFormik.values.email} class={userFormik.touched.email ? (userFormik.errors.email ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} name='email' onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} id="mail" placeholder="name@example.com" />
                    <label for="mail">Email Address</label>
                    <div className="text-danger">{userFormik.touched.email && userFormik.errors.email}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" value={userFormik.values.password} class={userFormik.touched.password ? (userFormik.errors.password ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} name='password' onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} id="pd" placeholder="name@example.com" />
                    <label for="pd">Password</label>
                    <div className="text-danger">{userFormik.touched.password && userFormik.errors.password}</div>
                </div>
                <div class="form-floating mb-3">
                    <input type="date" value={userFormik.values.DateOfBirth} class={userFormik.touched.DateOfBirth ? (userFormik.errors.DateOfBirth ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} name='DateOfBirth' onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} id="dob" placeholder="name@example.com" />
                    <label for="dob">Date of Birth</label>
                    <div className="text-danger">{userFormik.touched.DateOfBirth && userFormik.errors.DateOfBirth}</div>
                </div>
               <div>
               <select class="form-select mb-3" value={userFormik.values.gender} name="gender" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur}>
                    <option selected>Please select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option> 
                </select> 
                <div className="text-danger">{userFormik.touched.gender && userFormik.errors.gender}</div>  
               </div>
                <div class="form-floating mb-3">
                    <input type="text" value={userFormik.values.phone} class={userFormik.touched.phone ? (userFormik.errors.phone ? 'form-control is-invalid' : 'form-control is-valid ') : 'form-control '} name="phone" onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} id="phn" placeholder="name@example.com" />
                    <label for="phn">Phone Number</label>
                    <div className="text-danger">{userFormik.touched.phone && userFormik.errors.phone}</div>
                </div>
                <div>
                    <button className="btn bg-info w-25" type="submit">Update Profile</button>
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
        update:(values)=>{dispatch(actupdate(values))}
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Editpro)