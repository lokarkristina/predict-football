import { Action } from '@ngrx/store';

// User login
export const USER_LOGIN = '[Core] User Login';
export const USER_LOGIN_FAIL = '[Core] User Login Fail';
export const USER_LOGIN_SUCCESS = '[Core] User Login Success';

export class UserLogin implements Action {
  readonly type = USER_LOGIN;
}

export class UserLoginFail implements Action {
  readonly type = USER_LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class UserLoginSuccess implements Action {
  readonly type = USER_LOGIN_SUCCESS;
  constructor(public payload: boolean) {}
}

// All actions
export type UserActions = UserLogin | UserLoginFail | UserLoginSuccess;
