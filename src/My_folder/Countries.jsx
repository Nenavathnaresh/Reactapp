import axios from "axios";
import React from "react";
import Countriesdetails from "./Countriesdetails";

function Countries() {
    let [countries, SetCountries] = React.useState([])
    let [countriesdetails, setCountriesdetails] = React.useState([])

    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            SetCountries(res.data)
        })
    }, [])

    return (
        <div className="d-flex flex-wrap">
            <div className="con">
                <ul>
                    {
                        countries.map((c) => {
                            return (
                                <li onClick={() => { setCountriesdetails(c) }}>
                                    {c.name.common}
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
            <div className="con">
                <Countriesdetails country={countriesdetails}></Countriesdetails>
            </div>
        </div>
    )
}
export default Countries