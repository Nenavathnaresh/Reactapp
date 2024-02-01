import { connect } from "react-redux";
import React from "react";
import { useNavigate } from "react-router";

function Profile(props) {
    const Navigate = useNavigate()
    // console.log('profileprops',props);

    return (
        <div className="text-center">
            <h1>Wellcome to Profile</h1>
            <div className="shadow w-50 text-center m-auto p-3 rounded pro">
                <div className="d-flex flex-wrap">
                    <h3 className="ms-5">{props.login.firstname} {props.login.lastname}<i class="bi bi-person-circle p-1"></i></h3>
                    <button className="ms-auto btn btn-danger" onClick={() => { Navigate('/dashboard/editpro') }}>Edit Profile</button>
                </div>

                <table className="w-100">
                    <tr>
                        <td>Email:</td>
                        <td>{props.login.email}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{props.login.gender}</td>
                    </tr>
                    <tr>
                        <td>Date Of Birth:</td>
                        <td>{props.login.DateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td>{props.login.phone}</td>
                    </tr>

                </table>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return state.newLogin
}
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)