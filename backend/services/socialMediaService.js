const socialMediaModel = require("../models/socialmediamodels")
const R = require("../utils/responseHelper")

const socialMediaService = {}



socialMediaService.addSocialMediaUrl = async(data,userId)=>{
    let datas = {
        userId:userId,
        facebook:data.facebook,
        instagram:data.instagram,
        whatsapp:data.whatsapp,
        linkedin:data.linkedin,
        youtube:data.youtube,
        twitter:data.twitter
    }
    let add = await socialMediaModel.addsocialmedia(datas)
    return add
}
socialMediaService.getSocialMedia = async()=>{
    let get = await socialMediaModel.getsocialmedia()
    return get
}
socialMediaService.updateSocialMediaById = async(data)=>{
    let datas = {
        facebook:data.facebook,
        instagram:data.instagram,
        whatsapp:data.whatsapp,
        linkedin:data.linkedin,
        youtube:data.youtube,
        twitter:data.twitter
    }
    console.log("UpdateSocialMedia",data);
    let update = await socialMediaModel.updatesocialmedia(data.id,datas)
    return update
}
socialMediaService.deleteSocialMediaById = async(data)=>{
    let remove = await socialMediaModel.deletesocialmedia(data.id)
    return remove
}
module.exports = socialMediaService