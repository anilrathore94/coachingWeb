const bookModels = require("../models/bookmodels")
const R = require("../utils/responseHelper")

const BookModel = {}



BookModel.addcategoryOfBook = async(data,userId)=>{
    data.userId = userId
    let add = await bookModels.addCategory(data)
    return add
}
BookModel.getcategoryOfBook = async(userId)=>{
    let add = await bookModels.getCategory(userId)
    return add
}
BookModel.updatecategoryOfBookById = async(data)=>{
    let add = await bookModels.updateCategory(data.id,data.categoryName)
    return add
}
BookModel.deletecategoryOfBookById = async(data)=>{
    let add = await bookModels.deleteCategory(data.id)
    return add
}
BookModel.changeCategoryStatus = async(data)=>{
    let add = await bookModels.changeStatus(data)
    return add
}
BookModel.changeBookStatus = async(data)=>{
    let add = await bookModels.changeStatusOfBook(data)
    return add
}
BookModel.changePosterStatus = async(data)=>{
    let add = await bookModels.changeStatusOfPoster(data)
    return add
}
BookModel.addBookDetails = async(body,file,userId)=>{
    console.log("body,file",body,file)
    let mrp = typeof(body.mrp) == "string"? parseFloat(body.mrp):body.mrp
    let sellingPrice = typeof(body.sellingPrice) == "string"? parseFloat(body.sellingPrice):body.sellingPrice
    let discount = mrp-sellingPrice
    discount= (discount/mrp)*100
    let bookDetails = {
        userId:userId,
        categoryId:body.categoryId,
        itemType:body.itemType,
        bookName:body.bookName,
        bookIcon:file['bookIcon'][0].filename,
        samplePdf:file['samplePdf'][0].filename,
        MRP:body.MRP,
        ISBN:body.ISBN,
        author:body.author,
        bookCode:body.bookCode,
        type:body.type,
        language:body.language,
        sellingPrice:body.sellingPrice,
        features:body.features,
        discount:discount,
        
    }
    console.log("bookdetailsuploadedsuccessfully",bookDetails)
    let add = await bookModels.addBookDetails(bookDetails)
    return add
}

BookModel.getBooks = async(userId)=>{
    let add = await bookModels.getBookLists(userId)
    return add
}
BookModel.updateBookDetails = async(body,file)=>{
    let discount =typeof(body.MRP) == "string" || typeof(body.sellingPrice) == "string"?parseFloat(body.MRP)-parseFloat(body.sellingPrice):body.MRP-body.sellingPrice
    console.log("body,file",discount)

    discount= (discount/body.MRP)*100
    let bookDetails = {
        categoryId:body.categoryId, 
        itemType:body.itemType,
        bookName:body.bookName,
        MRP:body.MRP,
        ISBN:body.ISBN,
        author:body.author,
        bookCode:body.bookCode,
        type:body.type,
        language:body.language,
        sellingPrice:body.sellingPrice,
        discount:discount,
        features:body.features,
        
    }
    if(file && file.filename){
        bookDetails.bookIcon = file.filename
    }
    else{
        bookDetails.bookIcon = body.bookIcon
    }
    console.log("bookdetailsuploadedsuccessfully",bookDetails)
    let add = await bookModels.updateBookDetailsById(body._id,bookDetails)
    return add
}
BookModel.deleteBookDetails = async(data)=>{
    let add = await bookModels.deleteBookDetails(data.id)
    return add
}

BookModel.addBookFiles = async(file,userId,body)=>{
    let data = {
        userId:userId,
        fileType:body.fileType,
        bookId:body.bookId,
        file:file.filename
    }
    let add = await bookModels.addBookFiles(data)
    return add
}
BookModel.getBookFiles = async()=>{
    let get = await bookModels.getBookFiles()
    return get
}
BookModel.updateBookFiles = async(body,file,id)=>{
    let details = {
        bookId:body.bookId,
        fileType:body.fileType
    }
    if(file.filename){
        details.file = file.filename
    }
    else{
        details.file = body.file
    }
    let add = await bookModels.updateBookFiles(details,body.id)
    return add
}
BookModel.removeBookFiles = async(data)=>{
    let add = await bookModels.deleteBookFiles(data)
    return add
}

BookModel.addPoster = async(body,file,userId)=>{
    let discount = body.mrp-body.sellingPrice
    discount= (discount/body.mrp)*100
    let bookDetails = {
        userId:userId,
        categoryId:body.categoryId,
        posterIcon:file.filename
    }
    let add = await bookModels.addPosterImage(bookDetails)
    return add
}

BookModel.getPoster = async(userId)=>{
    let add = await bookModels.getPosters(userId)
    return add
}

