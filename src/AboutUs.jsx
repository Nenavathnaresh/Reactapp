import React from "react";
import Software from "./Software";
import { Outlet, useNavigate } from "react-router";

function About(){
    const Navigate = useNavigate() 
    const software = ()=>{
        Navigate('software')
    }
    const hardware = ()=>{
        Navigate('hardware')
    }
    return(
        <div>
            <h1>AboutUs:</h1>
            <span onClick={software}>Software</span> &nbsp;&nbsp;
            <span onClick={hardware}>Hardware</span> &nbsp;&nbsp;
            <Outlet></Outlet>
        </div>
    )
}
export default About