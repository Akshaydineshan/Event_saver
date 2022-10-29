const mongoose=require('mongoose')


const trashSchema =mongoose.Schema({
    deletedeventid:{type:mongoose.Schema.Types.ObjectId},
    user:{type:mongoose.Schema.Types.ObjectId},
    eventname:{type:String},
    eventdescription:{type:String},
    startdate:{type:String},
    enddate:{type:String},
    eventtype:{type:String}
})



module.exports=mongoose.model('Trash',trashSchema)