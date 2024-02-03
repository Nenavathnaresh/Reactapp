import React from "react";
import { useDeleteEmployeeMutation, useGetAllEmployeesQuery } from "../../services/employees";
import { Link, Outlet } from "react-router-dom";

function Employees() {

    const { data, isLoading } = useGetAllEmployeesQuery()

    const [deleteEmp] = useDeleteEmployeeMutation()
    // console.log(data);
    return (

        <div className="border border-5 border-success p-3 bg-light">
            <h1>Employees:</h1>
            {isLoading && (<h1>Please wait...</h1>)}
            {!isLoading && (<div className="d-flex flex-wrap">{
                data.map((emp) => {
                    return (
                        <div className="border p-3 w-25 m-3 text-center shadow rounded ">
                            <div>Firstname: {emp.firstname}</div>
                            <div>Lastname: {emp.lastname}</div>
                            <div>Age: {emp.age}</div>
                            <button className="btn btn-warning me-2"><Link to={`/update/${emp.id}`}>Edit</Link></button>
                            <button className="btn btn-info" onClick={() => { deleteEmp(emp.id) }}>Delete</button>
                        </div>
                    )
                })
            }</div>)}
        </div>


    )
}

export default Employees