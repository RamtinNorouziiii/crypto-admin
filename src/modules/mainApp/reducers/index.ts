import { combineReducers } from "redux";
import { AdminsListReducer } from "./admins/list";
import { LoginReducer } from "./login";
import { MenuReducer } from "./menu";
import { UsersListReducer } from "./users/list";

export const AllReducers = combineReducers({
    token : LoginReducer,
    menu : MenuReducer,
    users : UsersListReducer,
    admins : AdminsListReducer
})
export type RootSelector =ReturnType <typeof  AllReducers>