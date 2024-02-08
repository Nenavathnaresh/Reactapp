import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addloginDet } from './features/registation/loginSlice';
import { useNavigate } from 'react-router-dom';

function App() {

  const loginDet = useSelector((store) => { return store.loginDetails.loginDet })
  console.log(loginDet);
  const dispatch = useDispatch()

  const nav = useNavigate()
  return (
    <div className=' '>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary sticky-top top-0 align-items-center">


        <div class="collapse navbar-collapse w-100">

          <ul class="navbar-nav me-auto  align-items-center">
           {!loginDet.length > 0 && <li class="nav-item active ms-2">
              <Link className='text-decoration-none text-black' to='/'>Home</Link>
            </li>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           {loginDet.length > 0 && <li class="nav-item">
              <Link className='text-decoration-none text-black' to='/dashboard'>Home</Link>
            </li>}  &nbsp;&nbsp;&nbsp;
           
            <li class="nav-item">
              <a className='text-decoration-none text-black' href='#footer'>Contact</a>
            </li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <li class="nav-item">
              <Link className='text-decoration-none text-black' to='#'>AboutUs</Link>
            </li> &nbsp;&nbsp;&nbsp;
           
          </ul>
          <div>
              <input className='form-control' placeholder='Search...' type='text'></input>
            </div>
          <ul class="navbar-nav  align-items-center">
            {!loginDet.length > 0 && <li class="nav-item ms-auto">
              <Link className='text-decoration-none text-black' to='/login'>Login</Link>
            </li>}&nbsp;&nbsp;&nbsp;
            {loginDet.length > 0 && <li className='ms-auto align-items-end' onClick={() => { dispatch(addloginDet([])) }}>
              <Link className='text-decoration-none text-black' to='/'>Logout</Link>
            </li>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {loginDet.length > 0 && <li class="nav-item">
              <Link className='text-decoration-none text-black' to='/dashboard/profile'>MyProfile</Link>
            </li>} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className='me-2'>
              <h3 onClick={() => {loginDet.length > 0 ? nav('/dashboard/cartitems') : nav('/login')}} className='position-relative me-1'><i class="bi bi-cart4"></i><span className='position-absolute rounded-pill top-0 end-0 badge bg-danger'>{loginDet[0]?.cart?.length}</span></h3>
            </li>

          </ul>

        </div>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>

    </div>

  );
}

export default App;