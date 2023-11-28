var jwt = require("jsonwebtoken");
// var apiResponse = require("../helpers/apiResponses");
const verifyJWT = (req, res, next) => {
    try {
        jwt.verify(req.headers.authorization, process.env.JWT_AD_SECRET, (err, verify) => {
            if (err) {
                let err = new Error("Unauthorized")
                err.status = 404;
                throw err;
            } else {
                let decoded = jwt.decode(req.headers.authorization, {
                    complete: true
                });
                req.doc = decoded.payload;
                if (req.doc.userType != 1) {
                    let err = new Error("Unauthorized")
                    err.status = 404;
                    throw err;
                }
                next();
            }
        })
    } catch (e) {
        console.log(e)
        throw (e)
    }
}

module.exports = verifyJWT