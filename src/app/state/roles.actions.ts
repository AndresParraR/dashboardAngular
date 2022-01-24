import { createAction, props } from "@ngrx/store";

export const setRoles = createAction('setRoles', props<{roles: any}>());