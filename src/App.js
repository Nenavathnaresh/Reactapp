import logo from './logo.svg';
import './App.css';
import Countries from './My_folder/Countries';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
   <div>
     <div>
      <h1>Well come to Countries</h1>
      <Link to='/countries'>Countries</Link>
      <Outlet></Outlet>
    </div>
    <div>
    
    </div>
   </div>
    
  );
}

export default App;
