const authModel = require("../models/authmodels")
const R = require("../utils/responseHelper")

const profile = {}

profile.updateProfile = async(body,userId,file)=>{
    let data = {
        ...body,

    }
    if(file && file.filename){
        data.profileIcon = file.filename
    }
    else{
        data.profileIcon = body.profileIcon
    }
    let add = await authModel.profileupdate(userId,data)
    return add
}
profile.showProfile = async(userId)=>{
    let add = await authModel.showprofile(userId)
    return add
}
profile.updateEmailAndPassword = async(userId,data)=>{
    let add = await authModel.updateemailandmobile(userId,data)
    return add
}
module.exports = profile