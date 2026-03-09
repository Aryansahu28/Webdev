import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchemav= new Schema({
  name: String,
  subject: String,
  price: Int16Array

});

const Data = model('Data', userSchema);
export default Data;
