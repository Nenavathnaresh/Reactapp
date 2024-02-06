import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      <h1>App</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/form">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Link</a>
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