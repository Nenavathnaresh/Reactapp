import React from "react";
import { useUpdateUserMutation } from "../../servises/jsonServer";
import { useDispatch, useSelector } from "react-redux";
import { updateDet } from "../registation/loginSlice";
import { useNavigate } from "react-router-dom";

function Product({product, ind}){

    const nav = useNavigate()

    const loginDet = useSelector((store)=>{return store.loginDetails.loginDet})
    const dispatch=useDispatch()

    var toggle =  loginDet[0]?.cart?.filter((p)=>{
        return p.id===product.id
    })
    if(toggle?.length>0)
    {
        product = {...product,incart:true}
    }
    else{
        product = {...product,incart:false}
    }
    const [addTocart] = useUpdateUserMutation()
    const handleaddTocart = (pro, ind)=>{
        let temp1={...loginDet[0]}
        let temp2=[...loginDet[0].cart]

        temp2= [...temp2,{...pro, incart:true, count:1}]
        temp1={...temp1,cart:[...temp2]}

        product={...temp1}
        dispatch(updateDet(temp1))
        addTocart(temp1)
    }
    return(
        
            <li className="text-center shadow p-3 m-3 rounded border border-3 bg-white ">
                <img className="img" src={product.image} width='150px' height='150px' />
                <h6 className="mt-3">Title:{product.title.slice(0,30)}</h6>
            <div>Description:{product.description.slice(0,50)}</div>
            <div>Category:{product.category}</div>
            <div className="d-flex flex-wrap justify-content-between p-2">
                <b className="p-2 bg-light shadow rounded "><i class="bi bi-star-fill"></i>{product.rating.rate}</b>
                <b className="p-2 bg-light shadow rounded ">Price:<i class="bi bi-currency-dollar"></i>{product.price}</b>
            </div>
            <div>
                {!product.incart&&<button onClick={()=>{handleaddTocart(product,ind)}}  className="btn btn-warning m-2 pbtn">Add to Cart<i class="bi bi-cart4 ms-1 "></i></button>}
                {product.incart&&<button onClick={()=>{nav('/dashboard/cartitems')}}  className="btn btn-info m-2 pbtn">Go to Cart<i class="bi bi-cart4 ms-1"></i></button>}
            </div>
            </li> 
    )
}
export default Product