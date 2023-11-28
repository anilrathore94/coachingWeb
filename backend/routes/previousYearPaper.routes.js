const express = require("express")
const router = express.Router();
const authService = require("../services/authServices");
const PreviousearPaper = require("../services/previousyearpaperService");
const R = require("../utils/responseHelper");
const multer = require('multer');
const bookService = require("../services/bookService")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Set the filename to the original filename
    }
  });
  const upload = multer({ storage });

router.post("/getallPreviousYearPaper",async(req,res)=>{
    let find = await PreviousearPaper.getAllPaper(req.body)
    if(find){
        R(res,true,"Data found successfully",find)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

module.exports = router