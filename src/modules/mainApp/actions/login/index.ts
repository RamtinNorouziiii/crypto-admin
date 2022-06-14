import { LoginActionTypes } from "../../actiontypes";
import {
  ILoginFailedAction,
  ILoginFailedPayload,
  ILoginSendAction,
  ILoginSuccessAction,
  ILoginSuccessPayload,
  ISendLogin,
} from "../../types/interface/login";

export const SendLoginInfoAction = ({
  username,
  password,
}: ISendLogin): ILoginSendAction => ({
  type: LoginActionTypes.SEND_LOGIN_REQ,
  payload: { username, password },
});
export const LoginSuccessAction = ({
  token,
}: ILoginSuccessPayload): ILoginSuccessAction => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
  payload: { token },
});
export const LoginFailedAction = ({
  err,
}: ILoginFailedPayload): ILoginFailedAction => ({
  type: LoginActionTypes.LOGIN_FAILED,
  payload: { err },
});
