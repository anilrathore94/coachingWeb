const typingModels = require("../models/typingmodels")
const R = require("../utils/responseHelper")

const typingService = {}

typingService.add = async(body,file)=>{
    let data = {
        subject:body.subject,
        name:body.name,
        email:body.email,
        message:body.message
    }
    if(file){
        data.file = file.filename
    }
    let add = await typingModels.addTyping(data)
    return add
}
typingService.get = async()=>{
    let add = await typingModels.getTyping()
    return add
}

module.exports = typingService