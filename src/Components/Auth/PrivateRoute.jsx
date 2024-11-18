import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const PrivateRoute =({children})=> {
  const {isAuthenticated} = useAuth()
  console.log('Is Authenticated', isAuthenticated)

  return isAuthenticated ? children : <Navigate to='/login' />
}
export default PrivateRoute
