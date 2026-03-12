const mongoose = require('mongoose')
const { Schema, model } = mongoose;


const userSchema= new Schema({
  name: String,
  subject: String,
  salary: Number

});

const Data = mongoose.model('Data', userSchema);
module.exports=Data
