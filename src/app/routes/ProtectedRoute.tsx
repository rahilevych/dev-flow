import { useSessionStore } from '@/entities/session/model/SessionStore';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const isAuth = useSessionStore((state) => state.isAuth);

  return isAuth ? <Outlet /> : <Navigate to='/auth' replace />;
};
