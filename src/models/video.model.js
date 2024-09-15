import { JsonWebTokenError } from "jsonwebtoken";
import mongoose,{Schema}from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcrypt"
const videochema=new Schema({

    videoFile:{
        type:String,
        required:true,
       
       
    },
    thumbnail:{
        type:String,
        required:true,
        
        
    },
    title:{
        type:String,
        required:true,
       
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,//cloudinary url
        required:true,
    },
    views:{
        type:Number,
        default:0,

    },
    isPublished:{
        type:Boolean,//cloudinary url
        default:true,
    },

    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
   
    
},{timestamps:true})

videochema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video",videochema)