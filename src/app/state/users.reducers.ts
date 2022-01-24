import { Action, createReducer, on } from "@ngrx/store";
import { setUsers, addUsers, editUsers, deleteUsers } from "./users.actions";
import { initialState, State } from "./users.state";

const _usersReducer = createReducer(
  initialState,
  on(setUsers, (state, {users}) => {
    return {
      ...state,
      users
    }
  }),
  on(addUsers, (state, {user}) => {
    return {
      ...state,
      users: [user, ...state.users]
    }
  }),
  on(editUsers, (state, {user}) => {
    console.log(state.users, user)
    const users = state.users.map(function(el) {
      if(el.id == user.id){return user}
      return el
    })
    console.log(users)
    return {
      ...state,
      users
    }
  }),
  on(deleteUsers, (state, {userId}) => {
    console.log(state, userId)
    const users = state.users.filter(x => x.id != userId)
    return {
      ...state,
      users
    }
  }),
);

export function usersReducer(state: State | undefined, action: Action){
  return _usersReducer(state, action);
}