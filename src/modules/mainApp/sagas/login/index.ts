import { call, put, takeLatest } from "redux-saga/effects";
import { LoginFailedAction, LoginSuccessAction } from "../../actions/login";
import { LoginActionTypes } from "../../actiontypes";
import { LoginApi } from "../../api/login";
import { ISagaAction } from "../../types/interface/login";

function* LoginFnc(action: ISagaAction): any {
  try {
    const res = yield call(LoginApi, {
      username: action.payload.username,
      password: action.payload.password,
    });
   
    yield put(LoginSuccessAction({ token: res.data.det }));
  } catch (err) {
    yield put(LoginFailedAction({ err: (err as Error).message }));
  }
}

export function* LoginWatcher() {
  yield takeLatest(LoginActionTypes.SEND_LOGIN_REQ, LoginFnc);
}
