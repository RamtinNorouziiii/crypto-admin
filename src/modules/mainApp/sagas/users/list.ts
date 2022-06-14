import { call, put, takeLatest } from "redux-saga/effects";
import { UsersListFailedAction, UsersListSuccessAction } from "../../actions/users/list";
import { UsersListActionTypes } from "../../actiontypes";
import { UsersListApi } from "../../api/users/list";
import { IUsersListSagaAction } from "../../types/interface/users/list";

function* UsersListFnc(action: IUsersListSagaAction): any {
  try {
    const res = yield call(UsersListApi,{
        url : action.payload.url
    });
    yield put(UsersListSuccessAction({ users:res.data.det }));
  } catch (err) {
    yield put(UsersListFailedAction({ err: (err as Error).message }));
  }
}

export function* UsersListWatcher() {
  yield takeLatest(UsersListActionTypes.SEND_USERS_LIST_REQ, UsersListFnc);
}
