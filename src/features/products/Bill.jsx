import React from "react";
import { useSelector } from "react-redux";

function Bill({ product, ind }) {
    var cartitems = useSelector((state) => { return state.loginDetails.loginDet[0].cart })
    console.log(cartitems);
    let total = cartitems.reduce((a, b) => {
        return (
            a + (b.price * b.count)
        )
    }, 0)

    var discount;

    if (total <= 500) {
        discount = 0
    }
    else if (total > 500 && total <= 1500) {
        discount = 10
    }
    else if (total > 1500 && total <= 2000) {
        discount = 15
    }
    else {
        discount = 20
    }

    var charges = 0;
    if (total < 500) {
        charges = 50
    }
    return (
        <div className="m-auto shadow p-4 rounded w-75 bgm">
            <h5>Price details:</h5>
            <div className="d-flex flex-wrap justify-content-between">
                <span>Price <span>({cartitems.length} items)</span></span>
                <b><i class="bi bi-currency-dollar"></i>{total}</b>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
                <span>Discount</span>
                <b className="text-success">{discount}%</b>
            </div>
            <div className="d-flex flex-wrap justify-content-between border-bottom border-black mb-3">
                <span>Delivery charges</span>
                {total >= 500 && <b className="text-success"><b className="text-success text-decoration-line-through bi bi-currency-dollar me-2">50</b>FREE</b>}
                {total < 500 && <b className="text-success bi bi-currency-dollar">{charges}</b>}
            </div>
            <div className="d-flex flex-wrap justify-content-between">
                <b>Total Amount:</b>
                <b><i class="bi bi-currency-dollar"></i>{(total * (100 - discount) / 100) + charges}</b>
            </div>

        </div>
    )
}
export default Bill  