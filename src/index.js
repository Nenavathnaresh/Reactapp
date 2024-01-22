import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import ContactUs from './ContactUs';
import About from './About';
import Products from './Product';
import Software from './Software';
import Hardware from './Hardware';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/contact',
    element: <ContactUs></ContactUs>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/products',
    element: <Products></Products>,
    children: [
      {
        path: 'software',
        element: <Software></Software>
      },
      {
        path: 'hardware',
        element: <Hardware></Hardware>
      }
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
