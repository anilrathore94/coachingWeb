import * as curd from "./curd"
import * as dataUrl  from "./dataurl"

export const getTestSeriesAsQuery = async(data) => {
    const { MainUrl, endPoint } = dataUrl;
    const url = MainUrl + endPoint.getTestSeries;
    let token = localStorage.getItem("token")
 const headers = {
    'Content-Type': 'application/json'
};
    return await curd.post(url,data,headers)
}