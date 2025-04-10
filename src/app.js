const express = require("express");
const app = express();
const User = require("./models/user");
// // const user = require("./models/user");
// const { Mongoose } = require("mongoose");
const { connectDB } = require("./config/database")


app.use(express.json());
app.post("/signup", async (req, res) => {
    console.log(req.body)
    
    // creating a new instance of the user model
    const user = new User(req.body);
    // creating a new instance of the user model
    // const user = new User({
    //     firstName: "Mohini",
    //     lastName: "Mandal",
    //     emailId: "mohotmandal165@gmail.com",
    //     gender: "girl"
    // });

    try{
        await user.save();
        res.send("User Created Successfully");
    }catch(err){
        res.status(400).send({ error: "Error while saving the user", message: err.message });
    }
    // creating a new instance of the user model
    // const user = new User(userObj);
})



connectDB()
    .then(() => {
        console.log('MongoDB connected...');
        app.listen(7777, ()=>{
            console.log("Server is successfully listening on port 7777"); 
        });
    }).catch((err) => console.error("Database cann't be connected"));
