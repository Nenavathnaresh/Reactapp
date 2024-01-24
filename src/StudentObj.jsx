import React from "react";
import { useParams } from "react-router";

function StudentObj(){

    const params = useParams()
    let [std,setStd] = React.useState({...JSON.parse(params.cname)})


    return(
        std && <div className="text-center w-50 ms-auto me-auto shadow rounded p-3 bg-light">
                   <h3>Name:{std.firstname +' '+ std.lastname}</h3>
                   <h3>Email:{std.mail}</h3>
              </div>
    )
}
export default StudentObj