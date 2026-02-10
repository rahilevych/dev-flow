import { create } from 'zustand';
interface SessionState {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}
export const useSessionStore = create<SessionState>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth) => set({ isAuth }),
}));
