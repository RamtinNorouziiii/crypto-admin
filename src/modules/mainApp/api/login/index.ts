import { AxiosResponse } from "axios";
import { Instance } from "..";
import { ISendLogin } from "../../types/interface/login";

export async function LoginApi({
  username,
  password,
}: ISendLogin): Promise<AxiosResponse> {
  return await new Promise((resolve, reject) => {
    try {
      //
      resolve(
        Instance.post(`http://94.130.206.149:3077/admins/login`, {
          username,
          password,
        })
      );
    } catch (error) {
      //
      console.log("FAILED");
      reject(error);
    }
  });
}
