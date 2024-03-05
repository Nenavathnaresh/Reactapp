import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Params } from "react-router-dom";
import { Link } from "react-router-dom";
function CountryDet(){
    var {cname} = useParams()
    var [countryDet, setCountryDet] = React.useState([])

    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${cname}`).then((res)=>{
            setCountryDet(res.data)
        })
    },[])
    console.log(countryDet);
    return(
        <div>
            <h1>Country Details:</h1>
            <Link to='/countries'>Go to Countries</Link>
           <div className="text-center">
           <h2>{countryDet[0]?.name.common}</h2>
            <img src={countryDet[0]?.flags.png} alt="" />
            <h3>Capital: {countryDet[0]?.capital}</h3>
            <h3>Region: {countryDet[0]?.region}</h3>
            <h3>Language: {countryDet[0]?.languages.lav}</h3>
            <h3>Popuation:{countryDet[0]?.population}</h3>
           </div>
        </div>
    )
}
export default CountryDet