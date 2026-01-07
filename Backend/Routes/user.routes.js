let express=require("express")
const { UserModel } = require("../Model/user.model")
let userRouter=express.Router()
let bcrypt=require("bcrypt")
let jwt=require('jsonwebtoken')

//Register
userRouter.post("/register", async (req, res) => {
    const { name, email, pass, role } = req.body;
  
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(200).send({ msg: "User already exists" });
    }
  
    try {
      bcrypt.hash(pass, 5, async (err, hash) => {
        const newUser = new UserModel({
          name,
          email,
          pass: hash,
          role, // 👈 saved here
        });
  
        await newUser.save();
        console.log("saved use", newUser)
        res.status(200).send({ msg: "New user has been added" });
      });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
module.exports={
    userRouter
}