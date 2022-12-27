const express = require("express")

const app = express()

app.use(express.json());

app.get("/api",(res,req)=>{
    req.send("API is running");
})

const PORT = 4040;

const server = app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})