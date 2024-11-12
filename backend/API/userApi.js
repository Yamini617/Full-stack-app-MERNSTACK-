import {Router} from 'express'
export const userApi=Router()
import {User} from '../models/UserModel.js'
import expressAsyncHandler from 'express-async-handler'
import {verifyToken} from '../middlewares/verifyToken.js'

//user reg
userApi.get('/',(req,res)=>{
  res.send({message:"from user"})
})


userApi.get('/users',expressAsyncHandler(async(req,res)=>{
  const usersList=await User.find();
  res.send({message:"users",payload:usersList})
}))


userApi.get('/protected',verifyToken,expressAsyncHandler(async(req,res)=>{
  
  res.send({message:"This is Protected info"})
}))