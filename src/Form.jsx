import React from "react";
import Tbody from "./Tbody";
import './App.css';

function Form() {

    let [people, setPeople] = React.useState([])
    // let [fn, SetFn] = React.useState('')
    // let [ln, SetLn] = React.useState('')
    // let [age, SetAge] = React.useState('')
    // let [city, SetCity] = React.useState('')
    // let [gender, SetGender] = React.useState('')
    // let [courses, SetCourses] = React.useState([])
    // var temp;
    Reffn = React.useRef('') 
    Refln = React.useRef('') 
    Refage = React.useRef('') 
    Refcity = React.useRef('') 
    Refgender = React.useRef('') 
    Refcourse = React.useRef([]) 

    const save = () => {
        let personObj = {
            firstname: fn,
            lastname: ln,
            age: age,
            city: city,
            gender: gender,
            courses: courses
        }

        setPeople([...people, personObj])
    }

    const courseFn = (e) => {
        if (e.target.checked) {
            SetCourses([...courses, e.target.value])
        }
        else {
            var temp = courses.filter((course) => {
                return (
                    course !== e.target.value
                )
            })
            SetCourses([...temp])
        }
    }

    console.log(Reffn);

    return (
        <div className="border bg-light">
            <h1 className="text-center head border p-2">Edupoly</h1>
            <div className="d-flex flex-wrap container ">

                <div className="border p-3 form-group w-50">

                    <div>
                        <label htmlFor="fn">FirstName:</label>
                        <input className='form-control' ref = {reffn} type="text" id="fn" />
                    </div>
                    <div>
                        <label htmlFor="ln">LastName:</label>
                        <input className='form-control' ref = {refln} type="text" id="ln" />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input className='form-control' ref={Refage} type="text" id="age" />
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input className='form-control' ref={Refcity} type="text" id="city" />
                    </div>
                    <div>
                        <p>Gender:</p>
                        <input className='form-check-input' type="radio" name="gender" value='male' onChange={(e) => { SetGender(e.target.value) }} />
                        <label className='form-check-label' htmlFor="">Male</label>
                        <input className='form-check-input' type="radio" name="gender" value='female' onChange={(e) => { SetGender(e.target.value) }} />
                        <label className='form-check-label' htmlFor="">Female</label>
                    </div>
                    <div>
                        <p>Courses:</p>
                        <input type="checkbox" value='html' name="" id="" onChange={(e) => { courseFn(e) }} />
                        <label htmlFor="">HTML</label>
                        <input type="checkbox" value='css' name="" id="" onChange={(e) => { courseFn(e) }} />
                        <label htmlFor="">CSS</label>
                        <input type="checkbox" value='javascript' name="" id="" onChange={(e) => { courseFn(e) }} />
                        <label htmlFor="">JavaScript</label>
                        <input type="checkbox" value='python' name="" id="" onChange={(e) => { courseFn(e) }} />
                        <label htmlFor="">Python</label>
                        <input type="checkbox" value='react.js' name="" id="" onChange={(e) => { courseFn(e) }} />
                        <label htmlFor="">React.JS</label>
                    </div>
                    <button className="btn bg-info w-100 mt-2" onClick={() => { save() }}>Save</button>
                </div>
                <div className="w-50">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Gender</th>
                                <th>Courses</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                people.map((person, index) => {
                                    return (
                                        <Tbody person={person}></Tbody>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Form