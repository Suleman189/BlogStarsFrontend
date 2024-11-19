import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const PrivateRoute =({children})=> {
  const {isAuthenticated, isLoading} = useAuth()
  console.log('Is Authenticated', isAuthenticated)
  if (isLoading)
    return null;

  return isAuthenticated ? children : <Navigate to='/login' />
}
export default PrivateRoute
