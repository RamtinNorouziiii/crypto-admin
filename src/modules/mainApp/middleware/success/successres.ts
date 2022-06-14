import { AxiosResponse } from "axios";
import { SuccessSwetAlertStart } from "../../../../libs/sweetalert";
import { SuccessHandler } from "./successHandler";

export const SuccessResponse = async (response: AxiosResponse) => {
  const window: any = Window;
  return await new Promise((resolve, reject) => {
    try {
      console.log("SuccessResponse=>resolve(successRes)");
            // @ts-ignore
            let snpinnerElement : HTMLDivElement | null=document.getElementById("startLoading")
            snpinnerElement && snpinnerElement.style&&(snpinnerElement.style.display="none")
            
      resolve(
        (SuccessHandler(response))
      );
    } catch (error: any) {
      reject(error);
    }
  });
};
