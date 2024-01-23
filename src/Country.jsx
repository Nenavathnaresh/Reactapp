import axios from "axios";
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

function Country() {
    let [countries, setCountries] = React.useState([])

    const Navigate = useNavigate()

    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            setCountries(res.data)
        })
    }, [])

    const countryDetails = (c) => {
        Navigate(`countrydet/${c.cca2}`)
    }

    return (
        <div className="d-flex flex-wrap">
            <div className="w-50">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Country Name</th>
                            <th>Capital</th>
                            <th>Population</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            countries.map((c) => {
                                return (
                                    <tr onClick={() => { countryDetails(c) }} className="table-success">
                                        <td>{c.name.common}</td>
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
            <div className="w-50 text-center border border-3 bg-light">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Country