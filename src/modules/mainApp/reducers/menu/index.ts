import { MenuActionTypes } from "../../actiontypes";
import { AllMenusTypes } from "../../types/interface/menu";

const initialState = {
  error: null,
  menu: null,
  loading: false,
};
export const MenuReducer = (state = initialState, action: AllMenusTypes) => {
  switch (action.type) {
    case MenuActionTypes.SEND_MENU_REQ:
      return { loading: true, menu: null, error: null };

    case MenuActionTypes.MENU_SUCCESS:
      let ShowList: any = {};
      let ApiList: any = {};
      const newState: any = {
        ...state,
        loading: false,
        menu: { ShowList, ApiList },
      };
      Object.entries(action.payload.menu).map(([menutitle, child]: any) => {
        ShowList[menutitle] = {};
        Object.entries(child && child.child).map(
          ([subtitle, children]: any) => {
            ShowList[menutitle] = {
              ...ShowList[menutitle],
              [subtitle]: children.url,
            };
            ApiList[children.url] = {};
            Object.entries(children.actions).map(
              ([apiIdentifier, apiEndpoint]: any) => {
                ApiList[children.url] = {
                  ...ApiList[children.url],
                  [apiIdentifier]: apiEndpoint.cdnAddr + apiEndpoint.endpoint,
                };
              }
            );
          }
        );
      });

      return newState;

    case MenuActionTypes.MENU_FAILED:
      return {
        loading: false,
        menu: null,
        error: action.payload.err,
      };
    default:
      return state;
  }
};
