import axios from "axios";
import React from "react";
import { useParams } from "react-router";

function Countrydet() {
    const [cdet, setCdet] = React.useState(null)

    const Params = useParams()

    React.useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/alpha/${Params.cname}`).then((res) => {
            setCdet({ ...res.data[0] })
        })
    }, [Params])
    console.log(cdet);

    return (
        cdet && <div>
                    <h1 className="bg-dark text-light">Country Details:</h1>
                    <h2>Country:{cdet.name.common}</h2>
                    <h2>Capital:{cdet.capital}</h2>
                    <h2>Region:{cdet.region}</h2>
                    <h2>Population:{cdet.population}</h2>
                    <img src={cdet.flags.png} />
               </div>
    )
}
export default Countrydet