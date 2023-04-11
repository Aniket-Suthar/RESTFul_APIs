const express = require("express");
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

//GETTING CONN>JS FILE
require("./db/conn")

//GETTING MODEL FILE
const Student = require("./model/students");


//REGISTERING NEW STUDENT
//HANDLING POST REQUEST USING ASYNC AND AWAIT FUNCTION
app.post("/student", async (req, res) => {
    try {
        const user = new Student(req.body);

        //SAVING DATA TO DB
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch (e) {
        res.status(400).send(e);
    }
})
app.get("/", (req, res) => {
    res.send("Hello  and welcome from the GET request")
});

//LISTENING TO THE SERVER
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
