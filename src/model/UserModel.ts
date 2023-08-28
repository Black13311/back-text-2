export interface UserModel {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  status?: string;
  remember?: boolean;
}