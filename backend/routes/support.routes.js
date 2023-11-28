const express = require("express")
const router = express.Router();
const supportService = require("../services/supportService");
const BookModel = require("../services/bookService");
const R = require("../utils/responseHelper");
const adminService = require("../services/adminService")
const multer = require('multer');
const bookService = require("../services/bookService")
const IP = require('ip');
const verifyToken = require("../utils/verifyToken");

router.post("/add-support-request",async(req,res)=>{
    let resp = await supportService.addSupport(req.body)
    if(resp){
        R(res,true,"Support request sent successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})


module.exports = router