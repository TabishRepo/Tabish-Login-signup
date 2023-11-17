import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signup from './Components/Authentications/Signup';
import Login from './Components/Authentications/Login';
import {AuthProvider} from "./Components/AuthContext/Auth"
import UserProfileData from "./Components/UserProfile/UserProfileData"
import PrivateRoute from './Components/Route/UserPrivaterRoute';
import ForgotPassword from './Components/Authentications/ForgotPassword';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//create a overall router for all the routes 
const router = createBrowserRouter([
 
  {
    path: "/",                         //shows the Login page as a main page due to '/'
    element: <Login />,

  },
  {
    path: "/Signup",                       
    element: <Signup />,

  },
   {
    path: "/Login",                        
    element: <Login />,

  },
  {
    path: "/ForgotPassword",                        
    element: <ForgotPassword />,
  },
  {
    path: "/UserProfileData",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <UserProfileData />,
      },
    ],
  },
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
