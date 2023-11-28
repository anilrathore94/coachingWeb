const express = require("express")
const router = express.Router();
const authService = require("../services/authServices");
const TestSeriesService = require("../services/testseriesService");
const R = require("../utils/responseHelper");
const multer = require('multer');
const bookService = require("../services/bookService")


router.post("/getTestSeries",async(req,res)=>{
    let find = await TestSeriesService.getTestSeries(req.body)
    if(find){
        R(res,true,"Test series found successfully",find)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

module.exports = router