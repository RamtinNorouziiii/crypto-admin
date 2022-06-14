import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendMenuInfoAction } from "../../actions/menu";
// @ts-ignore
import user from "./user.png";
export const MainPage = () => {
  const dispatch = useDispatch();
  const [livePrices, setLivePrices] = useState<any>();
  useEffect(() => {
    const livePrice = async () => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setLivePrices(res.data);
    };
    livePrice();
  }, []);
  const renderList =
    livePrices &&
    livePrices.map((coin: any, index: number) => {
      return (
        <tr key={index}>
          <td>
            <img src={coin.image} alt="bikhiyal babaaaa ..." width="40px" />{" "}
          </td>
          <td> {coin.name} </td>
          <td> {coin.high_24h} </td>
          <td> {coin.low_24h} </td>
          <td>
            {Math.sign(coin.price_change_24h) === -1 ? (
              <span className="text-danger">{coin.price_change_24h}</span>
            ) : (
              <span className="text-success">{coin.price_change_24h}</span>
            )}
          </td>
          <td> {new Date(coin.last_updated).toLocaleTimeString()} </td>
        </tr>
      );
    });
  return (
    <div className="container-fluid min-vh-100 w-100 bg-dark">
      <div className="row mx-auto">
        <div className="col-3 my-5 ">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={user}
                  alt="bikhiii"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">نام کاربر</h5>
                  <p className="card-text text-dark">سمت : مدیر سیستم</p>
                  <p className="card-text mx-4 my-2">
                    <a href="/">
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          localStorage.clear();
                        }}
                      >
                        {" "}
                        خروج{" "}
                      </button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8  me-5 my-5">
          <table
            className="table text-center  "
            style={{ border: "1px solid #3c3c3d", color: "white" }}
          >
            <thead>
              <tr>
                <th className="just">تصویر</th>
                <th>نام ارز</th>
                <th>بیشترین قیمت 24 ساعت گذشته</th>
                <th>کمترین قیمت 24 ساعت گذشته</th>
                <th>تغییرات قیمت 24 ساعت گذشته</th>
                <th>آخرین آپدیت</th>
              </tr>
            </thead>
            <tbody>{renderList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
