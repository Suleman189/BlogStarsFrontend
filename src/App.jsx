import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import Navbar from './Components/Navbar';
import Login from './Components/Auth/Login';
import PrivateRoute from './Components/Auth/PrivateRoute';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/Layouts/MainLayout';
import AuthLayout from './Components/Layouts/AuthLayout';
import { AuthProvider } from './Context/AuthContext';
import Signup from './Components/Auth/Signup';
import Home from './Components/Home';

const router = createBrowserRouter([
  {
    element: <AuthLayout/>,
    children: [
      { path: '/login', element: <Login />},
      { path: '/Signup', element: <Signup />}
    ]
  },
  {
    element: <MainLayout/>,
    children: [
      { path: '/home', element: <PrivateRoute><Home/></PrivateRoute>}
    ]
  }
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
