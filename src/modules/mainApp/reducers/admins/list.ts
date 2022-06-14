import { AdminsListActionTypes } from "../../actiontypes";
import { AllAdminsListsTypes } from "../../types/interface/admins/list";

const initialState = {
  error: null,
  admins: null,
  loading: false,
};
export const AdminsListReducer = (state = initialState, action: AllAdminsListsTypes) => {
  switch (action.type) {
    case AdminsListActionTypes.SEND_ADMINS_LIST_REQ:
      // @ts-ignore
      let snpinnerElement: HTMLDivElement | null =
        document.getElementById("startLoading");
      snpinnerElement &&
        snpinnerElement.style &&
        (snpinnerElement.style.display = "block");
      return { loading: true, admins: null, error: null };

    case AdminsListActionTypes.ADMINS_LIST_SUCCESS:
      return {
        loading: false,
        admins: action.payload.admins,
        error: null,
      };
    case AdminsListActionTypes.ADMINS_LIST_FAILED:
      return {
        loading: false,
        admins: null,
        error: action.payload.err,
      };
    default:
      return state;
  }
};
