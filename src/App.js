import logo from './logo.svg';
import './App.css';
import Table from './table';
import React from 'react';

function App() {
  let [people, setPeople] = React.useState([])
  let [fn, SetFn] = React.useState('')
  let [ln, SetLn] = React.useState('')
  let [age, SetAge] = React.useState('')
  let [city, SetCity] = React.useState('')

  function save() {
    let person = {
      'firstname': fn,
      'lastname': ln,
      'age': age,
      'city': city
    }
    setPeople([...people, person])
  }

  

  return (
    <div className="App">
      <div>
        <div>
        Firstname:<input type="text" onKeyUp={(e) => { SetFn(e.target.value) }} />
        </div>
        <div>
        lastname:<input type="text" onKeyUp={(e) => { SetLn(e.target.value) }} />
        </div>
       <div>
       Age:<input type="text" onKeyUp={(e) => { SetAge(e.target.value) }} />
       </div>
       <div>
       City:<input type="text" onKeyUp={(e) => { SetCity(e.target.value) }} />
       </div>
        <button onClick={save}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <Table people={people}></Table>
        </tbody>
      </table>
    </div>
  );
}

export default App;
