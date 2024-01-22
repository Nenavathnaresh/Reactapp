import React, { useEffect } from "react";

function Form(){
    let fnRef = React.useRef('')
    let lnRef = React.useRef('')
    let ageRef = React.useRef('')
    let cityRef = React.useRef('')

    const print = ()=>{
        var student = {
            firstname:fnRef.current.value,
            lastname:lnRef.current.value,
            age:ageRef.current.value,
            city:cityRef.current.value
        }
    }

    useEffect(()=>{
        fnRef.current.focus()
    },[])

    const focusNext = (e)=>{
        if(e.key === 'Enter')
        lnRef.current.focus()   
    }

    const focusAge = (e)=>{
        if(e.key === 'Enter')
        ageRef.current.focus()
       
    }

    const focusCity = (e)=>{
        if(e.key === 'Enter')
        cityRef.current.focus()
    }


    return(
        <div>
            Firstname:<input type="text" ref = {fnRef} onKeyUp={(e)=>{focusNext(e)}} />
            LastName:<input type="text" ref = {lnRef} onKeyUp={(e)=>{focusAge(e)}} name="" id="" />
            Age:<input type="text" ref = {ageRef} onKeyUp={(e)=>{focusCity(e)}} name="" id="" />
            City<input type="text" ref = {cityRef} name="" id="" />
            <button onClick={print}>Save</button>
        </div>
    )
}
export default Form