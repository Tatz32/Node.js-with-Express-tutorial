const express = require("express");
const router = express.Router();

//when you want to use it only if the url is /user/...etc 
router.use(mylogger);

router.get("/1",(req, res)=>{
    res.send("1");
});
router.get("/2",(req, res)=>{
    res.send("2");
});
router.get("/3",(req, res)=>{
    res.send("3");
});

router.get("/:id",(req,res)=>{
    res.send(`${req.params.id}`)
});

//middlewear doing something while the client requested and the server recieving
function mylogger(req,res,next){
    console.log(req.originalUrl);
    next();
};

module.exports = router