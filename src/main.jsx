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
import DetailsJob from './components/detailsJob/DetailsJob';
import Error from './components/errorpage/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("/public/fakeData/circularData.json")
      },
      {
        path:'detailsJob/:detailsjobId',
        element:<DetailsJob></DetailsJob>,
        loader:async ({params})=>{
          const data=await fetch("/public/fakeData/circularData.json");
          const datas=await data.json();
          return datas.filter(item=>item.id==params.detailsjobId)
    
        }
      },
      {
        path:"statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"appliedJobs",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch("/public/fakeData/circularData.json")
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path:"*",
        element:<Error></Error>
      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
