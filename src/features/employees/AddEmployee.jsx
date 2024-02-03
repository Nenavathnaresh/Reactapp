import React from "react";
import { useAddNewEmployeeMutation, useLazyGetAllEmployeesQuery } from "../../services/employees";

function AddEmployee(){
    const [newemp,setNewemp] = React.useState({
        firstname:'',
        lastname:'',
        age:''
    })
    const [addEmp] = useAddNewEmployeeMutation()
    const [fetchemp] = useLazyGetAllEmployeesQuery()
    console.log();
    function abc(){
        addEmp(newemp).then(()=>[
            fetchemp()
        ])
    }
    
    return(
        <div className="border border-5 border-success w-50 text-center m-auto p-3">
            <h1>Add Employee:</h1>
            <input className="m-3" type="text" placeholder="firstname" onChange={(e)=>{setNewemp({...newemp,firstname:e.target.value})}} /> <br />
            <input type="text" placeholder="lastname" onChange={(e)=>{setNewemp({...newemp,lastname:e.target.value})}} /> <br />
            <input className="m-3" type="text" placeholder="age" onChange={(e)=>{setNewemp({...newemp,age:e.target.value})}} /> <br />
            <button className="btn btn-primary" onClick={()=>{abc()}}>AddEmp</button>
        </div>
    )
}
export default AddEmployee