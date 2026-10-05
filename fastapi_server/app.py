from fastapi import FastAPI
app=FastAPI()
@app.get("/getstudents")
def getStudents():
    return "get student method called"
@app.post("/addStudent")
def addStudent():
    return "add student method called"
@app.put("/updatedetails")
def updatedetails():
    return "updatedetals method called"
@app.delete("/deleteStudent")
def deleteStudent():
    return "deleteStudent method is called"