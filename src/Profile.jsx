import { connect } from "react-redux";
import React from "react";
import { useNavigate } from "react-router";

function Profile(props){
    const Navigate = useNavigate()
    console.log('profileprops',props);

    return(
        <div>
            <h1>Wellcome to Profile</h1>
            <div className="shadow w-50 text-center p-3 rounded">
            <div className="d-flex flex-wrap">
            <h3 className="ms-5">{props.login[0].firstname} {props.login[0].lastname}</h3>
            <button className="ms-auto btn btn-danger" onClick={()=>{Navigate('/dashboard/editpro')}}>Edit Profile</button>
            </div>

                <table className="w-100">
                    <tr>
                        <td>Email:</td>
                        <td>{props.login[0].email}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{props.login[0].gender}</td>
                    </tr>
                    <tr>
                        <td>Date Of Birth:</td>
                        <td>{props.login[0].DateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td>{props.login[0].phone}</td>
                    </tr>
                   
                </table>
            </div>
        </div>
    )
}
function mapStateToProps(state){
    return state.newLogin
}
function mapDispatchToProps(dispatch){
    return{}
}
export default connect(mapStateToProps,mapDispatchToProps)( Profile )