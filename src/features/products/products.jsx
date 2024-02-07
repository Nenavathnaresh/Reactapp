import React from "react";
import { useGetAllProductsQuery } from "../../servises/productAPI";
import Product from "./Product";

function Products() {

    const { data, isLoading } = useGetAllProductsQuery()
    // console.log(x);
    return (
        <div className="bgm">
            {isLoading && (<img className=" w-100 " src='https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif' alt="" />)}
            {!isLoading && (
                <ul className="d-flex flex-wrap justify-content-around">
                    {
                        data?.map((product, ind) => {
                            return (
                                <Product product={product} ind={ind}></Product>
                            )
                        })
                    }
                </ul>
            )}
        </div>
    )
}
export default Products