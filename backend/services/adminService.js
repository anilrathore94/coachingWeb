const userModel = require("../models/usermodels")
const authModal = require("../models/authmodels");
const validators = require("../utils/validator");
const AppErr = require("../utils/error")
const bcrypt = require("../utils/bcrypt")
const jwt = require("jsonwebtoken");

adminS = {}

adminS.login = async (userId, password) => {
    console.log(userId, password);
    if (!userId) {
        // return "Please Enter UserId";
        let err = new Error("Please Enter UserId")
        err.status = 403;
        throw err;
    }
    else if (!password) {
        console.log("pass");
        let err = new Error("Paswword required")
        err.status = 403;
        throw err;
    }
    let emailVal = await validators.emailValidation(userId);
    // let val = await authModel.adminLogin(userId, password)
    let findadmin = await authModal.findAdmin(userId, password);

    if (!findadmin) {
        throw new AppErr("No User Found With This Email Address!!", 403);
    }
    // let findadminss = JSON.parse(findadmin)

    console.log(findadmin["permissions"], "All Permissions");
    let findPermisson = findadmin.permissions
    let perArr = findPermisson.map(a => {
        return a.value
    })
    console.log("Map array: ", perArr);

    console.log(findadmin, "data");
    if (findadmin.active != "1") {
        throw new AppErr("Account is not active!!", 403);
    }
    if (findadmin) {
        console.log("subadmin data: ", password,findadmin.password);
        const compare = await bcrypt.passwordComparision(password, findadmin.password);
        if (compare) {
            const userData = {
                // userId: val["userId"],
                userId: findadmin._id,
                emailId: findadmin.email,
                firstName: findadmin.first_name,
                lastName: findadmin.last_name,
                permissions: perArr,
                userType: 1
            }
            // userData.emailId === '' ? userData.userType = 1 : userData.userType = 0
            const jwtdata = {
                expiresIn: process.env.JWT_TIMEOUT_DURATION,
            }
            const secret = process.env.JWT_AD_SECRET;
            userData.token = jwt.sign(userData, secret, jwtdata);

            return userData;

        } else {
            throw new AppErr("Invalid Password!!", 403);
        }
    } else {
        throw new AppErr("No user found!!", 403);
    }

}

adminS.getPermission = async(userId) => {
    let findAdmin = await authModal.findPermission(userId)
    let findPermisson = findAdmin.permissions
    let perArr = findPermisson.map(a => {
        return a.value
    })
    const userData = {
        // userId: val["userId"],
        userId: findAdmin._id,
        emailId: findAdmin.email,
        firstName: findAdmin.first_name,
        lastName: findAdmin.last_name,
        permissions: perArr,
        userType: 1
    }
    return userData

}

module.exports = adminS