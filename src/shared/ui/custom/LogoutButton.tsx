import { useSessionStore } from '@/entities/session/model/SessionStore';
import { useLogout } from '@/features/auth/model/useLogout';
import { SidebarMenuButton } from '../sidebar';

export const LogoutButton = () => {
  const isAuth = useSessionStore((state) => state.isAuth);
  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate();
    localStorage.removeItem('accessToken');
  };

  if (!isAuth) return null;

  return <SidebarMenuButton onClick={handleLogout}>Logout</SidebarMenuButton>;
};
