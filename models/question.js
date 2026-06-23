const mongoose = require("mongoose");


const questionSchema = mongoose.Schema({

 titre:{
   type:String,
   required:true
 },

 description:{
   type:String,
   required:true
 },

 tags:{
   type:[String],
   default:[]
 },


 createdAt:{
   type:Date,
   default:Date.now
 }

});


module.exports = mongoose.model(
"Question",
questionSchema
);