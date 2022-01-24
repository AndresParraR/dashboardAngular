import { createAction, props } from "@ngrx/store";

export const setUsers = createAction('setUsers', props<{users: any}>());
export const addUsers = createAction('addUsers', props<{user: any}>());
export const editUsers = createAction('editUsers', props<{user: any}>());
export const deleteUsers = createAction('deletUsers', props<{userId: number}>());