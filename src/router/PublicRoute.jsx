import { Navigate } from 'react-router';
import { AuthContext } from '../auth/context/AuthContext';

export const PublicRoute = ({ children }) => {

  const activeUser = JSON.parse(localStorage.getItem('activeUser'));

  return (activeUser?.isLogged)
    ? <Navigate to={"/home"} />
    : children
}
