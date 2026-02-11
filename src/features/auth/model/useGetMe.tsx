import SessionService from '@/entities/session/api/SessionService';
import { useSessionStore } from '@/entities/session/model/SessionStore';
import { useQuery } from '@tanstack/react-query';

export const useGetMe = () => {
  const setIsAuth = useSessionStore((state) => state.setIsAuth);
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const user = await SessionService.getMe();
      setIsAuth(true);
      return user;
    },
    retry: false,
    enabled: !!localStorage.getItem('accessToken'),
    staleTime: 1000 * 60 * 5,
  });
};
