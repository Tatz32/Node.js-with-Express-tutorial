const userRouter = require("./routes/user")

const express = require("express");
const { popScopeId } = require("vue");
const app = express();
const PORT = 3010;


 //when you use middlewear, you have to use it on the top
//app.use(mylogger);

//routing
app.use("/user", userRouter);

//app.use(express.static("public"));
app.set("view engine", "ejs"); //set template engine

app.get("/",(req,res)=>{
    res.render("index", {text : "nodejs and express"});
});

//middlewear doing something while the client requested and the server recieving
/*function mylogger(req,res,next){
    console.log(req.originalUrl);
    next();
};*/

app.listen(PORT, ()=>{
    console.log("server is running");
});