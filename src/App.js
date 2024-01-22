import logo from './logo.svg';
import './App.css';
import { Link,Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
     <Link to='/home'>Home</Link> &nbsp;&nbsp;
     <Link to='/contact'>Contact</Link> &nbsp;&nbsp;
     <Link to='/about'>About</Link> &nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
