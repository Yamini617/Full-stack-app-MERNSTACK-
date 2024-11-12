import {Router} from 'express'
export const productApi=Router()
import {Product} from '../models/ProductModel.js'
import expressAsyncHandler from 'express-async-handler'





productApi.post('/product',expressAsyncHandler(async(req,res)=>{
  let product = req.body;
  let newProduct=Product(product)
            await newProduct.save()
  
  res.send({message:"Product Added successfully"})
}))




