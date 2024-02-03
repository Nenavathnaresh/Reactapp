import React from "react";

function AddEmployee(){
    const [newemp,setNewemp] = React.useState({
        firstname:'',
        lastname:'',
        age:''
    })
    console.log(newemp);
    return(
        <div>
            <h1>Add Employee</h1>
            <input type="text" placeholder="firstname" onChange={(e)=>{setNewemp({...newemp,firstname:e.target.value})}} /> <br />
            <input type="text" placeholder="lastname" onChange={(e)=>{setNewemp({...newemp,lastname:e.target.value})}} /> <br />
            <input type="text" placeholder="age" onChange={(e)=>{setNewemp({...newemp,age:e.target.value})}} />
            <button>AddEmp</button>
        </div>
    )
}
export default AddEmployee