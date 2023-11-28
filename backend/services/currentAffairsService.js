const currentAffairsModels = require("../models/currentaffairs")
const R = require("../utils/responseHelper")

const CurrentAffairsService = {}

CurrentAffairsService.add = async(file,body,userId)=>{
    let data = {
        userId:userId,
        fileType:body.fileType,
        type:body.type,
        plan:body.plan,
        range:body.range
    }
    if(file){
        data.file = file.filename
    }
    let add = await currentAffairsModels.addcurrentAffairsFile(data)
    return add
}
CurrentAffairsService.get = async()=>{
    let get = await currentAffairsModels.getcurrentAffairsFile()
    return get
}
CurrentAffairsService.update = async(body,file,userId)=>{
    let details = {
        userId:userId,
        fileType:body.fileType,
        type:body.type,
        plan:body.plan,
        range:body.range
    }
    if(file && file.filename){
        details.file = file.filename
    }
    else{
        details.file = body.file
    }
    let add = await currentAffairsModels.updatecurrentAffairsFile(details,body.id)
    return add
}
CurrentAffairsService.remove = async(data)=>{
    let add = await currentAffairsModels.deletecurrentAffairsFile(data)
    return add
}

CurrentAffairsService.find = async(data) => {
    let find = await currentAffairsModels.findfiles(data)
    return find

}

module.exports = CurrentAffairsService