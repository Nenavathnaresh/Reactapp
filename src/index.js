import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Dashboard from './Dash_board';
import Profile from './Profile';
import EditPro from './EditProfile';
import Products from './Products';
import CartItems from './CartItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/register",
        element: <RegistrationForm></RegistrationForm>,
      },
      {
        path: "/",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: "profile",
            element: <Profile></Profile>,
          },
          {
            path: "editpro",
            element: <EditPro></EditPro>,
          },
          {
            path: "/dashboard",
            element: <Products></Products>,
          },
          {
            path: "cart",
            element: <CartItems></CartItems>,
          },
        ]
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
