const mongoose = require("mongoose")

//user Scheema
const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
    phonenumber: { type: Number },
    address: { type: String },
    createdDate: { type: Date,default:Date.now}
})


module.exports=mongoose.model("User",userSchema);