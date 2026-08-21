require("dotenv").config();


const express =  require('express');
const app = express()

const HOST = process.env.HOST //127.0.0.1
const PORT = process.env.PORT || 8000;


//http://localhost:8000/admin
const adminRoutes = require('./routes/adminRoutes')
app.use("/admin" , adminRoutes)

const userRoutes = require('./routes/userRoutes')
app.use("/user", userRoutes);

//http://localhost:8000/admin/home

// app.get("/admin/home", ( req, res )=>{
//     res.send("<h1 align='center'>My Home Page </h1>");
// });










// http://localhost:8000
app.get("/", ( req, res )=>{
    res.send("Hello World");
})

//http://localhost:8000/home
app.get("/home", ( req, res )=>{
    res.send("<h1 align='center'>My Home Page </h1>");
});


//http://localhost:8000/about
app.get("/about", ( req, res )=>{
    res.send("<h1 align='center'>My About Page </h1>");
});




app.listen(PORT , HOST , (error)=>{

    if (error)
        console.log("Error Occured :" + error);
    else
        console.log(`Server running at http://${HOST}:${PORT}`);
        
        
})