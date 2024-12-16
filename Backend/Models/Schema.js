const mongoose = require('mongoose');

const KittySchema=new mongoose.Schema({
    name:String,
    salary:Number
})

module.exports=mongoose.model("Schema",KittySchema)