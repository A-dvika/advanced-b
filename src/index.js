//require('dotenv').config({path:'./env'})

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import { app } from "./app.js";

dotenv.config();

connectDB()

.then(
    ()=>{
        app.on("error",(error)=>{
                console.log("err",error)
                throw error
        })
        app.listen(process.env.PORT|| 8000,()=>{
            console.log(`server at${process.env.PORT}`);
        })
    }
)
.catch((err)=>{
    console.log("Connection failed", err);
})





















/*

approach 1 for connecting databases 
const app=express()
(async () => {
    try {
        
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        app.on("error",(error)=>{
                console.log("err",error)
                throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`${process.env.PORT}`)
        })
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
})()
*/