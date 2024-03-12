import React from "react";

function Rating() {
    return (
        <div className="main">
            <h1>Customer Views</h1>
            <div className="icons">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <span>4.7 outof 5</span>

            </div>
            <p>40 customer ratings</p>
            <div className="startdiv">
                <div>
                    <span>5 star</span>
                    <input className="inp" type="range" name="" id="" />
                    <span>84%</span>
                </div>
                <div>
                    <span>4 star</span>
                    <input className="inp" type="range" name="" id="" />
                    <span>9%</span>
                </div>
                <div>
                    <span>3 star</span>
                    <input className="inp" type="range" name="" id="" />
                    <span>4%</span>
                </div>
                <div>
                    <span>2 star</span>
                    <input className="inp" type="range" name="" id="" />
                    <span>2%</span>
                </div>
                <div>
                    <span>1 star</span>
                    <input className="inp" type="range" name="" id="" />
                    <span>1%</span>
                </div>
            </div>
            <p >How do we calculate rating?</p>
        </div>
    )
}
export default Rating