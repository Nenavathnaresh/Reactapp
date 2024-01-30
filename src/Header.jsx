import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                  <div>Home</div>
                  <div>Contact</div>
                  <div>About Us</div>
                  <div>
                    <input type="text" name="" id="" />
                  </div>
                  <div>
                    <Link to='/cart'>Cart<i class="bi bi-cart-plus"></i><span>0</span></Link>
                  </div>
                </div>
            </nav>
        </div>
    )
}
export default Header