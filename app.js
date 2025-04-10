const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Hi, I am Middleware");
    // res.send("Middleware Finished")
    next();
    console.log("This is after nect()");
});

app.use((req,res,next)=>{
    console.log("Hi, I am 2nd Middleware");
    next()
});

app.get("/",(req,res)=>{
    res.send("Hi, I am root.");
});

app.get("/random",(req,res)=>{
    res.send("This is a random page");
});

app.listen(8081,()=>{
    console.log("Server listening to port 8080");
});

