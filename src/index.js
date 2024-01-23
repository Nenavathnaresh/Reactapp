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
import Contact from './Contact';
import About from './AboutUs';
import Hardware from './Hardware';
import Software from './Software';
import Country from './Country';
import Countrydet from './Countrydet';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/countries",
        element: <Country></Country>,
        children:[
          {
            path: "countrydet/:cname",
            element: <Countrydet></Countrydet>,
          },
        ]
      },
      {
        path: "/about",
        element: <About></About>,
        children:[
          {
            path: "hardware",
            element: <Hardware></Hardware>,
          },
          {
            path: "software",
            element: <Software></Software>,
          },
        ]
      },
    ]
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
