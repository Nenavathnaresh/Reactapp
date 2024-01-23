import logo from './logo.svg';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {

  const Navigate = useNavigate()

  const home = ()=>{
    Navigate('/home')
  }
  const contact = ()=>{
    Navigate('/contact')
  }
  const about = ()=>{
    Navigate('/about')
  }
  const countries = ()=>{
    Navigate('/countries')
  }

  return (
    <div className='bg-warning'>
      <span onClick={home}>Home</span> &nbsp; &nbsp;
      <span onClick={contact}>Contact</span> &nbsp; &nbsp;
      <span onClick={about}>AboutUs</span> &nbsp; &nbsp;
      <span onClick={countries}>Countries</span> &nbsp; &nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
