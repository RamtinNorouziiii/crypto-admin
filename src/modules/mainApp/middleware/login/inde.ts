import { AxiosResponse } from "axios"

export const LSLogin=(response:AxiosResponse)=>{
    localStorage.setItem("TOKEN",response.data.det)
    
    return response
    
}

export const LSLogout=()=>{
  localStorage.removeItem("TOKEN")
}
