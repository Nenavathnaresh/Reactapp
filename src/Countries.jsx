import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


function Country(){
    let [countries, setCountries] = useState([])

    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{
            // console.log(res);
            setCountries(res.data)
        })
    },[])
    console.log(countries);
    return(
        <div>
            <h1>Countries</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sl. No</th>
                            <th>Country Name</th>
                            <th>Capital</th>
                            <th>Populations</th>
                            <th>region</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        countries.map((c,i)=>{
                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td><Link to={`/countrydet/${c.name.commom}`}>{c.name.common}</Link></td>
                                    <td>{c.capital}</td>
                                    <td>{c.population}</td>
                                    <td>{c.region}</td>
                                </tr>
                            )
                        })
                       }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Country