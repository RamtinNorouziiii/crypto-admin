import { AxiosResponse } from "axios";
import { Instance } from "..";
import { IUrlSend } from "../../types/interface/users/list";

export async function UsersListApi({
  url
}: IUrlSend): Promise<AxiosResponse> {
  return await new Promise((resolve, reject) => {
    try {
      //
      resolve(
        Instance.post(`${url}`)
      );
    } catch (error) {
      //
      console.log("FAILED");
      reject(error);
    }
  });
}
