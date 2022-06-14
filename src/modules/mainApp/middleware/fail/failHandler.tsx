import { AxiosResponse } from "axios";
import { LSLogout } from "../login/inde";

export async function FailureHandler(response: AxiosResponse) {
  let window: any = Window;
 
  return new Promise((resolve, reject) => {
    try {
      if (response === undefined) {
        resolve(
          ((window.AxiosResponse.text = "Network Error"),
          (window.AxiosResponse.action = "Fail"))
        );
      }
      switch (response.status) {
        case 400:
          resolve(
            ((window.AxiosResponse.text = "400 Status Get"),
            (window.AxiosResponse.action = "Fail"))
          );
          break;
        case 401:
          window.AxiosResponse.text = "401 Status Get";
          window.AxiosResponse.action = "Fail";
          resolve(LSLogout());
          break;
        case 403:
          window.AxiosResponse.text = "403 Status Get";
          window.AxiosResponse.action = "Fail";
          resolve(LSLogout());
          break;
        case 404:
          resolve(
            ((window.AxiosResponse.text = "404 Status Get"),
            (window.AxiosResponse.action = "Fail"))
          );
          break;
        case 405:
          resolve(
            ((window.AxiosResponse.text = "405 Status Get"),
            (window.AxiosResponse.action = "Fail"))
          );
          break;
        case 407:
          resolve(
            ((window.AxiosResponse.text = "407 Status Get"),
            (window.AxiosResponse.action = "Fail"))
          );

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
}
