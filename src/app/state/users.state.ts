export interface User{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  active: boolean;
}

export interface State {
  users: Array<User>;
}

export const initialState = {
  users: new Array<User>()
}