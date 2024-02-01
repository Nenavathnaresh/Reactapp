import { connect } from "react-redux";
import React from "react";

function Bill(props) {

    var total =props.cartitems.reduce((a,b)=>{
        return(
            a + (b.price * b.cartcount)
        )
    },0);

    var discount;

    if(total <= 500){
        discount=0
    }
    else if(total > 500 && total <= 1500){
        discount = 10
    }
    else if (total > 1500 && total <= 2000){
        discount = 15
    }
    else{
        discount = 20
    }

    var charges = 0;
    if(total < 500){
        charges = 50
    }


    return (

        <div className="m-auto shadow w-75 p-4 rounded bgm">
            <h5>Price details:</h5>
            <div className="d-flex flex-wrap justify-content-between">
                <span>Price <span>({props.cartitems.length} items)</span></span>
                <b><i class="bi bi-currency-dollar"></i>{total}</b>
            </div>
            <div  className="d-flex flex-wrap justify-content-between">
                <span>Discount</span>
                <b className="text-success">{discount}%</b>
            </div>
            <div  className="d-flex flex-wrap justify-content-between border-bottom border-black mb-3">
                <span>Delivery charges</span>
                {total >= 500 && <b className="text-success"><b className="text-success text-decoration-line-through bi bi-currency-dollar me-2">50</b>FREE</b>}
                {total < 500 && <b className="text-success bi bi-currency-dollar">{charges}</b>}
            </div>
            <div className="d-flex flex-wrap justify-content-between">
                <b>Total Amount:</b>
                <b><i class="bi bi-currency-dollar"></i>{(total * (100 - discount)/100)+charges}</b>
            </div>
           
        </div>
    )
}

function mapStateToProps(state) {
    return state.products
}
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Bill)