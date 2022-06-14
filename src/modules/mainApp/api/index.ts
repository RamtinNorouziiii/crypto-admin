import axios from "axios";
import { FailedResponse } from "../middleware/fail/failres";
import { SuccessResponse } from "../middleware/success/successres";

export const Instance  = axios.create({})
let window: any = Window;
window.AxiosResponse = {
  text: "",
  action: null,
};
Instance.interceptors.request.use(function (config) {
 
    const token = localStorage.getItem("TOKEN");
    // @ts-ignore
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
  
Instance.interceptors.response.use(
    function(response){
return SuccessResponse(response)
    },
    function(error){
        return FailedResponse(error)

    }
)