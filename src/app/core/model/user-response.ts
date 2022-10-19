export interface User {
  id: number;
  username: string;
  password: string;
  newPassword: string;
  name: string;
  email: string;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
}
