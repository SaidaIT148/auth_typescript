import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface ProtectedRouteProps {
  allowedRole: 'witness' | 'notary' | 'admin';
  fallbackPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRole, fallbackPath }) => {
  const userRole = useSelector((state: RootState) => state.auth.userRole);
  const fallback = fallbackPath || '/404';

  if (userRole !== allowedRole) {
    return <Navigate to={fallback} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
