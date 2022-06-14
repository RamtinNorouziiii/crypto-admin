import { AxiosResponse } from "axios";
import { Instance } from "..";

export async function MenuApi(): Promise<AxiosResponse> {
  return await new Promise((resolve, reject) => {
    try {
      //
      resolve(
        Instance.post(`http://94.130.206.149:3077/admins/menu`)
      );
    } catch (error) {
      //
      console.log("FAILED");
      reject(error);
    }
  });
}
