export interface UserLoginData {
  _id: string;
  email: string;
  name: string;
  token: string;
}

export interface UsersData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}
