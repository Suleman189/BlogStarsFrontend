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

const router = createBrowserRouter([
  {
    element: <AuthLayout/>,
    children: [
      { path: '/login', element: <Login />},
      { path: '/Signup', element: <Login />}
    ]
  },
  {
    element: <MainLayout/>,
    children: [
      { path: '/home', element: <PrivateRoute><h2>Home</h2></PrivateRoute>}
    ]
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
