import React from "react";

function Countriesdetails({ country }) {
    console.log(country);
    return (
        <div className="w-100">
            <h1>{country?.name?.common}</h1>
            <img src={country?.flags?.png }  />

        </div>
    )
}
export default Countriesdetails