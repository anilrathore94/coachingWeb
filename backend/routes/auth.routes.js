const express = require("express")
const router = express.Router();
const authService = require("../services/authServices");
const BookModel = require("../services/bookService");
const R = require("../utils/responseHelper");
const IP = require('ip');
const verifyToken = require("../utils/verifyToken");

router.post('/signup', async (req, res) => {
    let authRes = await authService.signUp(req.body)


    R(res, true, "Registration Success", authRes)


})

router.post('/login', async (req, res) => {
        
    const ipAddress = IP.address();

    let authRes = await authService.loginService(req.body.signId, req.body.password,ipAddress)

    // res.json({ status: true, "message": "Login Success", authRes })
    R(res, true, "Login Success", authRes);


})

router.post("/changepassword", verifyToken, async (req, res) => {

    const passRes = await authService.changePassword(req.doc.userId, req.body)

    R(res, true, passRes);
})

module.exports = router 