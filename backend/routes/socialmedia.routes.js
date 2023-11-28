const express = require("express")
const router = express.Router();
const R = require("../utils/responseHelper");
const multer = require('multer');
const socialMediaService = require("../services/socialMediaService")

router.get("/get-social-media-url",async(req,res)=>{
    let resp = await socialMediaService.getSocialMedia();
    if(resp){
        R(res,true,"Social media info found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

module.exports = router