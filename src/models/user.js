const mongoose = require("mongoose");
const validator = require("validator");

const userScheam = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: 4
    },
    lastName:{
        type: String
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Not a Strong Password: " + value);
            }
        }

    },
    emailId:{
        type: String,
        required: true,
        // unique: true,
        lowerCase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email Formate: " + value);
            }
        }
    },
    age:{
        type: Number,
        min: 18
    },
    gender:{
        type: String,
        required: true,
        validate(value){
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Gender is not valid")
            }
        }
    },
    photoUrl:{
        type: String,
        default: "akfjakjflk",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL Formate: " + value);
            }
        }
    },
    about:{
        type: String,
        default: "A new user Added Successfully"
    },
    skills:{
        type: [String]
    }
},
 {
    timestamps: true
 })

module.exports = mongoose.model("User", userScheam);