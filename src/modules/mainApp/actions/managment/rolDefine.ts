import { rolDefineActionTypes } from "../../actiontypes";
import {
  IRolDefineFailedAction,
  IRolDefineSendAction,
  IRolDefineSuccessAction,
  IRolInfoSend,
} from "../../types/interface/managment/rolDefine";

export const SendLoginInfoAction = ({
  info,
}: IRolInfoSend): IRolDefineSendAction => ({
  type: rolDefineActionTypes.SEND_ROL_DEFINE_REQ,
  payload: { info },
});
export const LoginSuccessAction = (): IRolDefineSuccessAction => ({
  type: rolDefineActionTypes.ROL_DEFINE_SUCCESS,
});
export const LoginFailedAction = (): IRolDefineFailedAction => ({
  type: rolDefineActionTypes.ROL_DEFINE_FAILED,
});
