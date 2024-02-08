import React from "react";
import { useGetCartItemsQuery, useUpdateUserMutation } from "../../servises/jsonServer";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, updateDet } from "../registation/loginSlice";
import Bill from "./Bill";
import { useNavigate } from "react-router-dom";


function CartItems() {

    const Navigate = useNavigate()

    const { data, isLoading } = useGetCartItemsQuery()
    const logindet = useSelector(state => state.loginDetails.loginDet[0])
    const [update] = useUpdateUserMutation()
    const dispatch = useDispatch()

    const cartitems = useSelector((store) => { return store.loginDetails.loginDet[0]?.cart })

    const handleDecrement = (pro, ind) => {
        if (pro.count > 1) {
            pro = { ...pro }
            pro.count--

            let temp = { ...logindet }
            let temp2 = [...cartitems]
            temp2[ind] = { ...pro }
            temp = { ...temp, cart: [...temp2] }
            update(temp)
            dispatch(updateDet(temp))
        }
    }

    const handleIncrement = (pro, ind) => {
        pro = { ...pro }
        pro.count++

        let temp = { ...logindet }
        let temp2 = [...cartitems]
        temp2[ind] = { ...pro }
        temp = { ...temp, cart: [...temp2] }

        update(temp)
        dispatch(updateDet(temp))

    }
    const handleRemove = (pro, ind) => {
        let temp = { ...logindet }
        let temp2 = [...cartitems]
        temp2.splice(ind, 1)
        temp = { ...temp, cart: [...temp2] }

        update(temp)
        dispatch(updateDet(temp))
    }
    if (cartitems?.length === 0) {
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
            <div className="d-flex flex-wrap profile ">
                <div className="w-50" >
                    {
                        cartitems?.map((product, ind) => {
                            return (

                                <div className=" shadow p-3 m-3 rounded border border-3 bg-white  d-flex flex-wrap ">
                                    <div className="m-2">
                                        <img className="img" src={product.image} width='150px' height='150px' />
                                    </div>
                                    <div>
                                        <h6 className="mt-3">Title:{product.title.slice(0, 30)}</h6>
                                        <div>Description:{product.description.slice(0, 40)}</div>
                                        <div>Category:{product.category}</div>
                                        <h6>Price:<i class="bi bi-currency-dollar"></i> {product.price}</h6>

                                        <div className="d-flex flex-wrap justify-content-around mt-3">
                                            <div>
                                                <button className="btn btn-warning" onClick={() => { handleDecrement(product, ind) }}>-</button>
                                                <span className="p-2">{product.count}</span>
                                                <button className="btn btn-warning" onClick={() => { handleIncrement(product, ind) }}>+</button>
                                            </div>
                                            <button className="btn btn-danger" onClick={() => { handleRemove(product, ind) }}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-50 position-fixed  end-0">
                    <Bill></Bill>
                </div>
            </div>
        )
    }

}
export default CartItems