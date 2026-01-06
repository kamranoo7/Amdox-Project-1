let express=require("express")
const { UserModel } = require("../Model/user.model")
let userRouter=express.Router()
let bcrypt=require("bcrypt")
let jwt=require('jsonwebtoken')

//Register
userRouter.post("/register",async(req,res)=>{
    let {name,email,gender,pass}=req.body
    let user=await UserModel.findOne({email})
    if(user){
        res.status(200).send({"msg":"user already exist"})
    }else{
        try{
bcrypt.hash(pass,5,async(err,hash)=>{
    let user=new UserModel({email,name,gender,pass:hash})
    await user.save()
    res.status(200).send({"msg":"new user has been added"})
})
        }catch(err){
        res.status(400).send({"msg":err.message})
        }
    }

})
module.exports={
    userRouter
}