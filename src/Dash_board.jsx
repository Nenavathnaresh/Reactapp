import { connect } from "react-redux";
import React from "react";
import { Outlet, useNavigate } from "react-router";

function Dashboard(props) {
    // console.log('dashprops',props);
    const Navigate = useNavigate()

    return (
        <div>

            {props.products.length === 0 && <div className="text-center "> <img  src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" /> </div>}
            {props.products.length > 0 && <div>  <Outlet></Outlet> </div>}

        </div>
    )
}
function mapStateToProps(state) {
    return { ...state.newLogin, ...state.products }
}
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 