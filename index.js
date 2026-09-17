let express=require('express');
let app=express();
app.post("/addStudent",(req,res)=>{
    res.send("add student called");
});
app.get("/getStudents",(req,res)=>{
    res.send("get students called");
});
app.put("/updateStudent",(req,res)=>{
    res.send("update student called");
});
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})