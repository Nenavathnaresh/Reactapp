import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Dashboard() {
    const loginDet = useSelector(store => store.loginDetails.loginDet)
    console.log(loginDet);
    return (
        <div>
            <h1 className="bg-white">
                Wellcome {loginDet[0].firstname} {loginDet[0].lastname}
            </h1>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Dashboard