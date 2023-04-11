/*
Representational state transfer is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the internet.
As per the REST (REpresentational “State” Transfer) architecture, the server does not store any state about the client session on the server-side. 
This restriction is called Statelessness.
*/

/*
express.json()  is a method in express to recognize the incoming
request Object as a JSON object,THis method is called a middleware
in our application using code : app.use(express.json()) 
*/

const express=require("express");
const validator=require("validator");
const exp = require("constants");
const port=process.env.PORT || 3000;
const app=express();

app.use(express.json());

//GETTING CONN>JS FILE
require("./db/conn")

//GETTING MODEL FILE
const Student=require("./model/students");


//REGISTERING NEW STUDENT
//HANDLING POST REQUEST 
app.post("/students",(req,res)=>{

    //FETCHING DATA FROM THUNDERCLIENT OR POSTMAN\
    const user= new Student(req.body)

    //PRINTING DATA FROM TC TO CONSOLE
    console.log(user);

    //SAVING DATA TO DB
    user.save()
    .then(()=>{
        res.status(201).send(user);
        // console.log("Data saved successfully...");
    })
    .catch((err)=>{
        res.status(400).send(err);
        // console.log("Sorry Data is not Saved in DB")
    })
   
    // res.send("Hello from the POST side")
})


app.get("/",(req,res)=>{
    res.send("Hello  and welcome from the GET request")
});

//LISTENING TO THE SERVER
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});
