const mongoose = require("mongoose");


//Sending the file to apireq.js

mongoose.connect("mongodb://0.0.0.0:27017/Students_Api_DB",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Connection is Successful...")
})
.catch((err)=>{
    console.log("No connection is established");
});
