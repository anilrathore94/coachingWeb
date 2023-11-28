const userModel = require("../models/usermodels");
const authModal = require("../models/authmodels");
const validators = require("../utils/validator");
const AppErr = require("../utils/error")
const bcrypt = require("../utils/bcrypt")
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { getcartinfo } = require("../models/bookmodels");


const auth = {};

auth.addUsers = async() => {
    let userAddition = await authModel.addUser()
    return userAddition 
}
auth.getUsers = async() => {
    let userAddition = await authModel.getUser()
    return userAddition 
}


auth.loginService = async (userId, password,ipAddress) => {

    if (!userId) {
        // return "Please Enter UserId";
        let err = new Error("Please Enter mobile or Email");
        err.status = 403;
        throw err;
    } else if (!password) {
        let err = new Error("Paswword required");
        err.status = 403;
        throw err;
    }
    
    const signupKey = await validators.checkTypeNew(userId);
    let val = await authModel.login(signupKey, userId, password);
    if (val) {
        const compare = await bcrypt.passwordComparision(
            password,
            val.password
        );
        
        // let master_pass = "$2b$10$yxq7Shgk9Jpyikv6ohYtDu/xcjpUdq2RtmxyyteVESia5e0tRuB.a"
        // const system_login = await bcrypt.passwordComparision(password, master_pass)
        if (compare ) {
            const userData = {
                // userId: val["userId"],
                userId: val._id,
                emailId: val.emailId,
                name: val.name,
                lastName: val.lastName,
                mobileNumber: val.mobileNumber,
            };
            let getCartByIp = await BookModel.getbookfromcart(ipAddress)
            console.log("userdatauserdata",getCartByIp,ipAddress);
            if(getCartByIp.length>0){
                let updateCartUserId = await BookModel.updateUserId(ipAddress,userData.userId)
            }

            const jwtdata = {
                expiresIn: process.env.JWT_TIMEOUT_DURATION,
            };
            const secret = process.env.JWT_SECRET;
            userData.token = jwt.sign(userData, secret);
            return userData;
        } else {
            let err = new Error("Invalid Password!!");
            err.status = 403;
            throw err;
        }
    } else {
        let err = new Error("No user found");
        err.status = 403;
        throw err;
    }
};

auth.signUp = async (data) => {
    if (!data.signId) {
        throw new AppErr("Please enter Email Id or Mobile number!!", 406);

    } else if (!data.password) {
        throw new AppErr("Please enter Password!!", 406);

    } else if (!data.name) {
        throw new AppErr("Please enter Name!!", 406);

    }
    // else if (!data.pMode) {
    //     throw new AppErr("Please enter preperation mode!!", 406);

    // }
    // else if (!data.state) {
    //     throw new AppErr("Please enter state!!", 406);

    // }
    const signupKey = await validators.checkTypeNew(data.signId);
    await validators.passwordValidation(data.password);
    let check = await authModel.login(signupKey, data.signId, data.emailId);
    if (check) {
        throw new AppErr("Email Id already exists!!", 406);
    }
    data[signupKey] = data.signId;
    data.userType = 0;
    data.password = await bcrypt.passwordEncryption(data.password);
    let ins = await authModel.signUp(data);
    return ins;
};

auth.addsubadmin = async (data) => {
    if (!data.first_name) {
        apiResponse.err("Please enter First Name !!", 406);
        throw new AppErr("Mobile number  already exists!!", 406);
    } else if (!data.last_name) {
        throw new AppErr("Please enter Last Name !!", 406);
    } else if (!data.gender) {
        throw new AppErr("Please enter Gender !!", 406);
    } else if (!data.email) {
        throw new AppErr("Please enter Email !!", 406);
    } else if (!data.phone) {
        throw new AppErr("Please enter Phone !!", 406);
    } else if (!data.password) {
        throw new AppErr("Please enter password !!", 406);
    } else if (!data.dob) {
        throw new AppErr("Please enter password !!", 406);
    } else if (!data.permissions) {
        throw new AppErr("Please Select Permissions !!", 406);
    }

    await validators.emailValidation(data.email);
    await validators.passwordValidation(data.password);

    let randomhex = crypto.randomBytes(64).toString("hex");
    data.emailVerificationHex = randomhex;

    data.password = await bcrypt.passwordEncryption(data.password);
    let findSubadmin = await authModel.findsubadmin(data.email)
    if (findSubadmin) {
        throw new AppErr("Email Id Already Exists Please choose different email Id!!!")
    }
    let ins = await authModel.subadmin(data);
    return ins;
};
auth.getsubadmins = async() => {
    let get = await authModel.findsubadminlist()
    return get
}
auth.setsudadmin = async (_id, first_name, last_name, gender, email, phone, dob, permissions) => {
    if (!first_name) {
        throw new AppErr("Please Enter First Name!!!", 406)
    } else if (!last_name) {
        throw new AppErr("Please Enter Last Name!!!", 406)
    } else if (!gender) {
        throw new AppErr("Please Select Gender!!!", 406)
    } else if (!email) {
        throw new AppErr("Please Enter Email !!!", 406)
    } else if (!phone) {
        throw new AppErr("Please Enter Mobile Number!!!", 406)
    } else if (!dob) {
        throw new AppErr("Please Select Registration Date!!!", 406)
    } else if (!permissions) {
        throw new AppErr("Please Select Permissions!!!", 406)
    }
    let usersatuts = await authModel.setsubadmin(_id, first_name, last_name, gender, email, phone, dob, permissions);
    return usersatuts;
}
auth.subadminstatus = async (_id, status) => {
    try {
        let usersatuts = await authModel.userstatus(_id, status);
        return usersatuts;
    } catch (error) {
        console.log("error", error);
    }
};
auth.deletesubuser = async (_id) => {
    try {
        let usersatuts = await authModel.userdelete(_id);
        return usersatuts;
    } catch (error) {
        console.log("error", error);
    }
};

auth.changePassword = async (userId, data) => {
    if (!userId) {
        // return "Please Enter UserId";
        let err = new Error("Please Enter UserId");
        err.status = 403;
        throw err;
    } else if (!data.oldPassword) {
        console.log("pass");
        let err = new Error("Paswword required");
        err.status = 403;
        throw err;
    } else if (!data.newPassword) {
        console.log("pass");
        let err = new Error("Enter New Paswword!!");
        err.status = 403;
        throw err;
    } else if (data.newPassword != data.cPassword) {
        console.log("pass");
        let err = new Error("New Paswword not matched!!");
        err.status = 403;
        throw err;
    }
    let val = await authModel.getUserbyId(userId);
    console.log(val, userId);
    const compare = await bcrypt.passwordComparision(
        data.oldPassword,
        val.password
    );
    if (compare) {
        const password = await bcrypt.passwordEncryption(data.newPassword);
        const insData = await authModel.changePassword(userId, password);
        if (insData) {
            return "Password changed successfully";
        } else {
            // apiResponse.err(
            //     "Some error in changing password!!",
            //     406
            // );
            throw new AppErr("Some error in changing password!!",
                406);
        }
    } else {
        let err = new Error("Invalid Password!!");
        err.status = 403;
        throw err;
    }
};



module.exports = auth;



