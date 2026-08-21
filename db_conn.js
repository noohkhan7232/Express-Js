


const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

.then(()=>{
    console.log("MongoDb Connected");
    

})
.catch((error)=>{
    console.log("Error : " + error);
    
});

module.exports = mongoose
