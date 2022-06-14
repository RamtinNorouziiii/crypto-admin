import { LoginActionTypes } from "../../../actiontypes";

export interface ISendLogin {
  username: string;
  password: string;
}
export interface ILoginSuccessPayload {
  token: string;
}
export interface ILoginFailedPayload {
  err: string;
}
export interface ILoginSendAction {
  type: LoginActionTypes.SEND_LOGIN_REQ;
  payload: {};
}
export interface ILoginSuccessAction {
  type: LoginActionTypes.LOGIN_SUCCESS;
  payload: ILoginSuccessPayload;
}
export interface ILoginFailedAction {
  type: LoginActionTypes.LOGIN_FAILED;
  payload: ILoginFailedPayload;
}

export interface ISagaAction{
  type : LoginActionTypes.SEND_LOGIN_REQ,
  payload : {
    username : string,
    password : string
  }
}

export type AllLoginsTypes =
  | ILoginSendAction
  | ILoginSuccessAction
  | ILoginFailedAction;
