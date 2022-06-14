import { MenuActionTypes } from "../../actiontypes";
import {
  IMenuFailedAction,
  IMenuFailedPayload,
  IMenuSendAction,
  IMenuSuccessAction,
  IMenuSuccessPayload,
} from "../../types/interface/menu";

export const SendMenuInfoAction = (): IMenuSendAction => ({
  type: MenuActionTypes.SEND_MENU_REQ,
});
export const MenuSuccessAction = ({
  menu,
}: IMenuSuccessPayload): IMenuSuccessAction => ({
  type: MenuActionTypes.MENU_SUCCESS,
  payload: { menu },
});
export const MenuFailedAction = ({
  err,
}: IMenuFailedPayload): IMenuFailedAction => ({
  type: MenuActionTypes.MENU_FAILED,
  payload: { err },
});
