let express=require('express');
let router=express.Router()
router.get("/viewemp",(req,res)=>{
    res.send("viewemp router called");
})
router.post("/assigntask",(req,res)=>{
    res.send("assigntask router called");
})
router.delete("/deleteemp",(req,res)=>{
    res.send("deleteemp router called");
})
router.get("/viewtask",(req,res)=>{
    res.send("viewtask router called");
})
module.exports=router;

