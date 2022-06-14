import { AxiosResponse } from "axios";
import { LSLogin } from "../login/inde";
export const SuccessHandler = (response: AxiosResponse) => {
  let window: any = Window;
  return new Promise((resolve, reject) => {
   
    try {
      switch (response.status) {
        case 200:
          resolve(
            ((window.AxiosResponse.text = "200 Status Get"),
            (window.AxiosResponse.action = "Success"))
          );
          break;
        case 201:
          resolve(
            ((window.AxiosResponse.text = "201 Status Get"),
            (window.AxiosResponse.action = "Success"))
          );

          break;
        case 204:
          
          resolve(
            ((window.AxiosResponse.text = "204 Status Get"),
            (window.AxiosResponse.action = "Success"))
          );

          break;
        case 207:
          window.AxiosResponse.text = "207 Status Get";
          window.AxiosResponse.action = "Success";
          resolve(response);
          break;
        case 209:
          if (response.data.det && response.data.det.length > 20) {
           
            window.AxiosResponse.text = "209 Status Get";
            window.AxiosResponse.action = "Success";
            resolve(LSLogin(response));
          } else {
            resolve(response);
          }
          break;
        default:
          break;
      }
      // @ts-ignore
    } catch (error) {
      reject(error);

      // @ts-ignore
    }
  });
};
