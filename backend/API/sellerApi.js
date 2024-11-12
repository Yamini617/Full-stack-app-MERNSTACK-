import {Router} from 'express'
export const sellerApi=Router()
import {Seller} from '../models/SellerModel.js'
import expressAsyncHandler from 'express-async-handler'


sellerApi.get('/',(req,res)=>{
  res.send({message:"from seller"})
})



sellerApi.get('/sellers',expressAsyncHandler(async(req,res)=>{
  const sellersList=await Seller.find();
  res.send({message:"users",payload:sellersList})
}))




