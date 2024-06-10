const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const library=require("./models/library")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/search",(req,res)=>{
    res.send("we")
})

app.get("/delete",(req,res)=>{
    res.send("wel")
})

app.get("/viewall",(req,res)=>{
    res.send("welcome")
})

app.listen(8080,()=>{
    console.log("server started")
})

