import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Errorpage from './pages/Errorpage';
import { Loginpage } from './pages/Loginpage';
import { Mainpage } from './pages/Mainpage';
import { Newuserpage } from './pages/Newuserpage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Rosterfindpage } from './pages/Rosterfindpage';
import Rostershowpage from './pages/Rostershowpage';
import { Userpage } from './pages/Userpage';
import { Userspage } from './pages/Userspage';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path:"/login",
    element:<Loginpage/>,
    errorElement:<Errorpage/>
  },{
    path:"/main",
    element:<Mainpage/>,
    errorElement:<Errorpage/>,
    children:[
      {
        path:"/main/roster",
        element:<Rosterfindpage/>,
        errorElement:<Errorpage/>,
        children:[{
          path:"/main/roster/:id",
          element:<Rostershowpage/>,
          errorElement:<Errorpage/>
        }]
      },{
        path:"/main/users",
        element:<Userspage/>,
        errorElement:<Errorpage/>
      },{
        path:"/main/users/new",
        element:<Newuserpage/>,
        errorElement:<Errorpage/>
      },{
        path:"/main/users/:id",
        element:<Userpage/>,
        errorElement:<Errorpage/>
      }
    ]
  },{
    path:"*",
    element:<Notfoundpage/>
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
