import logo from './logo.svg';
import './App.css';
import Products from './Product';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './Cart';




function App() {
  return (
    <Provider store={store}>
      <div>
        <Products></Products>
        <Cart></Cart>
      </div>
    </Provider>
  );
}

export default App;
