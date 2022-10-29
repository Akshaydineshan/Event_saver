const mongoose =require('mongoose');
const User =require('.//user')

const eventSchema =mongoose.Schema({
   user:{type:mongoose.Schema.Types.ObjectId},
   eventname:{type:String},
   eventdescription:{type:String},
   startdate:{type:String},
   enddate:{type:String},
   eventtype:{type:String}
})


module.exports=mongoose.model("Event",eventSchema)