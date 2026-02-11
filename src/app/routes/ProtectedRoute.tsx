import { useGetMe } from '@/features/auth/model/useGetMe';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { data: user } = useGetMe();
  const token = localStorage.getItem('accessToken');
  return user && token ? <Outlet /> : <Navigate to='/auth' replace />;
};
