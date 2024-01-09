import React from "react";
function Table({people}){
   

    return(
       <>
        {
            people.map((person)=>{
                return(
                    <tr>
                        <td>{person.firstname}</td>
                        <td>{person.lastname}</td>
                        <td>{person.age}</td>
                        <td>{person.city}</td>
                    </tr>
                )
            })
        }
       </>
    )
}
export default Table