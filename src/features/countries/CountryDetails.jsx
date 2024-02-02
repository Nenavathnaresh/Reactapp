import React from "react";
import { Outlet, useParams } from "react-router";
import { useGetCountryByAllQuery, useGetCountryDetailsByNameQuery } from "../../services/countriesAPI";

function CountryDetails(){

    const {cname} = useParams()
    const {data, isLoading} = useGetCountryDetailsByNameQuery(cname)
    console.log(cname);

    return(
       
         <div className="">
            <h1 className="bg-success">CountryDetails:</h1>
            {
                    isLoading && <img src="https://lh3.googleusercontent.com/proxy/O_GCT8rJVBEoHF3U99Td-spqhJWAweDxuCyLApbR2oFUIYd1bxLHG9MhqJ9iT1cbOCq8UqgrrHFfM2fN_HfF07SgJ_WcwCbgbw" alt="" />
                }
                {
                    !isLoading && ( 
                        <div>
                            <h1>Country:{data[0].name.common}</h1>
                            <h3>Capital:{data[0].capital}</h3>
                            <h3>Population:{data[0].population}</h3>
                            <img src={data[0].flags[0]} width='100%' height='300px' />
                        </div>
                    
                     )
                }
        </div>
       
       
        
    )
}
export default CountryDetails