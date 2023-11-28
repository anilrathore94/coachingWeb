const express = require("express")
const router = express.Router();
const authService = require("../services/authServices");
const BookModel = require("../services/bookService");
const R = require("../utils/responseHelper");
const adminService = require("../services/adminService")
const multer = require('multer');
const news = require("../services/newsService");
const exam = require("../services/examService");
const verifyToken = require("../utils/verifyAdToken");
const supportService = require("../services/supportService");
const socialMediaService = require("../services/socialMediaService");
const TestSeriesService = require("../services/testseriesService")
const currentAffairsService = require("../services/currentAffairsService");
const DesignService = require("../services/designService");
const previousYearPaperService = require("../services/previousyearpaperService")
const TypingService = require("../services/typingService")
const dataTranslate = require("../services/datatranslateService")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Set the filename to the original filename
    }
  });
  const upload = multer({ storage });

router.post("/login",async(req,res)=>{
    let authRes = await adminService.login(req.body.emailId, req.body.password)
    // if (authRes){}
    // res.status = 200;
    // res.json({ "message": "Login Success", authRes })
    if(authRes){
        R(res,true,"Login Success",authRes)
    }
    else{
        R(res,false,"Error occurs",{})
    }

})
router.get("/get-permission",verifyToken,async(req,res)=>{
    let permission = await adminService.getPermission(req.doc.userId)
    // if (authRes){}
    // res.status = 200;
    // res.json({ "message": "Login Success", authRes })
    if(permission){
        R(res,true,"Permission find Successfully",permission)
    }
    else{
        R(res,false,"Error occurs",{})
    }

})

router.post("/add-user",async(req,res)=>{
    
    let resp = await authService.addUsers()
    // res.json({message:"",data:resp})
    res.send("userAdded",true,resp)

})
router.get("/get-users",async(req,res)=>{
    
    let resp = await authService.getUsers()
    // res.json({message:"",data:resp})
    console.log("resp",resp)
    res.send({message:"userAdded",status:true,data:resp})

})
router.post("/subadmin", async(req,res)=>{

    
    let bals = await authService.addsubadmin(req.body)
    // res.json({message:"", data: bals})
    if(bals){
        R(res,true,"Subadmin added successfully",{})
    }
    else{
    R(res,false,"Some error ocurrs",{})

    }
    // console.log(req);

})
router.get("/get-subadmin-list",verifyToken, async(req,res)=>{
    let bals = await authService.getsubadmins(req.body)
    console.log("object===>>>",bals);

    // res.json({message:"", data: bals})
    if(bals){
        R(res,true,"Subadmin found successfully",bals)
    }
    else{
    R(res,false,"Some error ocurrs",{})
    }
    // console.log(req);

})
router.post("/subadminstatus", async(req,res)=>{
    
    let bals = await authService.subadminstatus(req.body.id,req.body.status)
    // res.json({message:"",data:bals})
    R(res,true,"",bals);

})
router.post("/updatesudadmin", async (req, res) => {
    
    let instdata = await authService.setsudadmin(
         req.body._id,
         req.body.first_name,
         req.body.last_name,
         req.body.gender,
         req.body.email,
         req.body.phone,
         req.body.dob,
         req.body.permissions

     );
     // res.json({ message: "",data:instdata });
     if(instdata){
        R(res,true,"Data updated successfully",{});
     }
     else{
        R(res,false,"Some error occurs",{});
     }
 
})
router.post("/deletesubuser",verifyToken, async(req,res,next)=>{
    
    let bals = await authService.deletesubuser(req.body.id)
    // res.json({message:"",data:bals})
    R(res,true,"",bals);


})

