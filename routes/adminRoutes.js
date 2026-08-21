
const express = require('express')
const router = express.Router()

const{ adminDefault, adminHome} = require("../controllers/adminControllers")

// http://localhost:8081/admin
router.get("/", adminDefault)

// http://localhost:8081/admin/home

router.get("/home", adminHome)

module.exports = router;