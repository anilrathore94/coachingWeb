const db = require("../utils/dbConn");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const apiResponse = require("../utils/apiResponses");
// const AppErr = require("../utils/error");
//const { x } = require("pdfkit");
let ObjectId = require("mongodb").ObjectID;

authModel={}


const loginSchema = mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String, required: false },
        emailId: { type: String },
        gender: { type: String },
        mobileNumber: { type: String },
        dob: { type: String },
        address1: { type: String },
        profileIcon: { type: String },
        address2: { type: String },
        city: { type: String },
        pincode: { type: String },
        pMode: { type: String },
        country: { type: String },
        state: { type: String },
        password: { type: String, required: true },
        // client_ip: { type: String, default: "" }, //1 verify, 2 reject, 0 pending
        userType: { type: Number, default: 0, enum: [0, 1] }, // 1 for admin
    },
    { timestamps: true }
);

const subadmin = mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    gender: { type: String },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    dob: { type: String },
    password: { type: String, required: true },
    active: { type: String, default: 1 },
    permissions: { type: Array, default: [] }
});

authModel.findAdmin = async(emailId, password) => {
    let findadmin = await db.connectDb("subadmins",subadmin)
    let val = await findadmin.findOne(
        { email: emailId },
        { __v: 0 }
    );
    console.log("findfindfind======>>>",val)
    if(Object.keys(val).length>0){
        return val
    }
    else{
        return false
    }
}

authModel.findPermission = async(userId) => {
    let connect = await db.connectDb("subadmins",subadmin)
    let find = await connect.findOne({_id:userId})
    if(Object.keys(find).length>0){
        return find
    }
    else{
        return false
    }
}

authModel.login = async (key, email, pass) => {
    // console.log(key, emailId, pass);
    let check = {};
    check[key] = email;
    console.log(check, "Check obj");
    const Login = await db.connectDb("users", loginSchema);
    let val = await Login.findOne(check, { __v: 0 });
    
    if (!val) {
        // console.log("resolve");
        return false 

    }
    
    return val;
};

authModel.signUp = async (data) => {
    const Login = await db.connectDb("users", loginSchema);
    let insData = await Login.insertMany(data);
    console.log(insData);
    if (insData.length > 0) {
        return insData[0];
    } else {
        throw new AppErr("Registration Failed", 403);
        // return apiResponse.err("Registration Failed", 403);
    }
};

authModel.profileupdate = async (id,data) => {
    const Login = await db.connectDb("users", loginSchema);
    let insData = await Login.updateOne({_id:id},{$set:data});
    if (insData.modifiedCount > 0 || insData.upsertedCount > 0) {
        return true;
    } else {
        return false
        // return apiResponse.err("Registration Failed", 403);
    }
};
authModel.showprofile = async (id) => {
    const user = await db.connectDb("users", loginSchema);
    let insData = await user.findOne({_id:id});
    if (insData) {
        return insData;
    } else {
        return false
        // return apiResponse.err("Registration Failed", 403);
    }
};
authModel.updateemailandmobile = async (id,data) => {
    console.log('changestatus=======>>>>>>>>',id,data);
    const Login = await db.connectDb("users", loginSchema);
    let insData = await Login.updateOne({_id:id},{$set:{emailId:data.emailId,mobileNumber:data.mobileNumber}});
    if (insData.modifiedCount > 0 || insData.upsertedCount > 0) {
        return true;
    } else {
        return false
        // return apiResponse.err("Registration Failed", 403);
    }
};

authModel.subadmin = async (data) => {
    const sub = await db.connectDb("subadmins", subadmin);
    let insData = await sub.create(data);
    console.log(insData)
    if (insData || insData.length > 0) {
        return insData;
    } else {
        return apiResponse.err("Registration Failed", 403);
    }
};
authModel.findsubadmin = async (emailId) => {
    const sub = await db.connectDb("subadmin", subadmin);
    let val = await sub.findOne(
        { email: emailId },
        { __v: 0 }
    );
    // console.log(val);
    if (val) {
        console.log("resolve");
        return val;
    }
}
authModel.findsubadminlist = async (emailId) => {
    const sub = await db.connectDb("subadmins", subadmin);
    let val = await sub.find({email:{$ne:"admin@gmail.com"}})
    if (val.length>0) {
        return val;
    }
    else{
        return false
    }
}
authModel.setsubadmin = async (
    _id,
    first_name,
    last_name,
    gender,
    email,
    phone,
    dob,
    permissions,
) => {
    const login = await db.connectDb("subadmin", subadmin);
    const insdata = await login.updateOne(
        { _id: ObjectId(_id) },
        {
            $set: {
                first_name: first_name,
                last_name: last_name,
                gender: gender,
                email: email,
                phone: phone,
                dob: dob,
                permissions: permissions
            },
        },
        { upsert: true, runValidators: true }
    );

    if (insdata.modifiedCount > 0 || insdata.upsertedCount > 0) {
        return true;
    } else {
        return false;
    }
};
authModel.userstatus = async (_id, status) => {
    const login = await db.connectDb("subadmin", subadmin);
    const insdata = await login.updateOne(
        { _id: ObjectId(_id) },
        { $set: { active: status }},
        { upsert: true, runValidators: true }
    );

    if (insdata.modifiedCount > 0 || insdata.upsertedCount > 0) {
        return true;
    } else {
        return false;
    }
};

authModel.userdelete = async (_id) => {
    const Login = await db.connectDb("subadmin", subadmin);
    const getId = await Login.findByIdAndDelete(_id);
    // console.log('mob', getId, val, pro)
    if (getId) {
        return getId;
    } else {
        return apiResponse.err("User not Found!!", 403);
    }
};

authModel.changePassword = async (userId, pass) => {
    const Login = await db.connectDb("users", loginSchema);
    const passData = await Login.updateOne(
        { _id: userId },
        { $set: { password: pass } },
        { runValidators: true }
    );
    if (passData.modifiedCount > 0) {
        return true;
    } else {
        return false;
    }
};

authModel.getUserbyId = async (userId) => {
    const Login = await db.connectDb("users", loginSchema);
    let val = await Login.findOne({ _id: ObjectId(userId) }, { __v: 0 });
    if (val) {
        console.log("resolve");
        console.log('val: ', val);
        return val;
    }
};

module.exports = authModel