// const adminAuth = (req,res,next) => {
//     console.log("admin auth is getting checked...");
    
//     const token = "xyz";
//     const isAdminAuthorized = token === "xyz";
//     if(!isAdminAuthorized){
//         res.status(401).send("Unauthorized admin");
//     }else{
//         console.log("authorized admin")
//         next();
//     }
// }

// const userAuth = (req,res,next) => {
//     console.log("User auth is getting checked...");
    
//     const token = "xyjdz";
//     const isAdminAuthorized = token === "xyz";
//     if(!isAdminAuthorized){
//         res.status(401).send("Unauthorized user");
//     }else{
//         console.log("authorized user")
//         next();
//     }
// }

// module.exports = {adminAuth,userAuth}