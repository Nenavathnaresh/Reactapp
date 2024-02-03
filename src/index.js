import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Employees from './features/employees/employees';
import AddEmployee from './features/employees/AddEmployee';
import UpdateEmp from './features/employees/UpdateEmployee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/employees",
        element: <Employees></Employees>,
        // children:[
        //   {
        //     path: "employees/update",
        //     element: <UpdateEmp></UpdateEmp>,
        //   },
        // ]
      },
      {
        path: "/addemployee",
        element: <AddEmployee></AddEmployee>,
      },
      {
        path: "/update/:cid",
        element: <UpdateEmp></UpdateEmp>,
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
