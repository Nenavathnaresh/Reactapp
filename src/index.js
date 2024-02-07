import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegistrationForm from './features/registation/RegistrationForm';
import Login from './features/registation/LoginForm'
import Products from './features/products/products';
import Dashboard from './features/dashboard/dashboard';
import Profile from './features/registation/Profile';
import Edit from './features/registation/Edit';
import CartItems from './features/products/CartItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/form",
        element: <RegistrationForm></RegistrationForm>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard",
            element: <Products></Products> ,
          },
          {
            path: "/dashboard/edit",
            element: <Edit></Edit>,
          },
          {
            path: "/dashboard/cartitems",
            element: <CartItems></CartItems>,
          },
        ]
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/",
        element: <Products></Products> ,
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();