import { connect } from "react-redux";
import React from "react";

function Cart(props) {
    console.log('cartprops', props);
    return (
        <div>
            <ul>
                {
                    props.cartItems.map((p, i) => {
                        return (
                            <li >
                                <div className="d-flex p-3 m-2">
                                    <div className="m-2">
                                        <img src={p.image} width='100px' height='100px' />
                                    </div>
                                    <div>
                                        <h6>{p.title}</h6>
                                        <h6>Price:{p.price}</h6>
                                        <button>-</button>
                                        <span className="p-2">0</span>
                                        <button>+</button>
                                        <button>Remove</button>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
function mapStateToProps(state) {
    return state.cartitem
}
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart) 