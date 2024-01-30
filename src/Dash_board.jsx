import { connect } from "react-redux";
import React from "react";
import { Outlet, useNavigate } from "react-router";

function Dashboard(props) {
    // console.log('dashprops',props);
    const Navigate = useNavigate()
    return (
        <div>
            <div className="w-50 h-25 text-center bg-success shadow rounded m-auto p-3 m-2">
                <h1>Wellcome to Dashboard </h1>
                <h1>{props.login.firstname} {props.login.lastname}</h1>
            </div>
            <div>
                {/* <button onClick={() => { Navigate('profile') }}>My Profile</button> */}
            </div>
            <div>
            <Outlet></Outlet>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 