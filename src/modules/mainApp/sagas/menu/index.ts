import { call, put, takeLatest } from "redux-saga/effects";
import { MenuFailedAction, MenuSuccessAction } from "../../actions/menu";
import { MenuActionTypes } from "../../actiontypes";
import { MenuApi } from "../../api/menu";
import { ISagaAction } from "../../types/interface/menu";

function* MenuFnc(action: ISagaAction): any {
  try {
    const res = yield call(MenuApi);
   
    yield put(MenuSuccessAction({ menu: res.data.det }));
  } catch (err) {
    yield put(MenuFailedAction({ err: (err as Error).message }));
  }
}

export function* MenuWatcher() {
  yield takeLatest(MenuActionTypes.SEND_MENU_REQ, MenuFnc);
}
