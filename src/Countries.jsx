import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


function Country() {
    let [countries, setCountries] = useState([])
    let [regions, setRegions] = useState([])

    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            setCountries(res.data)
        })
    }, [])

    // var region = countries.filter((c) => {
    //     if(c.region == ref.current){
    //         console.log(ref.current.value);
    //     }
    // })
    // console.log(ref);
    function handleregion(e){
        axios.get(` https://restcountries.com/v3.1/region/${e}`).then((res)=>{
            console.log(res);
            setRegions(res.data)
        })

        // console.log(e);
    }
   
    return (
        <div>
            <h1>Countries</h1>
            <div>
                <select onChange={(e)=>{handleregion(e.target.value)}} name="" id="sel">
                    <option selected value="">Region</option>
                    {countries.map((c) => {
                        return (
                            <option  value={c.region}>{c.region}</option>
                        )
                    })}

                </select>
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
                            regions?.map((c, i) => {
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td><Link to={`/countrydet/${c.name.common}`}>{c.name.common}</Link></td>
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