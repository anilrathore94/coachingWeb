const express = require("express")
const router = express.Router();
const authService = require("../services/authServices");
const BookModel = require("../services/bookService");
const R = require("../utils/responseHelper");
const adminService = require("../services/adminService")
const multer = require('multer');
const bookService = require("../services/bookService")
const IP = require('ip');
const verifyToken = require("../utils/verifyToken");


router.get("/get-category",async(req,res)=>{
    
    let resp = await bookService.getAllCategory()
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Category found successfully",status:true,data:resp})
})

router.get("/get-books",async(req,res)=>{
    
    let resp = await bookService.getAllBooks()
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Books found successfully",status:true,data:resp})

})

router.post("/get-books-by-category-id",async(req,res)=>{
    
    let resp = await bookService.getAllBooksByCategoryId(req.body)
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    if(resp){
    res.send({message:"Books found successfully",status:true,data:resp})
    }
    else{
        res.send({message:"Books not successfully",status:false,data:[]})
    }

})

router.get("/get-poster",async(req,res)=>{
    
    let resp = await bookService.getAllPosters()
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Poster found successfully",status:true,data:resp})

})
router.post("/add-feedback",async(req,res)=>{
    
    let resp = await bookService.addFeedBack(req.body)
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Feedback Added Successfully",status:true,data:{}})

})

router.post("/add-book-review",async(req,res)=>{
    
    let resp = await bookService.addBookReviews(req.body)
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Reveiw Added Successfully",status:true,data:{}})

})

router.post("/add-book-to-cart",async(req,res)=>{
    const ipAddress = IP.address();
    let resp = await bookService.addBookToCart(req.body,"",ipAddress)
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Book added to cart",status:true,data:{}})

})
router.post("/add-book-to-cart-by-userid",verifyToken,async(req,res)=>{
    const ipAddress = IP.address();
    let resp = await bookService.addBookToCart(req.body,req.doc.userId,ipAddress)
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Book added to cart",status:true,data:{}})

})
router.get("/get-book-from-cart-by-ip",async(req,res)=>{
    const ipAddress = IP.address();
    let resp = await bookService.getBookFromCart(ipAddress)
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Book found from cart",status:true,data:resp})

})
router.get("/get-book-from-cart-by-userid",verifyToken,async(req,res)=>{
    let resp = await bookService.getBookfromCartByUserId(req.doc.userId)
    if(resp.length>0){
        res.send({message:"Book found from cart",status:true,data:resp})
    }
    else{
    res.send({message:"Some error occurs",status:false,data:[]})
    }

})
router.post("/remove-item-from-cart",async(req,res)=>{
    let resp = await bookService.removeItemFromCart(req.body.id)
    
    if(resp){
        res.send({message:"Book removed from cart",status:true,data:{}})
    }
    else{
    res.send({message:"Some error occurs",status:false,data:[]})

    }

})
router.post("/get-bookdetail-by-id",async(req,res)=>{
    let resp = await bookService.getBookDetailsById(req.body.id)
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    if(resp){
        res.send({message:"Book found",status:true,data:resp})
    }
    else{
    res.send({message:"Some error occurs",status:false,data:[]})

    }

})

router.get("/get-permotion-&-offer",async(req,res)=>{
    let resp = await bookService.getPromotionAndOffer()
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    if(resp){
        res.send({message:"Promotion and offer found successfully",status:true,data:resp})
    }
    else{
    res.send({message:"Some error occurs",status:false,data:[]})

    }

})

router.get("/get-trending-title-&-images",async(req,res)=>{
    let resp = await bookService.getTitlesImage()
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    if(resp){
        res.send({message:"Promotion and offer found successfully",status:true,data:resp})
    }
    else{
    res.send({message:"Some error occurs",status:false,data:[]})

    }

})
router.get("/get-admin-info",async(req,res)=>{
    let resp = await bookService.getAdminInformation()
    if(resp){
        res.send({message:"Admin info found successfully",status:true,data:resp})
    }
    else{
    res.send({message:"Some error occurs",status:false,data:[]})

    }

})
router.get("/get-cart-info",async(req,res)=>{
    const ipAddress = IP.address();
    let resp = await bookService.getCartInfo({"systemIp":ipAddress})
    if(resp){
        res.send({message:"Cart info found successfully",status:true,data:resp})
    }
    else{
    res.send({message:"Some error occurs",status:false,data:[]})

    }
})

router.get("/get-cart-info-by-userid",verifyToken,async(req,res)=>{
    let resp = await bookService.getCartInfo({"userId":req.doc.userId})
    if(resp){
        res.send({message:"Cart info found successfully",status:true,data:resp})
    }
    else{
    res.send({message:"Some error occurs",status:false,data:[]})
    }

})

router.post("/getAllEBooks",async(req,res)=>{
    
    let resp = await bookService.getAllEBooks(req.body)
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"Books found successfully",status:true,data:resp})

})



module.exports = router