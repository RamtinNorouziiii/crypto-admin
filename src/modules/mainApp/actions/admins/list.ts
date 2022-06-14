import { AdminsListActionTypes } from "../../actiontypes";
import {
  IAdminsListFailedAction,
  IAdminsListFailedPayload,
  IAdminsListSendAction,
  IAdminsListSuccessAction,
  IAdminsListSuccessPayload,
} from "../../types/interface/admins/list";
import { IUrlSend } from "../../types/interface/users/list";

export const SendAdminsListInfoAction = ({
  url,
}: IUrlSend): IAdminsListSendAction => ({
  type: AdminsListActionTypes.SEND_ADMINS_LIST_REQ,
  payload: { url },
});
export const AdminsListSuccessAction = ({
  admins,
}: IAdminsListSuccessPayload): IAdminsListSuccessAction => ({
  type: AdminsListActionTypes.ADMINS_LIST_SUCCESS,
  payload: { admins },
});
export const AdminsListFailedAction = ({
  err,
}: IAdminsListFailedPayload): IAdminsListFailedAction => ({
  type: AdminsListActionTypes.ADMINS_LIST_FAILED,
  payload: { err },
});
