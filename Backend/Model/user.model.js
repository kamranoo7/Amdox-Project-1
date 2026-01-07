let mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    role: {
      type: String,
      enum: ["Candidate", "Employer"],
      required: true,
    },
  });
  


let UserModel=mongoose.model("user",userSchema)
module.exports={
    UserModel
}