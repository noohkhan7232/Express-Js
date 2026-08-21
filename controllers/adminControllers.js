const router = require("../routes/adminRoutes")


const adminDefault = (req,res)=>{
    res.send("<h1 align='center'>Admin Default Page </h1>")
}

const adminHome = (req,res)=>{
    // res.send("<h1 align='center'>Admin Default Page </h1>")
    res.status(200).json({
        success: true,
        message: "Admin Home Page",
        data: {uid: 1001, unm: "Sachin"},
    });
}





module.exports = {adminDefault, adminHome}