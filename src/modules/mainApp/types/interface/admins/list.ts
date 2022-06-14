import { AdminsListActionTypes } from "../../../actiontypes";
import { IAdminsList } from "../../models/admins/list";

export interface IAdminsListSuccessPayload {
  admins: IAdminsList ;
}
export interface IAdminsListFailedPayload {
  err: string;
}
export interface IAdminsListSendAction {
  type: AdminsListActionTypes.SEND_ADMINS_LIST_REQ,
  payload : {}
}

export interface IAdminsListSuccessAction {
  type: AdminsListActionTypes.ADMINS_LIST_SUCCESS;
  payload: IAdminsListSuccessPayload;
}
export interface IAdminsListFailedAction {
  type: AdminsListActionTypes.ADMINS_LIST_FAILED;
  payload: IAdminsListFailedPayload;
}

export interface IAdminsListSagaAction {
  type: AdminsListActionTypes.SEND_ADMINS_LIST_REQ;
  payload: {
   url : string
  };
}
export interface IUrlSend{
  url : string
}
export type AllAdminsListsTypes =
  | IAdminsListSendAction
  | IAdminsListSuccessAction
  | IAdminsListFailedAction;
