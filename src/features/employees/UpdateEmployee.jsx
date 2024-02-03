import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery, useLazyGetAllEmployeesQuery, useUpdateEmployeeMutation } from "../../services/employees";

function UpdateEmp(){
    const [upemp,setUpemp] = React.useState({})

   
    var {cid} = useParams()
    
    const [updateEmp] = useUpdateEmployeeMutation()

    const {data,isLoading} = useGetDetailsQuery(cid)

    const [fetchupd] = useLazyGetAllEmployeesQuery()
    console.log(data);

    function pqr(){
        updateEmp(upemp).then(()=>{
            fetchupd()
        })
    }

    React.useEffect(()=>{
        setUpemp({...data})
    },[data])

    console.log(upemp);
    return(
        <div className="border border-5 border-success w-50 text-center m-auto p-3">
            <h1>Update Employee Details</h1>
            <input className="m-3" type="text" value={upemp?.firstname} onChange={(e)=>{setUpemp({...upemp, firstname:e.target.value})}} /> <br />
            <input type="text" value={upemp?.lastname} onChange={(e)=>{setUpemp({...upemp, lastname:e.target.value})}} /> <br />
            <input className="m-3" type="text" value={upemp?.age} onChange={(e)=>{setUpemp({...upemp, age:e.target.value})}} /> <br />
            <button className="btn btn-primary" onClick={()=>{pqr()}}>Update</button> 
        </div>
    )
}

export default UpdateEmp