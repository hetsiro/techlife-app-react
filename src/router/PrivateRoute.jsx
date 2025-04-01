import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRoute = ({ children }) => {

  const { activeUser } = useContext( AuthContext )

  return (activeUser?.isLogged)
    ? children
    : <Navigate to={"/auth/login"} />
}
