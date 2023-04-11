const mongoose = require("mongoose");
const validator = require("validator");


//DEFINING A NEW SCHEMA
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
    },

    email: {
        type: String,
        required:true,
        unique: [true, "Email is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is not valid ,Enter again...");
                }
        }
    },
    phone :{
        type:Number,
        maxLength:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
});
 

//CREATING A NEW COLLECTION
const Student= new mongoose.model("Student",studentSchema);

module.exports=Student;
