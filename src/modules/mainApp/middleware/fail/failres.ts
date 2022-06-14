import { AxiosResponse } from "axios";
import { FailSwetAlertStart } from "../../../../libs/sweetalert";
import { FailureHandler } from "./failHandler";
export async function FailedResponse(failedRes: AxiosResponse<any>) {
 
  return await new Promise((resolve, reject) => {
 
    try {
      console.log("FailedResponse=>resolve(failedRes)");
            // @ts-ignore
            let snpinnerElement : HTMLDivElement | null=document.getElementById("startLoading")
            snpinnerElement && snpinnerElement.style&&(snpinnerElement.style.display="none")
            
      resolve((
        // @ts-ignore
        FailureHandler(failedRes.response),FailSwetAlertStart()
      ));
    } catch (error) {
      console.log("FailedResponse=>reject(error)");
      reject(error);
    }
  });
}
