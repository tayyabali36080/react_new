import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Newspage from './News';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blogdetails from './newsdetail';
import Blogdetail from './newsdetail';
let allroutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'News',
      element:<Newspage/>
    },{
      path:'more/:id',
      element:<Blogdetail/>
    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={allroutes}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
