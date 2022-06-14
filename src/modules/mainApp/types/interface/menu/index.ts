import { MenuActionTypes } from "../../../actiontypes";

export interface IMenuSuccessPayload {
  menu: {};
}
export interface IMenuFailedPayload {
  err: string;
}
export interface IMenuSendAction {
  type: MenuActionTypes.SEND_MENU_REQ;
  
}
export interface IMenuSuccessAction {
  type: MenuActionTypes.MENU_SUCCESS;
  payload: IMenuSuccessPayload;
}
export interface IMenuFailedAction {
  type: MenuActionTypes.MENU_FAILED;
  payload: IMenuFailedPayload;
}

export interface ISagaAction{
  type : MenuActionTypes.SEND_MENU_REQ,
  payload : {
   
  }
}

export type AllMenusTypes =
  | IMenuSendAction
  | IMenuSuccessAction
  | IMenuFailedAction;
