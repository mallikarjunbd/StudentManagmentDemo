const express=require("express");

 

const app=express();

app.get("/",(req,res)=>{

    res.send("Welcome to Nodejs app on vercel server");

 

});

 

app.get("/about",(req,res)=>{

    res.send("This is my first depolyed app on vercel ")

});

 

module.exports=app;