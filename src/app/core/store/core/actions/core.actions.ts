import { Action } from '@ngrx/store';

import { User } from 'src/app/core/models/user.model';

// Fetch Users
export const FETCH_USERS = '[Core] Fetch Users';
export const FETCH_USERS_FAIL = '[Core] Fetch Users Fail';
export const FETCH_USERS_SUCCESS = '[Core] Fetch Users Success';

export class FetchUsers implements Action {
  readonly type = FETCH_USERS;
}

export class FetchUsersFail implements Action {
  readonly type = FETCH_USERS_FAIL;
  constructor(public payload: any) {}
}

export class FetchUsersSuccess implements Action {
  readonly type = FETCH_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

// Fetch User
export const FETCH_USER = '[Core] Fetch User';
export const FETCH_USER_FAIL = '[Core] Fetch User Fail';
export const FETCH_USER_SUCCESS = '[Core] Fetch User Success';

export class FetchUser implements Action {
  readonly type = FETCH_USER;
  constructor(public payload: number) {}
}

export class FetchUserFail implements Action {
  readonly type = FETCH_USER_FAIL;
  constructor(public payload: any) {}
}

export class FetchUserSuccess implements Action {
  readonly type = FETCH_USER_SUCCESS;
  constructor(public payload: User) {}
}

// Login User
export const LOGIN_USER = '[Core] Login User';
export const LOGIN_USER_FAIL = '[Core] Login User Fail';
export const LOGIN_USER_SUCCESS = '[Core] Login User Success';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: number) {}
}

export class LoginUserFail implements Action {
  readonly type = LOGIN_USER_FAIL;
  constructor(public payload: any) {}
}

export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;
  constructor(public payload: User) {}
}

// Logout User
export const LOGOUT_USER = '[Core] Logout User';
export const LOGOUT_USER_FAIL = '[Core] Logout User Fail';
export const LOGOUT_USER_SUCCESS = '[Core] Logout User Success';

export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;
}

export class LogoutUserFail implements Action {
  readonly type = LOGOUT_USER_FAIL;
  constructor(public payload: any) {}
}
export class LogoutUserSuccess implements Action {
  readonly type = LOGOUT_USER_SUCCESS;
}

// All actions
export type CoreActions =
  | FetchUsers
  | FetchUsersFail
  | FetchUsersSuccess
  | FetchUser
  | FetchUserFail
  | FetchUserSuccess
  | LoginUser
  | LoginUserFail
  | LoginUserSuccess
  | LogoutUser
  | LogoutUserFail
  | LogoutUserSuccess;
