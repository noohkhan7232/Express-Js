const mongoose= require('mongoose')
const userSchema = new mongoose.Schema({
    userName:{type:String, required:true} ,

    userEmail:{type:String, 
        required:true, 
        unique:true
    },
    userPwd :{type:String,required:true},
    isActive:{type:Boolean,default:true},
    createdAt:{type:Date,required:true,default:Date.now},
    role:{
        type:String,
        enum:["admin","user"],
        required:true,
        default:"user",
    },
})


const UserModel = mongoose.model("AppUsers", userSchema)
mongoose.exports = UserModel;