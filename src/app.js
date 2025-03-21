// const express = require("express");
// const app = express();
// const User = require("./models/user");
// // const user = require("./models/user");
// const { Mongoose } = require("mongoose");
// const { connectDB } = require("./config/database")


// app.use(express.json());
// app.post("/signup", async (req, res) => {
//     // console.log(req.body)
//     const user = new User(req.body);
//     try{
//         await user.save();
//         res.send("User Created Successfully");
//     }catch(err){
//         res.status(400).send({ error: "Error saving the user", message: err.message });
//     }
//     // creating a new instance of the user model
//     // const user = new User(userObj);
// })


// // GET user by email
// app.get("/user", async (req, res) => {
//     const userEmail = req.body.emailId;
//     try{
//         const users = await User.find({emailId: userEmail})
//         if(users.length === 0){
//             // console.log(users);
//             res.status(404).send("User not found");
//         }else{
//             res.send(users);
//         }
//     }catch(err){
//         res.status(400).send("Something went wrong");
//     }
// })


// // Feed API - GET / feed - get all the users from the database
// app.get("/feed", async (req, res) => {
//     try{
//         const users = await User.find({});
//         res.send(users);
//     }catch(err){
//         res.status(400).send("Something went wrong");
//     }
// })
// connectDB()
//     .then(() => {
//         console.log('MongoDB connected...');
//         app.listen(7777, ()=>{
//             console.log("Server is successfully listening on port 7777"); 
//         });
//     }).catch((err) => console.error("Database cann't be connected"));












const express = require("express");

const app = express();

// app.use((req, res) => {
//     res.send("Hello from the server");
// })

app.use("/test", (req, res) => {
    res.send("Hello from the test server");
})
app.use("/work", (req, res) => {
    res.send("Hello from the work server");
})
// app.use("/", (req, res) => {
//     res.send("Hello from the server");
// })

app.listen(3000, () => {
    console.log("Server is successfully running at Port 3000");
});