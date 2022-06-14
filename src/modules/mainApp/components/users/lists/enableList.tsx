/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import TimeChanger from "../../../../../libs/timechanger"
import { RootSelector } from "../../../reducers"
import { IUsersList } from "../../../types/models/users/list"

export const EnableList = ()=>{
    const mainSelector:any = useSelector((state:RootSelector)=>state)
    const UsersData = mainSelector.users.users
    const OrderedUsers =
    UsersData &&
    UsersData.hilo_users &&
    UsersData.hilo_users.sort((a:IUsersList, b:IUsersList) =>
      b.createTime > a.createTime ? 1 : -1
    );
    const EnableUsersArray:IUsersList[] =
    OrderedUsers && OrderedUsers.filter((person:IUsersList) => person.flag === true);
  
    const renderListEnable =
    EnableUsersArray &&
    Object.values(EnableUsersArray).map((user:IUsersList, index:number) => {
      const year = new Date(user.createTime).getFullYear();
      const month = new Date(user.createTime).getMonth() + 1;
      const day = new Date(user.createTime).getDate();
      const res = TimeChanger(year, month, day);
     
      return (
      
          <tr
            key={index}
            // onMouseEnter={() => {
            //   setStyle({ display: "block" });
            // }}
            // onMouseLeave={() => {
            //   setStyle({ display: "none" });
            // }}
          >
            <th>{index + 1}</th>
            <td>{user.nicName}</td>
            <td>{user.id != null ? user.id : "-"}</td>
            <td
              style={{ direction: "ltr" }}
            >{`${res[0]} - ${res[1]} - ${res[2]}`}</td>
            <td>
              {user.flag === true ? (
                <span className="dot1"></span>
              ) : (
                <span className="dot"></span>
              )}
            </td>
            <td>
              {" "}
              <Link to={`/users/${user.id}`}>
                <button className="btn btn-warning">پروفایل کاربر</button>
              </Link>{" "}
            </td>
          </tr>
        
      );
    });

    return(
        <>
        {renderListEnable}
        </>
    )
}