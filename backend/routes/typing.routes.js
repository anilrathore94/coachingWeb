const express = require("express")
const router = express.Router();
const authService = require("../services/authServices");
const typingService = require("../services/typingService");
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

router.post("/addTypingForm",upload.single('file'),async(req,res)=>{
    let find = await typingService.add(req.body,req.file)
    if(find){
        R(res,true,"Form submitted successfully",find)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

module.exports = router