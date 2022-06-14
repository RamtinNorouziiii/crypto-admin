/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimeChanger from "../../../../libs/timechanger";
import { SendAdminsListInfoAction } from "../../actions/admins/list";
import { RootSelector } from "../../reducers";
import { IAdminsList } from "../../types/models/admins/list";

export const AdminsList = () => {
  const dispatch = useDispatch();
  const mainSelector: any = useSelector((state: RootSelector) => state);
  const [styles, setStyles] = useState({
    display: "none",
  });
  const [foundAdmins, setFoundAdmins] = useState<IAdminsList[]>();
  const [name, setName] = useState("");
  const [foundAdmins1, setFoundAdmins1] = useState<IAdminsList[]>();
  const [adminId, setAdminId] = useState("");

  const data = mainSelector.menu && mainSelector.menu.menu;
  const FrontUrl = window.location.pathname;
  const needApi = data && data.ApiList && data.ApiList[FrontUrl].list;
  console.log(mainSelector.admins);
  useEffect(() => {
    if (
      needApi != null &&
      mainSelector.admins &&
      mainSelector.admins.admins === null
    ) {
      dispatch(SendAdminsListInfoAction({ url: needApi }));
    }
  }, [needApi]);
  const OrderedAdmins =
    mainSelector.admins &&
    mainSelector.admins.admins &&
    mainSelector.admins.admins.sort((a: IAdminsList, b: IAdminsList) =>
      b.createTime > a.createTime ? 1 : -1
    );
  //SEARCH CODE
  useEffect(() => {
    setFoundAdmins(OrderedAdmins);
  }, [OrderedAdmins]);
  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword: any = e.target.value;

    if (keyword !== "") {
      const results = OrderedAdmins.filter((admin: IAdminsList) => {
        return (admin.name != null ? admin.name : "")
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundAdmins(results);
    } else {
      setFoundAdmins(OrderedAdmins);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  useEffect(() => {
    setFoundAdmins1(OrderedAdmins);
  }, [OrderedAdmins]);
  const filter1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword: any = e.target.value;

    if (keyword !== "") {
      const results = OrderedAdmins.filter((admin: IAdminsList) => {
        return admin.id.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundAdmins1(results);
    } else {
      setFoundAdmins1(OrderedAdmins);
      // If the text field is empty, show all users
    }

    setAdminId(keyword);
  };

  //SEARCH CODE
  const renderListName =
    foundAdmins &&
    foundAdmins.map((admin: IAdminsList, index: number) => {
      const year = new Date(admin.createTime).getFullYear();
      const month = new Date(admin.createTime).getMonth() + 1;
      const day = new Date(admin.createTime).getDate();
      const res = TimeChanger(year, month, day);
      return (
        <tr
          key={index}
          onMouseEnter={() => {
            setStyles({ display: "block" });
          }}
          onMouseOut={() => setStyles({ display: "none" })}
        >
          <td>{index + 1}</td>
          <td>{admin.name}</td>
          <td>
            {styles.display === "none" ? (
              admin.id.split("-")[4] + "..."
            ) : (
              <span style={styles}>{admin.id}</span>
            )}
          </td>
          <td>{admin.tell}</td>
          <td
            style={{ direction: "ltr" }}
          >{`${res[0]} - ${res[1]} - ${res[2]}`}</td>
        </tr>
      );
    });
  const renderListId =
    foundAdmins1 &&
    foundAdmins1.map((admin: IAdminsList, index: number) => {
      const year = new Date(admin.createTime).getFullYear();
      const month = new Date(admin.createTime).getMonth() + 1;
      const day = new Date(admin.createTime).getDate();
      const res = TimeChanger(year, month, day);
      return (
        <tr
          key={index}
          onMouseEnter={() => {
            setStyles({ display: "block" });
          }}
          onMouseOut={() => setStyles({ display: "none" })}
        >
          <td>{index + 1}</td>
          <td>{admin.name}</td>
          <td>
            {styles.display === "none" ? (
              admin.id.split("-")[4] + "..."
            ) : (
              <span style={styles}>{admin.id}</span>
            )}
          </td>
          <td>{admin.tell}</td>
          <td
            style={{ direction: "ltr" }}
          >{`${res[0]} - ${res[1]} - ${res[2]}`}</td>
        </tr>
      );
    });

  return (
    <>
      {" "}
      <div className="container my-5">
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

        <div style={{ position: "absolute", top: "80px", right: "800px" }}>
          <div className="containerSearch">
            <input
              type="text"
              placeholder="شناسه کاربری..."
              className="searchInput"
              value={adminId}
              onChange={filter1}
            />
            <div className="search"></div>
          </div>
        </div>
        <table
          className="table table-striped table-hover text-center mx-auto"
          style={{
            backgroundColor: "white",
            width: "85%",
            borderRadius: "9px",
          }}
        >
          <thead>
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col">نام کاربری</th>
              <th scope="col">شناسه ادمین</th>

              <th scope="col">تلفن ثابت</th>
              <th scope="col">تاریخ ثبت نام</th>
            </tr>
          </thead>
          <tbody>
            {name === undefined || name === "" ? renderListId : renderListName}
          </tbody>
        </table>
      </div>
    </>
  );
};