BookModel.updatePoster = async(body,file)=>{
    let poster = {
        categoryId:body.categoryId
    }
    if(file && file.filename){
        poster.posterIcon = file.filename
    }
    else{
        poster.posterIcon = body.bookIcon
    }
    console.log("bookdetailsuploadedsuccessfully",poster)
    let update = await bookModels.updatePostersById(body._id,poster)
    return update
}
BookModel.deletePoster = async(data)=>{
    let remove = await bookModels.deletePosterById(data.id)
    return remove
}

BookModel.getAllCategory = async() => {
    let get = await bookModels.getallcategory()
    return get
}
BookModel.getAllBooks = async() => {
    let get = await bookModels.getallbooks()
    return get
}
BookModel.getAllBooksByCategoryId = async(data) => {
    let get = await bookModels.getallbooksbycategoryId(data)
    return get
}
BookModel.getAllPosters = async() => {
    let get = await bookModels.getallposters()
    return get
}
BookModel.addFeedBack = async(data) => {
    let get = await bookModels.addfeedback(data)
    return get
}
BookModel.addBookReviews = async(data) => {
    let get = await bookModels.addbookreview(data)
    return get
}
BookModel.getAllReveiw = async()=>{
    let add = await bookModels.getallreviews()
    return add
}

BookModel.changeStatus = async(data)=>{
    let add = await bookModels.changeStatusOfReview(data)
    return add
}
BookModel.addBookToCart = async(datas,userId,userIp)=>{
    let data = {
        ...datas,
        systemIp:userIp
    }
    if(userId){
        data.userId = userId
    }
    let add = await bookModels.addbooktocart(data)
    return add
}
BookModel.getBookFromCart = async(userIp)=>{
    let add = await bookModels.getbookfromcart(userIp)
    return add
}
BookModel.getCartInfo = async(query)=>{
    let add = await bookModels.getcarttotalAmountAndQuentity(query)
    return add
}
BookModel.getBookDetailsById = async(id)=>{
    let get = await bookModels.getbookdetailsbyid(id)
    return get
}
BookModel.getBookfromCartByUserId = async(id)=>{
    let get = await bookModels.getbookfromcartbyuserId(id)
    return get
}
BookModel.removeItemFromCart = async(id)=>{
    let get = await bookModels.removefromcart(id)
    return get
}
BookModel.getAllCartDetails = async()=>{
    let get = await bookModels.getcartinfo()
    return get
}
BookModel.setTitlesImage = async(body,userId,file)=>{
    let data = {
        userId:userId,
        title:body.title,
        icon:file.filename
    }
    let findIdTitleExist = await bookModels.findIfTitleExist(data.title)

    if(findIdTitleExist){
        return {
            status:false,
            message:"Title Already exists",
            data:{}
        }
    }
    let get = await bookModels.settitleimage(data)
    return get
}
BookModel.getTitlesImage = async()=>{
    let get = await bookModels.gettitleimage()
    return get
}
BookModel.updateTitlesImage = async(body,file)=>{
    let title = {
        title:body.title
    }
    if(file && file.filename){
        title.icon = file.filename
    }
    else{
        title.icon = body.titleIcon
    }
    console.log("sdbsdjsdfsdjfgdsj",body,title)
    let update = await bookModels.udpatetitleimagebyid(body._id,title)
    return update
}
BookModel.deleteTitlesImage = async(id)=>{
    let get = await bookModels.deletetitleimagebyid(id)
    return get
}
BookModel.addPromotionAndOffer = async(body,userId,file)=>{
    let data = {
        userId:userId,
        categoryId:body.categoryId,
        icon:file.filename
    }
    let get = await bookModels.addpromotionandoffer(data)
    return get
}
BookModel.getPromotionAndOffer = async()=>{
    let get = await bookModels.getpromotionandoffer()
    return get
}
BookModel.updatePromotionAndOfferById = async(body,file)=>{
    let data = {
        categoryId:body.categoryId
    }
    if(file && file.filename){
        data.icon = file.filename
    }
    else{
        data.icon = body.promotionIcon
    }
    console.log("iddata=====>>>>>>>>",body,data)

    let update = await bookModels.updatepromotionandofferbyid(body._id,data)
    return update
}
BookModel.deletePromotionAndOfferById = async(id)=>{
    let get = await bookModels.deletepromotionandofferbyid(id)
    return get
}
BookModel.addAdminInformation = async(data)=>{
    let get = await bookModels.getadmininformation()
    if(get.length>0){
        return false
    }
    let datas={
        ...data,
        userId:userId
    }
    let add = await bookModels.addadmininformation(datas)
    return add
}
BookModel.getAdminInformation = async()=>{
    let add = await bookModels.getadmininformation()
    return add
}
BookModel.updateAdminInformation = async(body)=>{
    let data = {
        emailId:body.emailId,
        mobileNumber:body.mobileNum,
        address:body.address
    }
    let add = await bookModels.updateadmininformation(body.id,data)
    return add
}
BookModel.getAllEBooks = async(data) => {
    let get = await bookModels.getallebooks(data)
    return get
}
module.exports = BookModel