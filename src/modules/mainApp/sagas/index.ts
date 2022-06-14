import { all } from "redux-saga/effects";
import { AdminsListWatcher } from "./admins/list";
import { LoginWatcher } from "./login";
import { MenuWatcher } from "./menu";
import { UsersListWatcher } from "./users/list";

function * allSagas(){
    yield all([LoginWatcher(),MenuWatcher(),UsersListWatcher(),AdminsListWatcher()])
}
export function * RootSaga(){
    yield all([allSagas()])
}