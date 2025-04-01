import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../auth/context/AuthContext';

export const PublicRoute = ({ children }) => {

  const { activeUser } = useContext( AuthContext )

  return (activeUser?.isLogged)
    ? <Navigate to={"/home"} />
    : children
}
