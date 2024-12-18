import Login from './Components/Auth/Login';
import PrivateRoute from './Components/Auth/PrivateRoute';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/Layouts/MainLayout';
import AuthLayout from './Components/Layouts/AuthLayout';
import { AuthProvider } from './Context/AuthContext';
import Signup from './Components/Auth/Signup';
import Home from './Components/Home';
import About from './Components/About';
import StarForm from './Components/StarForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    element: <AuthLayout/>,
    children: [
      { path: '/login', element: <Login />},
      { path: '/Signup', element: <Signup />},
      { path: '/', element: <Navigate to="/login" replace /> }
    ]
  },
  {
    element: <MainLayout/>,
    children: [
      { path: '/home', element: <PrivateRoute><Home/></PrivateRoute>},
      { path: '/Stars/new', element: <PrivateRoute><StarForm/></PrivateRoute>},
      { path: '/Stars/:id', element: <PrivateRoute><StarForm/></PrivateRoute>},
      { path: '/Ranked-Stars', element: <PrivateRoute><Home/></PrivateRoute>},
      { path: '/About', element: <PrivateRoute><About/></PrivateRoute>}
    ]
  }
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
