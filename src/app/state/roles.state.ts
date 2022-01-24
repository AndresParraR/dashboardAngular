export interface Role{
  id: number;
  name: string;
}

export interface State {
  roles: Array<Role>;
}

export const initialState = {
  roles: Array<Role>()
}