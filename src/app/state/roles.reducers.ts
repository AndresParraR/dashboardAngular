import { Action, createReducer, on } from "@ngrx/store";
import { setRoles } from "./roles.actions";
import { initialState, State } from "./roles.state";

const _rolesReducer = createReducer(
  initialState,
  on(setRoles, (state, {roles}) => {
    return {
      ...state,
      roles: [...roles]
    }
  }),
);

export function rolesReducer(state: State | undefined, action: Action){
  return _rolesReducer(state, action);
}