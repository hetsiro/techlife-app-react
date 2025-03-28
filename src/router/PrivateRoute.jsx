import { Navigate } from 'react-router';

export const PrivateRoute = ({ children }) => {

  const activeUser = JSON.parse(localStorage.getItem('activeUser'));

  return (activeUser?.isLogged)
    ? children
    : <Navigate to={"/auth/login"} />
}
