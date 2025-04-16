const mongoose = require("mongoose");

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
        minLength: 8
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
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
        default: ""
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