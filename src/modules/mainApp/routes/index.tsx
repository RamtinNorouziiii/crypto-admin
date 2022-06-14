/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../../hooks/privateRoutes";
import { Spinner } from "../../../libs/loading";
import { MenuComp } from "../../../libs/menu";
import { AdminsList } from "../components/admins";
import { AddAdmins } from "../components/admins/add";
import { LoginComp } from "../components/login";
import { MainPage } from "../components/mainpage";
import { RolDefine } from "../components/managment/rolDefine";
import { UsersList } from "../components/users/lists/list";
import { UsersPrivatePage } from "../components/users/private";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MenuComp />
      <Fragment>
        <div
          className="col-12 min-vh-100 position-absolute top-0 left-0 right-0 "
          id="startLoading"
          style={{ display: "none" }}
        >
          {" "}
          <Spinner />
        </div>

        <Routes>
          <Route path="/" element={<LoginComp />} />
          {/* <Route  path='/dashboard' element={<PrivateRoute/>}>
            <Route  path='/dashboard' element={<MainPage/>}/>
          </Route> */}
          <Route path="/dashboard" element={<MainPage />} />
          <Route path="/users" element={<UsersList />} />
           {/* api nadarad */}
          <Route path="/users/:id" element={<UsersPrivatePage />} />
          {/* api nadarad */}
          <Route path="/admins-list" element={<AdminsList />} />
            {/* url nadarad */}
          <Route path="/add-admin" element={<AddAdmins />} />
          {/* url nadarad */}
          {/* url barayae add role nadarim dar menu bayad post /roles bashad  */}
          {/* url barayae add role nadarim dar menu bayad get /roles bashad */}
          <Route path="/role-define" element={<RolDefine />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};
