import React from "react";
import { Outlet,Link } from "react-router-dom";
import Header from "./Header";

function Products(){
    return(
        <div>
            <Header></Header>
            <h1>All Products:</h1> 
            <Link to='hardware'>HardWare</Link> &nbsp;&nbsp;
            <Link to='software'>SoftWare</Link>
            <Outlet></Outlet>
        </div>
    )
}
export default Products