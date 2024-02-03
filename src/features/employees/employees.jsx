import React from "react";
import { useGetAllEmployeesQuery } from "../../services/employees";

function Employees(){
    const {data, isLoading} = useGetAllEmployeesQuery()
    console.log(data);
    return(
        <div>
            <h1>Employees:</h1>
            {isLoading && (<h1>Please wait...</h1> )}
            {!isLoading && (
                data.map((emp)=>{
                    return(
                        <h3>{emp.firstname}</h3>
                    )
                })
            )}
        </div>
    )
}

export default Employees