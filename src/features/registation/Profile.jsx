import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {

    const logindet = useSelector((store) => { return store.loginDetails.loginDet })
    console.log(logindet);
    return (
        <div className="text-center">
            <h1>Wellcome to MyProfile</h1>
            <div className="w-50 m-auto shadow p-3 rounded ">
                <div className="d-flex flex-wrap justify-content-between">
                    <h3 className="text-center">Name: {logindet[0]?.firstname} {logindet[0]?.lastname}<i class="bi bi-person-circle"></i></h3>
                    <button className="btn btn-danger text-white" ><Link to='/dashboard/edit'>Edit</Link> </button>
                </div>
                <h6 > Email: {logindet[0].email}</h6>
                <h6>Date of Birth: {logindet[0].dob}</h6>
                <h6>Gender: {logindet[0].gender}</h6>
                <h6>Phone Number: {logindet[0].phone}</h6>
            </div>
        </div>
    )
}
export default Profile