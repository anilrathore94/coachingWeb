import * as curd from "./curd"
import * as dataUrl  from "./dataurl"
export const AddUserService =async (data) => {
    return await curd.post(dataUrl.MainUrl+dataUrl.endPoint.addUser,{},data)
} 
export const getUserDataService =async () => {
    return await curd.get(dataUrl.MainUrl+dataUrl.endPoint.getUser)
}
export const UpdateUserService =async (data) => {
    return await curd.post(dataUrl.MainUrl+dataUrl.endPoint.updateUser,{},data)
}
export const DeleteUserService =async (data) => {
    return await curd.post(dataUrl.MainUrl+dataUrl.endPoint.deleteUser,{},data)
}
export const AdminLogin =async (data) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return await curd.post(dataUrl.MainUrl+dataUrl.endPoint.login,data,headers)
}