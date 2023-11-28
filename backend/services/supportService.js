const supportModel = require("../models/supportmodels")
const R = require("../utils/responseHelper")

const supportService = {}

supportService.addSupport = async(data)=>{
    let add = await supportModel.addsupport(data)
    return add
}

supportService.getAllSupportRequest = async()=>{
    let get = await supportModel.getallsupportrequest()
    return get
}
module.exports = supportService