
const express = require('express')
const router = express.Router()

// http://localhost:8081/user
router.get("/" , (req, res)=>{
    res.send("<h1 align='center'>user Default Page </h1>")
})


//http://localhost:8000/admin/home
router.get("/home" , (req, res)=>{
    res.send("<h1 align='center'> Router Admin Home Page </h1>")
})

module.exports = router