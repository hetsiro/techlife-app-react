import { Navigate } from 'react-router';

export const PublicRoute = ({ children }) => {

  const activeUser = JSON.parse(localStorage.getItem('activeUser'));

  return (activeUser?.isLogged)
    ? <Navigate to={"/home"} />
    : children
}
