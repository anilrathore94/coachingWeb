const express = require("express")
const router = express.Router();
const profileService = require("../services/profileService");
const R = require("../utils/responseHelper");
const verifyToken = require("../utils/verifyToken");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Set the filename to the original filename
    }
  });
  const upload = multer({ storage });

router.post("/updateProfile",upload.single('profileIcon'),verifyToken,async(req,res)=>{
    let add = await profileService.updateProfile(req.body,req.doc.userId,req.file)
    if(add){
        R(res,true,"Profile section updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/showProfile",verifyToken,async(req,res)=>{
    let add = await profileService.showProfile(req.doc.userId)
    if(add){
        R(res,true,"User profile found successfully",add)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/updateEmailAndMobile",verifyToken,async(req,res)=>{
    let update = await profileService.updateEmailAndPassword(req.doc.userId,req.body)
    if(update){
        R(res,true,"Details updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deleteNewsById",async(req,res)=>{
    let deletes = await news.deleteNewsById(req.body);
    if(deletes){
        R(res,true,"News section deleted successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

module.exports = router