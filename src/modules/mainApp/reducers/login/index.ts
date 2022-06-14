import { LoginActionTypes } from "../../actiontypes";
import { AllLoginsTypes } from "../../types/interface/login";

const initialState = {
  error: null,
  token: null,
  loading: false,
};
export const LoginReducer = (state = initialState, action: AllLoginsTypes) => {
  switch (action.type) {
    case LoginActionTypes.SEND_LOGIN_REQ:
      // @ts-ignore
      let snpinnerElement: HTMLDivElement | null =
        document.getElementById("startLoading");
      snpinnerElement &&
        snpinnerElement.style &&
        (snpinnerElement.style.display = "block");
      return { loading: true, token: null, error: null };

    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        token: action.payload.token,
        error: null,
      };
    case LoginActionTypes.LOGIN_FAILED:
      return {
        loading: false,
        token: null,
        error: action.payload.err,
      };
    default:
      return state;
  }
};
