import React from "react";
import { useParams } from "react-router-dom";

function CountryDet(){
    var params = useParams()
    console.log(params);
    return(
        <div>Counties</div>
    )
}
export default CountryDet