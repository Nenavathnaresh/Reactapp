import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to='/home'>Home</Link> &nbsp;&nbsp;
            <Link to='/contact'>Contact</Link> &nbsp;&nbsp;
            <Link to='/about'>About</Link> &nbsp;&nbsp;
            <Link to='/products'>Products</Link> &nbsp;&nbsp;
        </div>
    )
}
export default Header