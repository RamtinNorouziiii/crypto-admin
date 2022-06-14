/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SendLoginInfoAction } from "../../actions/login";
import { Instance } from "../../api";
import { RootSelector } from "../../reducers";

export const LoginComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mainSelector: any = useSelector((state: RootSelector) => state);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(SendLoginInfoAction({ username, password }));
  };
  console.log(mainSelector.token.token)
  useEffect(() => {

    if (mainSelector.token.token !== null) {
      console.log("hiu")
      navigate("/dashboard");
    }
  }, [mainSelector]);
  return (
    <div className="row p-0 m-0 col-12 min-vh-100 ">
      <div
        className="d-flex flex-row col-5 justify-content-center align-items-center"
        style={{ backgroundColor: "black" }}
      >
        <span>Avinex</span>
      </div>
      <div
        className="d-flex flex-row col-7 justify-content-center align-items-center"
        style={{ backgroundColor: "yellow" }}
      >
        <div className="login-form">
          <form onSubmit={submitLogin}>
            <div className="form-group my-2">
              <label className="text-dark">نام کاربری</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                name="username"
                onChange={inputHandler}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">رمز عبور</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={inputHandler}
              />
            </div>
            <div className="my-5">
              <button type="submit" className="btn  mx-1 btn-dark">
                ورود
              </button>
              <button className="btn btn-secondary">ثبت نام</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
