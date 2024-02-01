import './App.css';
import { Provider } from 'react-redux';
// import RegistrationForm from './RegistrationForm';
import store from './Store/Store';
// import LoginForm from './LoginForm';
import Header from './Header';
import { Outlet } from 'react-router';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        {/* <LoginForm></LoginForm> */} 
        {/* <RegistrationForm></RegistrationForm> */}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
