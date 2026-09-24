let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproutes=require('./routes/emp_route');
let hrroutes=require('./routes/hr_route')

mongoose.connect("mongodb://localhost:27017/hrmanagement").then(()=>console.log("db connected successfully"))
.catch((err)=>console.log(err))
app.use(express.json());
//localhost:3000/api/emp/register
//localhost:3000/api/emp/login
//localhost:3000/api/emp/viewtask
//localhost:3000/api/emp/updateprofile
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);
//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})