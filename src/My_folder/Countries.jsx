import axios from "axios";
import React from "react";
import Countriesdetails from "./Countriesdetails";
import { Link, Outlet } from "react-router-dom";

function Countries() {
    let [countries, SetCountries] = React.useState([])

    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            SetCountries(res.data)
        })
    }, [])

    return (
       <div className="d-flex flex-wrap">
         <ul className="w-50">
            {
                countries.map((c) => {
                    return (
                        <li>
                            <Link to={`countrydet/${c.cca2}`}> {c.name.common}</Link>

                        </li>
                    )
                })
            }
        </ul>
        <div className="w-50">
            <Outlet></Outlet>
        </div>
       </div>

    )
}
export default Countries