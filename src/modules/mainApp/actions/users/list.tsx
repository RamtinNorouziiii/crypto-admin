import { UsersListActionTypes } from "../../actiontypes";
import {
  IUrlSend,
  IUsersListFailedAction,
  IUsersListFailedPayload,
  IUsersListSendAction,
  IUsersListSuccessAction,
  IUsersListSuccessPayload,
} from "../../types/interface/users/list";

export const SendUsersListInfoAction = ({url}:IUrlSend): IUsersListSendAction => ({
  type: UsersListActionTypes.SEND_USERS_LIST_REQ,
  payload : {url}
});
export const UsersListSuccessAction = ({
  users,
}: IUsersListSuccessPayload): IUsersListSuccessAction => ({
  type: UsersListActionTypes.USERS_LIST_SUCCESS,
  payload: { users },
});
export const UsersListFailedAction = ({
  err,
}: IUsersListFailedPayload): IUsersListFailedAction => ({
  type: UsersListActionTypes.USERS_LIST_FAILED,
  payload: { err },
});
