const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

//GETTING CONN.JS FILE
require("./db/conn")

//GETTING MODEL FILE
const Student = require("./model/students");


//REGISTERING NEW STUDENT
//HANDLING DELETE REQUEST USING ASYNC AND AWAIT FUNCTION
app.delete("/students/:id", async (req, res) => {
    try {
        const _id=req.params.id;
        const data = await Student.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send("Error in ID");
        }
        res.send(data)

    } catch (e) {
       console.log(e);
    }
});

//LISTENING TO THE SERVER
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
