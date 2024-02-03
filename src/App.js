import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <h1>App</h1>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Edupoly</a>

            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                 <Link to='/employees'>Employees</Link>
                </li> &nbsp; &nbsp;
                <li class="nav-item">
                 <Link to='/addemployee'>AddEmployee</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
