import axios from "axios";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Countriesdetails() {
    let [details,SetDetails] = React.useState(null)
    var det = useParams()

    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/alpha/${det.cname}`).then((res)=>{
            SetDetails({...res.data[0]})
            console.log(res);
        })
    },[det])
    
    return (
        details&&<div>
           <h1>Countries Details:</h1>
           <h4>Name:{details.name.common}</h4>
           <h4>Capital:{details.capital}</h4>
           <h4>Population:{details.population}</h4>
           <img src={details.flags.png}  />
        </div>
    )
}
export default Countriesdetails