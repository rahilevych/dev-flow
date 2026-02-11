import api from '@/shared/api/axiosInstance';
import type { LoginDto, RegisterDto, SessionResponse } from '../model/types';

export default class SessionService {
  static async login(dto: LoginDto): Promise<SessionResponse> {
    return await api.post('/auth/login', dto);
  }
  static async register(dto: RegisterDto): Promise<SessionResponse> {
    return api.post('/auth/register', dto);
  }
  static async getMe(): Promise<SessionResponse> {
    return api.get('/auth/me');
  }
  static async logout(): Promise<void> {
    return api.post('/auth/logout');
  }
}
