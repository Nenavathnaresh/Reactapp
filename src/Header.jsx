import { connect } from "react-redux";
import React from "react";
import { useNavigate } from "react-router";
import { actSignOut } from "./actionCreators";

function Header(props) {
    const Navigate = useNavigate()
    console.log('headprops',props);
    return (


        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex flex-wrap justify-content-between container">
            <div className="">
                <button className="btn">Home</button>
                <button className="btn">Contact</button>
                <button className="btn">About</button>
            </div>
            <div className="">
               {!props.isLogin && <button className="btn " onClick={() => { Navigate('/login') }}>Login</button>}
               {!props.isLogin && <button className="btn" onClick={() => { Navigate('/register') }}>Register</button>}
                {props.isLogin && <button className="btn" onClick={()=>{props.singOut(Navigate)}}>Sign Out</button>}
                {props.isLogin && <button className="btn" onClick={()=>{Navigate('/dashboard/profile')}}>My Profile<i class="bi bi-person-circle p-1"></i></button>}
            </div>

        </nav>
    )
}
function mapStateToProps(state){
    return state.newLogin
}
function mapDispatchToProps(dispatch){
    return{
        singOut:(Navigate)=>{dispatch(actSignOut(Navigate))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Header)