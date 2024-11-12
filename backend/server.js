 import exp from "express"
 import {adminApi} from './API/adminApi.js'
 import {userApi} from './API/userApi.js'
 import {sellerApi} from './API/sellerApi.js'
 import mongoose from "mongoose"
 import { registerRoute } from "./API/registration.js"
 import { loginRoute } from "./API/login.js"
 import cors from 'cors'
 import {config} from 'dotenv'
import { productApi } from "./API/addProduct.js"

 config();
 const app=exp()
 const port=process.env.PORT || 3000;
 app.listen(port,()=>console.log(`server on port ${port}`))
 app.use(cors({
   origin:'http://localhost:5173'
 }))

 mongoose.connect(process.env.DB_URL)
 .then(()=>console.log("DB connect success"))
 .catch(err=>console.log("err in Db connection",err))
app.use(exp.json())
//path
app.use('/api',loginRoute)
app.use('/api',registerRoute)
 app.use('/admin-api',adminApi)
 app.use('/user-api',userApi)
 app.use('/seller-api',sellerApi)
 app.use('/add-product',productApi)
 //err hand
 app.use((err,req,res,next)=>{
    res.send({message:"error",error:err})
 })