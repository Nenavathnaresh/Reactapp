import React from "react";

function Tbody({person}){
    return(
        <tr>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
            <td>{person.age}</td>
            <td>{person.city}</td>
            <td>{person.gender}</td>
            <td>{person.courses.toString()}</td>
        </tr>
    )
}

export default Tbody