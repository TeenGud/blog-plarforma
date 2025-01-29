import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const token = localStorage.getItem('token');
  if (token) {
    return children;
  } else {
    return <Navigate to="/sign-in" />;
  }
};
