const express = require("express")
const router = express.Router();
const authService = require("../services/authServices");
const designService = require("../services/designService");
const R = require("../utils/responseHelper");
const multer = require('multer');
const bookService = require("../services/bookService")

router.post("/getAllDesign",async(req,res)=>{
    let find = await designService.find(req.body)
    if(find){
        R(res,true,"Data found successfully",find)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

module.exports = router