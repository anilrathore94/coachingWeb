import * as curd from "./curd"
import * as dataUrl  from "./dataurl"

export const AddUserFeedBack = async(data) => {
    const { MainUrl, endPoint } = dataUrl;
    const url = MainUrl + endPoint.addFeedback;
let token = localStorage.getItem("token")
 const headers = {
    'Content-Type': 'application/json'
};
    return await curd.post(url,data,headers)
}