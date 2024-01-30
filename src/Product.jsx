import axios from "axios";
import { connect } from "react-redux";
import React from "react";

function Products(props){
    let [products,setProducts] = React.useState([])
    // console.log('props',props);
    React.useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
        
            setProducts(res.data)
        })
    },[])
    
    return(
        <div>
            <ul className="d-flex flex-wrap justify-content-around">
                {
                    products.map((product,ind)=>{
                        return(
                            <li className=" shadow p-3 m-2 text-center rounded border border-3 wid">
                                <img src={product.image} width='150px' height='150px' />
                                <h6> Title : {product.title}</h6>
                                <div>Category : {product.category}</div>
                                <div className="d-flex flex-wrap justify-content-between p-2">
                                    <b className="bg-light rounded p-1">Rating: {product.rating.rate}</b>
                                    <b  className="bg-light rounded p-1">Price :<i class="bi bi-currency-rupee"></i>{product.price}</b>
                                </div>
                                <div><button onClick={()=>{props.additem(product)}} className="btn btn-warning">Add to Cart</button></div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
function mapStateToProps(state){
    return state.cartitem
}
function mapDispatchToProps(dispatch){
    return{
        additem:(product)=>{dispatch({type:'ADDTOCART',payload:product})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)