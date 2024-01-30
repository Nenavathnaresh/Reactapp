import logo from './logo.svg';
import './App.css';
import Products from './Product';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './Cart';
import Header from './Header';
import { Outlet } from 'react-router';




function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        {/* <Products></Products> */}
        {/* <Cart></Cart> */}
      </div>
      <div>
       <Outlet></Outlet>
      </div>

    </Provider>
  );
}

export default App;
