
import { Router } from "express";
export const loginRoute = Router();
import expressAsyncHandler from "express-async-handler";
import bcryptjs from 'bcryptjs';
const { compare } = bcryptjs;
import { User } from "../models/UserModel.js";
import { Seller } from "../models/SellerModel.js";
import { Admin } from "../models/AdminModel.js";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
const {sign}=jwt;
config();

loginRoute.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
       //get cred obj
    let { userType, username, password } = req.body;

    // Check if the userType is 'user'
    if (userType==="user") {
      let foundUser = await User.findOne({ username: username });
      if (foundUser!==null) {
        // Compare the hashed password with the input password
        let isMatch = await compare(password, foundUser.password);
        if (isMatch) {
          const jwt=sign({username:username},process.env.SECRET_KEY,{
            expiresIn:"1h"
          })

          res.send({ message: "login success",token:jwt,payload:foundUser,userType:"user" });
        } else {
          res.status(401).send({ message: "Invalid credentials" });
        }
      } else {
        res.status(404).send({ message: "User not found" });
      }
    }

    // Check if the userType is 'seller'
    if (userType === "seller") {
      let foundSeller = await Seller.findOne({ username: username });
      if (foundSeller!==null) {
        // Compare the hashed password with the input password
        let isMatch = await compare(password, foundSeller.password);
        if (isMatch) {
          const jwt=sign({username:username},process.env.SECRET_KEY,{
            expiresIn:"1h"
          })
          res.send({ message: "login success" ,token:jwt,payload:foundSeller,userType:"seller"});
        } else {
          res.status(401).send({ message: "Invalid credentials" });
        }
      } else {
        res.status(404).send({ message: "Seller not found" });
      }
    }
    //admin
    if(userType==='admin'){
     const result= await Admin.findOne({username:username})
    //if user found
    if(result!=null){
      //compare password
      let isEqual= await compare(password,result.password)
      if(isEqual===true){
        //create jwt web token
        const jwt=sign({username:username},process.env.SECRET_KEY,{
          expiresIn:"1h"
        })
        //send res
        res.send({message:"login success",token:jwt,payload:result,userType:"admin"})


      }else{
        res.send({message:"Invalid password"})
      }

    }else{
      res.send({message:"Invalid username"})
    }
 }





  })
);
