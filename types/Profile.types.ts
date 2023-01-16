export interface IUser {
  id: number;
  email: string;
  phone: number;
  first_name: string;
  last_name: string;
  user_image: string;
  session_id: string | null;
  discount: number | null;
}