import {Router} from 'express'
export const adminApi=Router()


adminApi.get('/',(req,res)=>{
  res.send({message:"from admin"})
})