const router = require("../routes/adminRoutes")


const adminDefault = (req,res)=>{
    res.send("<h1 align='center'>Admin Default Page </h1>")
}

const STATUS_CODES = require('../constants/statusCodes')
const MESSAGES = require("../constants/messages")
const{ sendSuccess, sendError } = require('../utils/responseHepler')
const adminHome = (req,res)=>{
    // res.send("<h1 align='center'>Admin Default Page </h1>")
    // res.status(200).json({
    //     success: true,
    //     message: "Admin Home Page",
    //     data: {uid: 1001, unm: "Sachin"},
    // });

    return sendSuccess(res,
        STATUS_CODES.OK,
        MESSAGES.USER.COMMON.GENERAL,
        {uid: 1001, unm: "Sachin"});
}



const UserModel = require("../models/userModel");
const admonAddUser = (req,res)=>{
    const newUser = new UserModel({
        //write here after juma
    })
}


module.exports = {adminDefault, adminHome, adminAddUser}