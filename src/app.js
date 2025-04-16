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

// Get  the /user from database

app.get('/user', async (req, res) => {
    const userEmail = req.body.emailId;

    try{
        const user = await User.find({emailId: userEmail})
        if(user.length == 0){
            res.status(404).send("user not found");
        }else{
            res.send(user);
        }
    }catch (err) {
        res.status(400).send({error: "somthing went wrong", errorDescription: err.message})
    }  
})

// Fetch API -  Get/feed all users from the database

app.get("/feed", async (req, res) => {
    try{
        const users = await User.find({});
        // console.log(users);
        res.send(users);
    }catch(err) {
        res.status(404).send({error: err.message});
    }
})

// delete a user from the database

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try{
        await User.findOneAndDelete({_id: userId});
        // await User.findOneAndDelete(userId);
        res.send(`User ${userId} deleted Successfully`);
    }catch(err) {
        res.status(404).send({error: err.message});
    }
})

// update data of user

app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        const user = await User.findByIdAndUpdate({_id: userId}, data, {returnDocument: "after"});
        res.send(`User updated Successfully`);
        // console.log(user);
        
    }catch(err) {
        res.status(404).send("Updation Error " + err.message);
    }
})

connectDB()
    .then(() => {
        console.log('MongoDB connected...');
        app.listen(7777, ()=>{
            console.log("Server is successfully listening on port 7777"); 
        });
    }).catch((err) => console.error("Database cann't be connected"));
