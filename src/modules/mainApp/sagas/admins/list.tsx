import { call, put, takeLatest } from "redux-saga/effects";
import { AdminsListFailedAction, AdminsListSuccessAction } from "../../actions/admins/list";
import { AdminsListActionTypes } from "../../actiontypes";
import { AdminsListApi } from "../../api/admins/list";
import { IAdminsListSagaAction } from "../../types/interface/admins/list";

function* AdminsListFnc(action: IAdminsListSagaAction): any {
  try {
    const res = yield call(AdminsListApi,{
        url : action.payload.url
    });
    yield put(AdminsListSuccessAction({ admins:res.data.det }));
  } catch (err) {
    yield put(AdminsListFailedAction({ err: (err as Error).message }));
  }
}

export function* AdminsListWatcher() {
  yield takeLatest(AdminsListActionTypes.SEND_ADMINS_LIST_REQ, AdminsListFnc);
}
