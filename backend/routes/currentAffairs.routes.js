const express = require("express")
const router = express.Router();
const CurrentAffairs = require("../services/currentAffairsService");
const BookModel = require("../services/bookService");
const R = require("../utils/responseHelper");
const IP = require('ip');
const verifyToken = require("../utils/verifyToken");

router.post("/getCurrentAffairsFiles",async(req,res)=>{
    let find = await CurrentAffairs.find(req.body)
    if(find){
        R(res,true,"Current Affairs Find Successfully",find)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

module.exports = router