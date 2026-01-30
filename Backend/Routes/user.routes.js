let express=require("express")
const { UserModel } = require("../Model/user.model")
let userRouter=express.Router()
let bcrypt=require("bcrypt")
let jwt=require('jsonwebtoken')

// 👇 allows us to read the secret key from .env file
require("dotenv").config();

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
  
  // Login Route
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (result) {
          // Generate Token
          const token = jwt.sign({ userID: user._id, role: user.role }, process.env.JWT_SECRET); 
          
          // Send Success Response with ROLE
          res.status(200).send({ 
              msg: "Login Successful", 
              token: token,
              role: user.role, // Important: Sending role to frontend
              name: user.name
          });
        } else {
          res.status(400).send({ msg: "Wrong Password" });
        }
      });
    } else {
      res.status(404).send({ msg: "User not found" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
  
module.exports={
    userRouter
}
