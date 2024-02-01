import { connect } from "react-redux";
import React from "react";
import { useNavigate } from "react-router";

function Product({product,ind,add,login}){
    const Navigate = useNavigate()
    return(
        <li className="text-center shadow p-3 m-3 rounded border border-3 ">
            <img className="img" src={product.image} width='150px' height='150px' />
            <h6 className="mt-3">Title:{product.title.slice(0,30)}</h6>
            <div>Description:{product.description.slice(0,50)}</div>
            <div>Category:{product.category}</div>
            <div className="d-flex flex-wrap justify-content-between p-2">
                <b className="p-2 bg-light shadow rounded "><i class="bi bi-star-fill"></i>{product.rating.rate}</b>
                <b className="p-2 bg-light shadow rounded ">Price:<i class="bi bi-currency-dollar"></i>{product.price}</b>
            </div>
            <div>
                {!product.incart&&<button onClick={()=>{add(product,ind,login)}} className="btn btn-warning pbtn">Add to Cart<i class="bi bi-cart4 ms-1 "></i></button>}
                {product.incart&&<button onClick={()=>{Navigate('/dashboard/cart')}} className="btn btn-info pbtn">Go to Cart<i class="bi bi-cart4 ms-1"></i></button>}
            </div>
        </li>
    )
}

function mapStateToProps(state){
    return state.products 
}
function mapDispatchToProps(dispatch){
    return{}
}
export default connect(mapStateToProps,mapDispatchToProps)( Product)