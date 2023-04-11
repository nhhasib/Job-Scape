import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Statistics from './components/statistics/Statistics';
import AppliedJobs from './components/applied-jobs/AppliedJobs';
import Blog from './components/blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"appliedJobs",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"blog",
        element:<Blog></Blog>
      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
