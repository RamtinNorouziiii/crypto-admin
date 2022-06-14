/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SendMenuInfoAction } from "../../modules/mainApp/actions/menu";
import { RootSelector } from "../../modules/mainApp/reducers";

export const MenuComp = () => {
  const dispatch = useDispatch();
  const mainSelector = useSelector((state: RootSelector) => state);
  const data: any =
    mainSelector.menu &&
    mainSelector.menu.menu &&
    mainSelector.menu.menu.ShowList;
  const renderList =
    data &&
    Object.entries(data).map(([title, sub]: any, index) => {
      return (
        <li className="nav-item dropdown text-center " key={index}>
          <a
            className="nav-link dropdown-toggle active"
            href="#"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "#f2a900" }}
          >
            {title}
          </a>
          <ul
            className="dropdown-menu text-center"
            aria-labelledby="navbarScrollingDropdown"
          >
            {sub &&
              Object.entries(sub).map(([subTitle, childUrl]: any, index) => {
                return (
                  <div key={index}>
                    <Link to={childUrl} style={{ textDecoration: "none" }}>
                      <li>
                        <span className="dropdown-item">{subTitle}</span>
                      </li>
                    </Link>
                  </div>
                );
              })}
          </ul>
        </li>
      );
    });

  useEffect(() => {
    if (localStorage.getItem("TOKEN") != null && (data && data.menu) === null) {
      dispatch(SendMenuInfoAction());
    }
  }, [mainSelector.token]);
  return (
    <>
      {" "}
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#3c3c3d" }}
      >
        <div className="container-fluid">
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <span className="navbar-brand" style={{ color: "#f4f4f4" }}>
              ادمین آوینکس
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarScroll">
            <ul
              className="navbar-nav   my-lg-0 navbar-nav-scroll "
              style={{ direction: "rtl" }}
            >
              {renderList}
            </ul>
          </div>
        </div>
      </nav>{" "}
    </>
  );
};
