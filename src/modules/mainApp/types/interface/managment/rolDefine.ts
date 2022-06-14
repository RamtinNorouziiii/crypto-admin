import { rolDefineActionTypes } from "../../../actiontypes";

export interface ISendRolDefine {
    roleLevel: string,
	roleParent: string,
	roleName: string,
	endpoint: [
        {
            id: string,
            flag: boolean,
            actionsName: string,
            pageName: string,
            categoryName: string,
            frontAddr: string,
            endpointMeth: string,
            endpointCdn: string,
            endpointCdnToken: string,
            endpointAddr: string,
            createTime: string,
            updateTime: string
        }
    ]
}
export interface IRolInfoSend{
    info :ISendRolDefine
}
export interface IRolDefineSendAction {
  type: rolDefineActionTypes.SEND_ROL_DEFINE_REQ;
  payload: IRolInfoSend;
}
export interface IRolDefineSuccessAction {
  type: rolDefineActionTypes.ROL_DEFINE_SUCCESS;
 
}
export interface IRolDefineFailedAction {
  type: rolDefineActionTypes.ROL_DEFINE_FAILED;
  
}

export interface ISagaAction{
  type : rolDefineActionTypes.SEND_ROL_DEFINE_REQ,
  payload :ISendRolDefine
}

export type AllRolDefinesTypes =
  | IRolDefineSendAction
  | IRolDefineSuccessAction
  | IRolDefineFailedAction;
