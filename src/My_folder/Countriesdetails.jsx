import React from "react";
import { useLocation } from "react-router-dom";

function Countriesdetails() {

    var det = useLocation() 
    console.log(det);
    
    return (
        <div>
           <h1>Countries Details:</h1>
           <h4>Name:{det.state.name.common}</h4>
           <h4>Capital:{det.state.capital}</h4>
           <h4>Population:{det.state.population}</h4>
           <img src={det.state.flags.png}  />
        </div>
    )
}
export default Countriesdetails