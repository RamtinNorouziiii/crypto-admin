import { AxiosResponse } from "axios";
import { Instance } from "..";
import { IRolInfoSend } from "../../types/interface/managment/rolDefine";

export async function RolDefineApi({
 info
}: IRolInfoSend): Promise<AxiosResponse> {
  return await new Promise((resolve, reject) => {
    try {
      //
      resolve(
        Instance.post(`http://94.130.206.149:3077/roles`, {
          info
        })
      );
    } catch (error) {
      //
      console.log("FAILED");
      reject(error);
    }
  });
}
