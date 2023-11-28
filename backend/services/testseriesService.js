const testSeriesModels = require("../models/testseries")
const R = require("../utils/responseHelper")

const TestSeriesService = {}

TestSeriesService.add = async(file,userId,body)=>{
    console.log("nbsdhffvds",body)
    let data = {
        userId:userId,
        fileType:body.fileType,
        subject:body.subject,
        categoryId:body.categoryId,
        plan:body.plan,
        releaseDate:body.releaseDate
    }
    if(file){
        data.file = file.filename
    }
    let add = await testSeriesModels.addTestSeries(data)
    return add
}
TestSeriesService.get = async()=>{
    let get = await testSeriesModels.getTestSeries()
    return get
}
TestSeriesService.update = async(body,file,id)=>{
    console.log("sdbjshgshdvshggvdsdhgv",body)
    let details = {
        categoryId:body.categoryId,
        fileType:body.fileType,
        subject:body.subject,
        plan:body.plan,
        releaseDate:body.releaseDate
    }
    if(file && file.filename){
        details.file = file.filename
    }
    else{
        details.file = body.file
    }
    let add = await testSeriesModels.updateTestSeries(details,body.id)
    return add
}
TestSeriesService.remove = async(data)=>{
    let add = await testSeriesModels.deleteTestSeries(data)
    return add
}

TestSeriesService.getTestSeries = async(data)=>{
    let add = await testSeriesModels.getTestSeriesAsQuery(data)
    return add
}
module.exports = TestSeriesService