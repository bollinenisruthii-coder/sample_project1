let express=require('express');
let app=express();
let emproutes=require('./routes/emp_route');
let hrroutes=require('./routes/hr_route')
app.use("/api/emp",emproutes);
//localhost:3000/api/emp/register
//localhost:3000/api/emp/login
//localhost:3000/api/emp/viewtask
//localhost:3000/api/emp/updateprofile
app.use("/api/hr",hrroutes);
//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})