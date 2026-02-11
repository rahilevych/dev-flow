export interface User {
  id: string;
  email: string;
  name: string;
}

export interface SessionResponse {
  accessToken: string;
  user: User;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto extends LoginDto {
  name: string;
  confirmPassword: string;
}
