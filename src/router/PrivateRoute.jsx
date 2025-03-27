import { Navigate } from 'react-router';
import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRoute = ({ children }) => {

  const activeUser = JSON.parse(localStorage.getItem('activeUser'));

  return (activeUser?.isLogged)
    ? children
    : <Navigate to={"/auth/login"} />
}
