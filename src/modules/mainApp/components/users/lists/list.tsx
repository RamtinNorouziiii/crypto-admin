/* eslint-disable react-hooks/exhaustive-deps */
import "../../../../../libs/style/status.css";
import "../../../../../libs/style/search.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TimeChanger from "../../../../../libs/timechanger";
import { SendUsersListInfoAction } from "../../../actions/users/list";
import { RootSelector } from "../../../reducers";
import { IUsersList } from "../../../types/models/users/list";
import { DisableList } from "./disableList";
import { EnableList } from "./enableList";

export const UsersList = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(0);
  const [style, setStyle] = useState({
    display: "none",
  });
  const [foundUsers, setFoundUsers] = useState<IUsersList[]>();
  const [name, setName] = useState("");
  const [foundUsers1, setFoundUsers1] = useState<IUsersList[]>();
  const [userId, setUserId] = useState("");

  const mainSelector: any = useSelector((state: RootSelector) => state);
  const data = mainSelector.menu && mainSelector.menu.menu;
  const FrontUrl = window.location.pathname;
  const needApi = data && data.ApiList && data.ApiList[FrontUrl].list;
  const UsersData: IUsersList[] =
    mainSelector.users &&
    mainSelector.users.users &&
    mainSelector.users.users.hilo_users;
  useEffect(() => {
    if (mainSelector.users.users === null) {
      if (needApi != null) {
        dispatch(SendUsersListInfoAction({ url: needApi }));
      }
    }
  }, [needApi]);
  const OrderedUsers =
    mainSelector.users.users &&
    mainSelector.users.users.hilo_users &&
    mainSelector.users.users.hilo_users.sort((a: IUsersList, b: IUsersList) =>
      b.createTime > a.createTime ? 1 : -1
    );

  //SEARCH CODE
  useEffect(() => {
    setFoundUsers(OrderedUsers);
  }, [OrderedUsers]);
  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword: any = e.target.value;

    if (keyword !== "") {
      const results = OrderedUsers.filter((user: IUsersList) => {
        return user.nicName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(OrderedUsers);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  useEffect(() => {
    setFoundUsers1(OrderedUsers);
  }, [OrderedUsers]);
  const filter1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword: any = e.target.value;

    if (keyword !== "") {
      const results = OrderedUsers.filter((user: IUsersList) => {
        return user.id.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers1(results);
    } else {
      setFoundUsers1(OrderedUsers);
      // If the text field is empty, show all users
    }

    setUserId(keyword);
  };

  //SEARCH CODE

  const renderListName =
    foundUsers &&
    Object.values(foundUsers).map((user: IUsersList, index: number) => {
      const year = new Date(user.createTime).getFullYear();
      const month = new Date(user.createTime).getMonth() + 1;
      const day = new Date(user.createTime).getDate();
      const res = TimeChanger(year, month, day);

      return (
        <tr
          key={index}
          onMouseEnter={() => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={() => {
            setStyle({ display: "none" });
          }}
        >
          <th>{index + 1}</th>
          <td>{user.nicName}</td>
          <td>
            {" "}
            {style.display === "none" ? (
              user.id.split("-")[4] + "..."
            ) : (
              <span style={style}>{user.id}</span>
            )}
          </td>
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
  const renderListId =
    foundUsers1 &&
    Object.values(foundUsers1).map((user: IUsersList, index: number) => {
      const year = new Date(user.createTime).getFullYear();
      const month = new Date(user.createTime).getMonth() + 1;
      const day = new Date(user.createTime).getDate();
      const res = TimeChanger(year, month, day);

      return (
        <tr
          key={index}
          onMouseEnter={() => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={() => {
            setStyle({ display: "none" });
          }}
        >
          <th>{index + 1}</th>
          <td>{user.nicName}</td>
          <td>
            {" "}
            {style.display === "none" ? (
              user.id.split("-")[4] + "..."
            ) : (
              <span style={style}>{user.id}</span>
            )}
          </td>
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

  return (
    <>
      <div className="container my-5">
        {
          <div style={{ position: "absolute", top: "80px" }}>
            <div className="containerSearch">
              <input
                type="text"
                placeholder="نام کاربری..."
                className="searchInput"
                value={name}
                onChange={filter}
              />
              <div className="search"></div>
            </div>
          </div>
        }

        {
          <div style={{ position: "absolute", top: "80px", right: "800px" }}>
            <div className="containerSearch">
              <input
                type="text"
                placeholder="شناسه کاربری..."
                className="searchInput"
                value={userId}
                onChange={filter1}
              />
              <div className="search"></div>
            </div>
          </div>
        }

        <table
          className="table table-striped table-hover  text-center mx-auto"
          style={{ backgroundColor: "white", width: "90%",borderRadius : "9px" }}
        >
          <thead>
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col">نام کاربری</th>
              <th scope="col">شناسه کاربر</th>
              <th scope="col">تاریخ ثبت نام</th>
              <th scope="col">
                وضعیت
                <div>
                  <select
                    onChange={(e) => {
                      setSort(Number(e.target.value));
                    }}
                    style={{ textAlign: "center" }}
                  >
                    <option value={0}>عادی</option>
                    <option value={1}>فعال</option>
                    <option value={-1}>غیر فعال</option>
                  </select>
                </div>
              </th>
              <th scope="col">تغییرات</th>
            </tr>
          </thead>
          <tbody>
            {sort === -1 ? (
              <DisableList />
            ) : sort === 1 ? (
              <EnableList />
            ) : userId === undefined || userId === "" ? (
              renderListName
            ) : (
              renderListId
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