router.post("/addCategory",verifyToken, async(req,res)=>{
    let add = await BookModel.addcategoryOfBook(req.body,req.doc.userId)
    console.log("addddd",add)
    if(add){
        R(res,true,"Category added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getCategory",verifyToken,async(req,res)=>{
    let add = await BookModel.getcategoryOfBook(req.doc.userId)
    console.log("addddd",add)
    if(add){
        R(res,true,"Category found successfully",add)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/updateCategoryById",verifyToken,async(req,res)=>{
    let update = await BookModel.updatecategoryOfBookById(req.body)
    if(update){
        R(res,true,"Category updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deleteCategoryById",verifyToken,async(req,res)=>{
    let deletes = await BookModel.deletecategoryOfBookById(req.body);
    if(deletes){
        R(res,true,"Category deleted successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/changeCategoryStatus",verifyToken,async(req,res)=>{
    let update = await BookModel.changeCategoryStatus(req.body)
    if(update){
        R(res,true,"Status updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addBookDetails",upload.fields([{ name: 'bookIcon', maxCount: 1 }, { name: 'samplePdf', maxCount: 1 },{ name: 'pdfFile', maxCount: 1 },{ name: 'pptFile', maxCount: 1 },{ name: 'pptPdfFile', maxCount: 1 },{ name: 'editableFile', maxCount: 1 }]),verifyToken,async(req,res)=>{
    let add = await BookModel.addBookDetails(req.body,req.files,req.doc.userId)
    console.log("addddd",add)
    if(add){
        R(res,true,"Book added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getBookList",verifyToken,async(req,res)=>{
    let get = await BookModel.getBooks(req.doc.userId)
    console.log("addddd",get)
    if(get){
        R(res,true,"Books found successfully",get)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updateBookDetailsById",upload.single('bookIcon'),verifyToken,async(req,res)=>{
    let update = await BookModel.updateBookDetails(req.body,req.file)
    console.log("addddd",update)
    if(update){
        R(res,true,"Book details updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deleteBookDetailsById",upload.single('bookIcon'),verifyToken,async(req,res)=>{
    let update = await BookModel.deleteBookDetails(req.body)
    console.log("addddd",update)
    if(update){
        R(res,true,"Book details deleted successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/changeBookStatus",verifyToken,async(req,res)=>{
    let update = await BookModel.changeBookStatus(req.body)
    if(update){
        R(res,true,"Status updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addBookFiles",upload.single('file'),verifyToken,async(req,res)=>{
    let resp = await BookModel.addBookFiles(req.file,req.doc.userId,req.body);
    if(resp){
        R(res,true,"book File added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.get("/getBookFiles",verifyToken,async(req,res)=>{
    let resp = await BookModel.getBookFiles();
    if(resp){
        R(res,true,"book File found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updateBookFiles",upload.single('file'),verifyToken,async(req,res)=>{
    let resp = await BookModel.updateBookFiles(req.body,req.file,req.doc.userId);
    if(resp){
        R(res,true,"book File updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/deleteBookFiles",verifyToken,async(req,res)=>{
    let resp = await BookModel.removeBookFiles(req.body.id);
    if(resp){
        R(res,true,"Book File deleted successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addPoster",upload.single('posterIcon'),verifyToken,async(req,res)=>{
    console.log(req.body,req.file)
    let add = await BookModel.addPoster(req.body,req.file,req.doc.userId)
    console.log("addddd",add)
    if(add){
        R(res,true,"Poster added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getPoster",verifyToken,async(req,res)=>{
    let find = await BookModel.getPoster(req.doc.userId)
    console.log("getddd",find)
    if(find){
        R(res,true,"Poster found successfully",find)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updatePosterById",upload.single('posterIcon'),verifyToken,async(req,res)=>{
    console.log(req.body,req.file)
    let updateP = await BookModel.updatePoster(req.body,req.file)
    console.log("addddd",updateP)
    if(updateP){
        R(res,true,"Poster updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deletePosterById",upload.single('posterIcon'),verifyToken,async(req,res)=>{
    let remove = await BookModel.deletePoster(req.body)
    console.log("addddd",remove)
    if(remove){
        R(res,true,"Poster deleted successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/changePosterStatus",verifyToken,async(req,res)=>{
    let update = await BookModel.changePosterStatus(req.body)
    if(update){
        R(res,true,"Status updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addNews",verifyToken,async(req,res)=>{
    let add = await news.addNews(req.body)
    if(add){
        R(res,true,"News section added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getNews",verifyToken,async(req,res)=>{
    let add = await news.getNews(req.body)
    console.log("addddd",add)
    if(add){
        R(res,true,"News section found successfully",add)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/updateNewsById",verifyToken,async(req,res)=>{
    let update = await news.updateNewsById(req.body)
    if(update){
        R(res,true,"News section updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deleteNewsById",verifyToken,async(req,res)=>{
    let deletes = await news.deleteNewsById(req.body);
    if(deletes){
        R(res,true,"News section deleted successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addExamDetails",verifyToken,async(req,res)=>{
    let add = await exam.addExamDetails(req.body)
    if(add){
        R(res,true,"Exam section added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getExamDetails",verifyToken,async(req,res)=>{
    let add = await exam.getExamDetails(req.body)
    console.log("addddd",add)
    if(add){
        R(res,true,"Exam section found successfully",add)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/updateExamDetailsById",verifyToken,async(req,res)=>{
    let update = await exam.updateExamDetailsById(req.body)
    if(update){
        R(res,true,"Exam section updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deleteExamDetailsById",verifyToken,async(req,res)=>{
    let deletes = await exam.deleteExamDetailsById(req.body);
    if(deletes){
        R(res,true,"Exam section deleted successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.get("/getAllReviews",async(req,res)=>{
    let find = await BookModel.getAllReveiw();
    if(find){
        R(res,true,"Reveiw found successfully",find)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/reviewStatusChange",async(req,res)=>{
    let change = await BookModel.changeStatus(req.body);
    if(change){
        R(res,true,"Status changed successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getAllCartDetails",verifyToken,async(req,res)=>{
    let resp = await BookModel.getAllCartDetails();
    if(resp){
        R(res,true,"Cart details found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getAllSupportRequest",verifyToken,async(req,res)=>{
    let resp = await supportService.getAllSupportRequest();
    if(resp){
        R(res,true,"Cart details found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/setTitlesImage",upload.single('titleIcon'),verifyToken,async(req,res)=>{
    let resp = await BookModel.setTitlesImage(req.body,req.doc.userId,req.file);
    R(res,resp.status,resp.message,resp.data)
    
    // if(resp){
    //     R(res,true,"Title image added successfully",{})
    // }
    // else{
    //     R(res,false,"Some error occurs")
    // }
})

router.post("/getTitleData",verifyToken,async(req,res)=>{
    let resp = await BookModel.getTitlesImage();
    if(resp){
        R(res,true,"Title images found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updateTitleDataById",upload.single('titleIcon'),verifyToken,async(req,res)=>{
    let resp = await BookModel.updateTitlesImage(req.body,req.file);
    if(resp){
        R(res,true,"Title images updated successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deleteTitleDataById",verifyToken,async(req,res)=>{
    let resp = await BookModel.deleteTitlesImage(req.body.id);
    if(resp){
        R(res,true,"Title images deleted successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/addPromotionAndOfferDetails",upload.single('promotionIcon'),verifyToken,async(req,res)=>{
    let resp = await BookModel.addPromotionAndOffer(req.body,req.doc.userId,req.file);
    if(resp){
        R(res,true,"Promotion and offers added successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getPromotionAndOfferDetails",verifyToken,async(req,res)=>{
    let resp = await BookModel.getPromotionAndOffer();
    if(resp){
        R(res,true,"Promotion and offers found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updatePromotionAndOfferDetails",upload.single('promotionIcon'),verifyToken,async(req,res)=>{
    let resp = await BookModel.updatePromotionAndOfferById(req.body,req.file);
    if(resp){
        R(res,true,"Promotion and offers updated successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deletePromotionAndOfferDetails",verifyToken,async(req,res)=>{
    let resp = await BookModel.deletePromotionAndOfferById(req.body.id);
    if(resp){
        R(res,true,"Promotion and offers deleted successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addAdminInformation",verifyToken,async(req,res)=>{
    let resp = await BookModel.addAdminInformation(req.body,req.doc.userId);
    if(resp){
        R(res,true,"Admin info added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getAdminInformation",verifyToken,async(req,res)=>{
    let resp = await BookModel.getAdminInformation();
    if(resp){
        R(res,true,"Admin info found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updateAdminInformation",verifyToken,async(req,res)=>{
    let resp = await BookModel.updateAdminInformation(req.body);
    if(resp){
        R(res,true,"Admin info updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addSocialMediaurl",verifyToken,async(req,res)=>{
    let resp = await socialMediaService.addSocialMediaUrl(req.body,req.doc.userId);
    if(resp){
        R(res,true,"Social media info added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getSocialMediaurl",verifyToken,async(req,res)=>{
    let resp = await socialMediaService.getSocialMedia();
    if(resp){
        R(res,true,"Social media info found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updateSocialMediaurlById",verifyToken,async(req,res)=>{
    let resp = await socialMediaService.updateSocialMediaById(req.body);
    if(resp){
        R(res,true,"Social media info updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/deleteSocialMediaurlById",verifyToken,async(req,res)=>{
    let resp = await socialMediaService.deleteSocialMediaById(req.body);
    if(resp){
        R(res,true,"Social media info deleted successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addCurrentAffairsFile",upload.single('file'),verifyToken,async(req,res)=>{
    let resp = await currentAffairsService.add(req.file,req.body,req.doc.userId);
    if(resp){
        R(res,true,"Current Affairs added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.get("/getCurrentAffairsFile",verifyToken,async(req,res)=>{
    let resp = await currentAffairsService.get();
    if(resp){
        R(res,true,"Current Affairs found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updateCurrentAffairsFile",upload.single('file'),verifyToken,async(req,res)=>{
    let resp = await currentAffairsService.update(req.body,req.file,req.doc.userId);
    if(resp){
        R(res,true,"Current Affairs updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/deleteCurrentAffairsFile",verifyToken,async(req,res)=>{
    let resp = await currentAffairsService.remove(req.body.id);
    if(resp){
        R(res,true,"Current Affairs deleted successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

// router.post("/addTestSeries",upload.fields([{ name: 'pdfFile', maxCount: 1 },{ name: 'pptFile', maxCount: 1 },{ name: 'pptPdfFile', maxCount: 1 },{ name: 'editableFile', maxCount: 1 }]),verifyToken,async(req,res)=>{
//     let resp = await TestSeriesService.add(req.file,req.doc.userId,req.body);
router.post("/addTestSeries",upload.single('file'),verifyToken,async(req,res)=>{
    let resp = await TestSeriesService.add(req.file,req.doc.userId,req.body);
    if(resp){
        R(res,true,"Test Series added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/getTestSeries",verifyToken,async(req,res)=>{
    let resp = await TestSeriesService.get();
    if(resp){
        R(res,true,"Test Series found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updateTestSeries",upload.single('file'),verifyToken,async(req,res)=>{
    let resp = await TestSeriesService.update(req.body,req.file,req.doc.userId);
    if(resp){
        R(res,true,"Test Series updated successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/deleteTestSeries",verifyToken,async(req,res)=>{
    let resp = await TestSeriesService.remove(req.body.id);
    if(resp){
        R(res,true,"Test Series deleted successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.post("/addDesign",upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'file', maxCount: 1 }]),verifyToken,async(req,res)=>{
    let resp = await DesignService.add(req.body,req.files,req.doc.userId);
    if(resp){
        R(res,true,"Design added successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getDesign",verifyToken,async(req,res)=>{
    let resp = await DesignService.get();
    if(resp){
        R(res,true,"Design added successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updateDesign",upload.fields([{ name: 'icon', maxCount: 1 }, { name: 'file', maxCount: 1 }]),verifyToken,async(req,res)=>{
    let resp = await DesignService.update(req.body,req.files,req.doc.userId);
    if(resp){
        R(res,true,"Design update successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deleteDesign",verifyToken,async(req,res)=>{
    let resp = await DesignService.remove(req.body);
    if(resp){
        R(res,true,"Design removed successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/addPreviousYearPaper",upload.single('file'),verifyToken,async(req,res)=>{
    let add = await previousYearPaperService.add(req.body,req.file,req.doc.userId)
    console.log("addddd",add)
    if(add){
        R(res,true,"Paper added successfully",{})
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.get("/getPreviousYearPaper",verifyToken,async(req,res)=>{
    let resp = await previousYearPaperService.get();
    if(resp){
        R(res,true,"Paper found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/updatePreviousYearPaper",upload.single('file'),verifyToken,async(req,res)=>{
    let resp = await previousYearPaperService.update(req.body,req.file,req.doc.userId);
    if(resp){
        R(res,true,"Paper updated successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.post("/deletePreviousYearPaper",verifyToken,async(req,res)=>{
    let resp = await previousYearPaperService.remove(req.body);
    if(resp){
        R(res,true,"Paper removed successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})

router.get("/getAllTypingQuery",verifyToken,async(req,res)=>{
    let resp = await TypingService.get();
    if(resp){
        R(res,true,"Typing data found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
router.get("/getAllDataTranslateQuery",verifyToken,async(req,res)=>{
    let resp = await dataTranslate.get();
    if(resp){
        R(res,true,"Data translate data found successfully",resp)
    }
    else{
        R(res,false,"Some error occurs")
    }
})
module.exports = router