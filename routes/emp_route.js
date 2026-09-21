let express=require('express');
let router=express.Router()
//router() is used to connect api with common route
router.post("/register",(req,res)=>{
    res.send("register router called");
})
router.post("/login",(req,res)=>{
    res.send("login router called");
})
router.get("/viewtask",(req,res)=>{
    res.send("viewtask router called");
})
router.patch("/updateprofile",(req,res)=>{
    res.send("updateprofile router called");
})
module.exports=router;