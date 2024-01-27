import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import store from './Store/Store';
import LoginForm from './LoginForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <LoginForm></LoginForm>
        <RegistrationForm></RegistrationForm>
      </div>
    </Provider>
  );
}

export default App;
