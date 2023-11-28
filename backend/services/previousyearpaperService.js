const paperModels = require("../models/papermodels")
const R = require("../utils/responseHelper")

const previousYearPaperService = {}

previousYearPaperService.add = async(body,file,userId)=>{
    let data = {
        userId:userId,
        examType:body.examType,
        subject:body.subject,
        categoryId:body.categoryId,
    }
    if(file){
        data.file = file.filename
    }
    let add = await paperModels.addPreviousYearPaper(data)
    return add
}
previousYearPaperService.get = async()=>{
    let get = await paperModels.getPreviousYearPaper()
    return get
}
previousYearPaperService.update = async(body,file,id)=>{
    let details = {
        categoryId:body.categoryId,
        examType:body.examType,
        subject:body.subject,
    }
    if(file && file.filename){
        details.file = file.filename
    }
    else{
        details.file = body.file
    }
    let add = await paperModels.updatePreviousYearPaper(details,body.id)
    return add
}
previousYearPaperService.remove = async(data)=>{
    let add = await paperModels.deletePreviousYearPaper(data)
    return add
}

previousYearPaperService.getAllPaper = async(data)=>{
    let add = await paperModels.getAllPreviousYearPaperAccordingToCategory(data)
    return add
}
module.exports = previousYearPaperService