const express = require("express");
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

//GETTING CONN.JS FILE
require("./db/conn")

//GETTING MODEL FILE
const Student = require("./model/students");


//REGISTERING NEW STUDENT
//HANDLING GET REQUEST USING ASYNC AND AWAIT FUNCTION
app.get("/students", async (req, res) => {
    try {
        //GETTING THE DATA USING "find()" METHOD
        const userData = await Student.find();

        res.status(200).send(userData);

    } catch (err) {
        res.status(400).send(err);
    }
});


//GETTING USER SPECIFIC DATA
app.get("/students/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const Data=await Student.findById(_id)
        res.send(Data);

        if(!Data){
            res.status(404).send("Data DNE...");
        }
        else{
            res.send(Data);
        }
    }catch(e){
        res.status(400).send(e);
    }
})

//LISTENING TO THE SERVER
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
