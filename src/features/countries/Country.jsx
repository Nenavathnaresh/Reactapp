import React from "react";
import { useGetCountryByAllQuery } from "../../services/countriesAPI";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";


function Country() {

    const { data, isLoading } = useGetCountryByAllQuery()
    // console.log(data[0].name.common);
    return (
        <div className="border border-5 border-danger p-3 m-3 d-flex flex-wrap ">
            <div className="w-50">
                <h1>Countries</h1>
                {
                    isLoading && <img src="https://lh3.googleusercontent.com/proxy/O_GCT8rJVBEoHF3U99Td-spqhJWAweDxuCyLApbR2oFUIYd1bxLHG9MhqJ9iT1cbOCq8UqgrrHFfM2fN_HfF07SgJ_WcwCbgbw" alt="" />
                }
                {
                    !isLoading && (
                        data.map((c) => {
                            return (
                                <li>
                                    <Link to={`countryDetails/${c.name.common}`}>{c.name.common}</Link>
                                </li>
                            )
                        })
                    )
                }
            </div>
            <div className="w-50 border border-5 border-danger p-3">


                <Outlet></Outlet>
            </div>

        </div>

    )
}
export default Country