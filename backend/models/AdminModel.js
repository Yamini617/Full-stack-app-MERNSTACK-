import mongoose from "mongoose";


const AdminSchema=mongoose.Schema({
    username:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        requried:true
    }
})

export const Admin=mongoose.model('admin',AdminSchema,'admin')