const express=require("express");

const pizza =require("./models/pizzaModel");
const db =require("./db.js")//its entry point for backend application

const app=express();//create app var with the help of express

app.use(express.json());
const path=require("path")

const pizzasRoute=require("./routes/pizzasRoute")
const userRoute=require("./routes/userRoute")//entry point for userroute

app.use("/api/pizzas/",pizzasRoute)//instead of getting route all the obj in pizza collection we add here
app.use("/api/users/",userRoute)


if(process.env.NODE_ENV ==="production")
{
    app.use("/",express.static("client/build"))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"/client/build/index.html"))
    })
}

//app.get("/",(req,res)=>{ //home page rout in the backend
   // res.send("Server working "+port)

//});



const port=process.env.PORT || 5000;

app.listen(port, ()=>`server running on port 5000`)