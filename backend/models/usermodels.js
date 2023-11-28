const db = require("../utils/dbConn");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const apiResponse = require("../utils/apiResponses");
// const AppErr = require("../utils/error");
//const { x } = require("pdfkit");
let ObjectId = require("mongodb").ObjectID;
authModel = {};
const user = mongoose.Schema({
    name: { type: String },
    email: { type: String },
});

authModel.addUser = async()=> {
    let data ={
        name:"ansari",
        email:"ansari@gmail.com"
    } 
    const add = await db.connectDb("users",user)
    const addUser = await add.create(data)
    const count =await add.countDocuments({})
    console.log("count",count)
    return count
}
authModel.getUser = async()=> {
    const add = await db.connectDb("users",user)
    const getUser = await add.find({})
    return getUser
}


module.exports = authModel;


