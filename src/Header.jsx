import { connect } from "react-redux";
import React from "react";
import { useNavigate } from "react-router";
import { actSignOut } from "./actionCreators";

function Header(props) {
    const Navigate = useNavigate()
    console.log('headprops',props);
    return (


        <nav class="navbar navbar-dark bg-light d-flex flex-wrap justify-content-between container position-sticky top-0">
            <div className="">
                <button className="btn" onClick={() => { Navigate('/dashboard') }}>Home</button>
               <a href="#footer"><button className="btn">Contact</button></a>
                <button className="btn">About</button>
            </div>
            <div className="">
               {!props.newLogin.isLogin && <button className="btn " onClick={() => { Navigate('/') }}>Login</button>}
               {!props.newLogin.isLogin && <button className="btn" onClick={() => { Navigate('/register') }}>Register</button>}
                {props.newLogin.isLogin && <button className="btn" onClick={()=>{props.singOut(Navigate)}}>Sign Out</button>}
                {props.newLogin.isLogin && <button className="btn" onClick={()=>{Navigate('/dashboard/profile')}}>My Profile<i class="bi bi-person-circle p-1"></i></button>}
                <button onClick={()=>{Navigate('/dashboard/cart')}} className="btn position-relative me-3">Cart <i class="bi bi-cart4 ms-1 fs-3"></i><span className="bg-warning rounded-circle p-1 position-absolute top-0 right-0">{props.products.cartitems.length}</span></button>
            </div>

        </nav>
    )
}
function mapStateToProps(state){
    return state
}
function mapDispatchToProps(dispatch){
    return{
        singOut:(Navigate)=>{dispatch(actSignOut(Navigate))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Header)