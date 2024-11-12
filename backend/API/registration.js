import { Router } from "express";
export const registerRoute = Router();
import expressAsyncHandler from "express-async-handler";
import { User } from "../models/UserModel.js";
import bcryptjs from 'bcryptjs';
const {hash}=bcryptjs;
import { Seller } from "../models/SellerModel.js";
registerRoute.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    let user = req.body;
    console.log(user)
    if (user.userType === "user") {
        //check for user existance
        let result=await User.findOne({username:user.username});
       // console.log("result is ",result)
        if(result===null){
            //hash password
           let hashedPassword=await hash(user.password,7)
           
            //replace plain pw with hash
            user.password=hashedPassword;
            //save in db
            let newUser=User(user)
            await newUser.save()
            res.status(201).send({message:"user created"})
        }else{
            res.send({message:"User is already existed"})
        }
    }
    if (user.userType === "seller") {
         //check for user existance
         let result=await Seller.findOne({username:user.username});
         if(result===null){
             //hash password
            let hashedPassword=await hash(user.password,7)
            
             //replace plain pw with hash
             user.password=hashedPassword;
             //save in db
             let newSeller=Seller(user)
             await newSeller.save()
             res.status(201).send({message:"seller created"})
         }else{
            res.send({message:"Seller is already existed"})
         }
    }
  })
);