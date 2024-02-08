import React from "react";
import { useGetAllProductsQuery } from "../../servises/productAPI";
import Product from "./Product";

function Products() {

    const { data, isLoading } = useGetAllProductsQuery()
    
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
             <div id="footer" className="h w-100 d-flex flex-wrap justify-content-around  border">
                <h5 className="row align-items-center">HEARD ENOUGH?<i class="bi bi-arrow-right"></i></h5>
                <h1 className="row align-items-center">Contact Us</h1>
                <h1 className="row align-items-center"><i class="bi bi-arrow-right"></i></h1>
            </div>
            <div className=" d-flex flex-wrap justify-content-between bg-dark text-white">
                <div className="w-25 p-3">
                    <h1>The agency for impatient brands</h1>
                </div>
                <div className="w-25 p-3">
                    <h6>Hyderabad</h6>
                    <a href="mailto:nenavathnaresh@gmail.com">naresh@gmail.com</a>
                    <p>+919666654222</p>
                    <p>83a HMT Hills Rd, near Bharat Gas Dealer, Addagutta Society, Jal Vayu Vihar, Kukatpally, Hyderabad, Telangana 500085</p>
                </div>
                <div className="w-25 p-3">
                    <h6>BUENOS AIRES</h6>
                    <a href="#">buenos@gmail.com</a>
                    <p>+918184829256</p>
                    <p>FOLLOW US</p>
                    <h5 className="d-flex justify-content-around"><a href="www.linkedin.com" target="_blank"><i class="bi bi-linkedin"></i></a><i class="bi bi-instagram"></i><i class="bi bi-whatsapp"></i><i class="bi bi-facebook"></i></h5>
                </div>
            </div>
        </div>
    )
}
export default Products