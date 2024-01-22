import logo from './logo.svg';
import './App.css';
import { Link,Outlet } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div>
    <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
