const DataTranslateModels = require("../models/datatranslatemodels")
const R = require("../utils/responseHelper")

const dataTranslateService = {}

dataTranslateService.add = async(body,file)=>{
    let data = {
        subject:body.subject,
        name:body.name,
        email:body.email,
        message:body.message,
    }
    if(file){
        data.file = file.filename
    }
    let add = await DataTranslateModels.addDataTranslate(data)
    return add
}

dataTranslateService.get = async()=>{
    let add = await DataTranslateModels.getDataTranslate()
    return add
}

module.exports = dataTranslateService