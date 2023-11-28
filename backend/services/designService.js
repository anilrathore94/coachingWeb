const designModels = require("../models/designmodels")
const R = require("../utils/responseHelper")

const DesignService = {}

DesignService.add = async(body,file,userId)=>{
    let data = {
        userId:userId,
        designType:body.designType,
        icon:file['icon'][0].filename,
        file:file['file'][0].filename,
    }
    let add = await designModels.addDesign(data)
    return add
}
DesignService.get = async()=>{
    let get = await designModels.getDesign()
    return get
}
DesignService.update = async(body,file,userId)=>{
    let details = {
        userId:userId,
        designType:body.designType,
    }
    if(file && file['icon']){
        details.icon = file['icon'][0].filename
    }
    else{
        details.icon = body.icon
    }
    if(file && file['file']){
        details.file = file['file'][0].filename
    }
    else{
        details.file = body.file
    }
    console.log("bodyfileuserid",body,file,userId)

    let add = await designModels.updateDesign(details,body.id)
    return add
}
DesignService.remove = async(data)=>{
    let add = await designModels.deleteDesign(data)
    return add
}

DesignService.find = async(data) => {
    let find = await designModels.findDesigns(data)
    return find

}

module.exports = DesignService