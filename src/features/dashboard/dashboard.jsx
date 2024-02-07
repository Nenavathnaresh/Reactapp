import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <h1></h1>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Dashboard