import logo from './logo.svg';
import './App.css';
import Country from './features/countries/Country';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="border border-5 border-primary p-3 m-3">

      <h1>App</h1>
      
      <div><Link to='/country'>Countries</Link></div>

       <Outlet></Outlet>
       <div>
       </div>
    </div>
  );
}

export default App;
