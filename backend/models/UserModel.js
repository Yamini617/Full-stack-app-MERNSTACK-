import mongoose from "mongoose";

const UserSchema=mongoose.Schema(
    {
        userType:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        }  ,
        password:{
            type:String,
            required:true
        }  ,
        email:{
            type:String,
            required:true
        }  ,
        address:{
           city:{type:String, required:true},
            pincode:{type:Number,required:true}
        },
         
         
    })

    //create user model

    export const User=mongoose.model('user',UserSchema)