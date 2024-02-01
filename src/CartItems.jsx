import React from "react";
import { connect } from "react-redux";
import Bill from "./Bill";
import { useNavigate } from "react-router-dom";
import { actdecre, actincre, actremove } from "./actionCreators";

function CartItems(props) {

    console.log('cartprops', props);

    const Navigate = useNavigate()

    if (props.cartitems.length === 0) {
        return (
            <div className="text-center">
                <h1 className="txt">Oops!</h1>
                <h1><i class="bi bi-exclamation-circle txt"></i></h1>
                <h1 className="">No Items in Cart</h1>
                <h1 className="">Add Items to continue shopping</h1>
                <button className="btn btn-warning w-25" onClick={() => { Navigate('/dashboard') }}>Shop Now</button>
            </div>
        )
    }
    else {
        return (
            <div className="d-flex flex-wrap container">

                <div className="w-50">
                    {
                        props.cartitems.map((p, i) => {
                            return (
                                <div className="d-flex flex-wrap m-2 p-3  shadow rounded my-3">
                                    <div className="w-25 text-center">
                                        <img src={p.image} width='50%' />
                                    </div>
                                    <div className="w-75">
                                        <h6>{p.title}</h6>
                                        <h6>Price:<i class="bi bi-currency-dollar"></i> {p.price}</h6>
                                        <button className="btn btn-warning" onClick={() => { props.incre(i,props.login) }}>+</button>
                                        <span className="p-2">{p.cartcount}</span>
                                        <button className="btn btn-warning" onClick={() => { props.decre(i,props.login) }}>-</button>
                                        <button className="btn ms-5 btn-danger" onClick={() => { props.remove(i,props.login) }}>Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-50 position-fixed top-25 mt-5 me-3 end-0 ">
                    <Bill></Bill>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {...state.products,...state.newLogin}
}
function mapDispatchToProps(dispatch) {
    return {
        incre: (i,login) => { dispatch(actincre(i,login)) },
        decre: (i,login) => { dispatch(actdecre(i,login)) },
        remove: (i,login) => { dispatch(actremove(i,login)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItems)