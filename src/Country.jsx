import axios from "axios";
import React from "react";

function Country() {
    let [countries, setCountries] = React.useState([])
    let [filterCountries, setFilterCountries] = React.useState([])
    var sortArr =  React.useRef(true)

    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            countries = res.data
            setCountries([...countries])
            setFilterCountries([...countries])
        })
    }, [])

    const searchcountry = (e)=>{
        if(e.target.value === ''){
            setFilterCountries([...countries])
        }
        else{
            var temp = countries.filter((country)=>{
                return(
                    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
                )
            })
            setFilterCountries([...temp])
        }   
    }

    const sortCountries = ()=>{
    
        sortArr.current=!sortArr.current
        countries.sort((a,b)=>{
            
                if(a.name.common > b.name.common){
                    return sortArr.current?1:-1
                }
                if(a.name.common < b.name.common){
                    return sortArr.current?-1:1
                }
                return 0
        })
        setFilterCountries([...countries])
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <input className='form-control w-50' type="text" onKeyUp={searchcountry} placeholder='Search countries...' />
                <button className="btn btn-info w-25" onClick={sortCountries}>Sort {(sortArr.current)?(<i class="bi bi-arrow-down"></i>):(<i class="bi bi-arrow-up"></i>) }</button>
            </div>
            <table className="border table table-hover">
                <thead className="sticky-top top-0">
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Continents</th>
                        <th>Population</th>
                        <th>Flag</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterCountries.map((country) => {
                            return (
                                <tr>
                                    <td>{country.name.common}</td>
                                    <td>{country.capital}</td>
                                    <td>{country.region}</td>
                                    <td>{country.continents}</td>
                                    <td>{country.population}</td>
                                    <td><img src={country.flags.png} width='100px' /> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Country