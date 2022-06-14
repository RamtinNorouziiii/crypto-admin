import { UsersListActionTypes } from "../../../actiontypes";
import { IUsersList } from "../../models/users/list";

export interface IUsersListSuccessPayload {
  users: IUsersList ;
}
export interface IUsersListFailedPayload {
  err: string;
}
export interface IUsersListSendAction {
  type: UsersListActionTypes.SEND_USERS_LIST_REQ,
  payload : {}
}

export interface IUsersListSuccessAction {
  type: UsersListActionTypes.USERS_LIST_SUCCESS;
  payload: IUsersListSuccessPayload;
}
export interface IUsersListFailedAction {
  type: UsersListActionTypes.USERS_LIST_FAILED;
  payload: IUsersListFailedPayload;
}

export interface IUsersListSagaAction {
  type: UsersListActionTypes.SEND_USERS_LIST_REQ;
  payload: {
   url : string
  };
}
export interface IUrlSend{
  url : string
}
export type AllUsersListsTypes =
  | IUsersListSendAction
  | IUsersListSuccessAction
  | IUsersListFailedAction;
