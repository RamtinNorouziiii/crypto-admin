import { UsersListActionTypes } from "../../actiontypes";
import { AllUsersListsTypes } from "../../types/interface/users/list";

const initialState = {
  error: null,
  users: null,
  loading: false,
};
export const UsersListReducer = (state = initialState, action: AllUsersListsTypes) => {
  switch (action.type) {
    case UsersListActionTypes.SEND_USERS_LIST_REQ:
      // @ts-ignore
      let snpinnerElement: HTMLDivElement | null =
        document.getElementById("startLoading");
      snpinnerElement &&
        snpinnerElement.style &&
        (snpinnerElement.style.display = "block");
      return { loading: true, users: null, error: null };

    case UsersListActionTypes.USERS_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        error: null,
      };
    case UsersListActionTypes.USERS_LIST_FAILED:
      return {
        loading: false,
        users: null,
        error: action.payload.err,
      };
    default:
      return state;
  }
};
