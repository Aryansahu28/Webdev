import express from "express";
import mongoose from "mongoose";
import Data from '../models/Data.js'


const app = express();
const PORT = 3000;

// serve static files
app.use(express.static("public"));

let conn = mongoose.connect("mongodb://localhost:27017/Data");


let name = ['Ravish','krish','Trish']
let subject = ['History','Maths','Science']
let price = [12243,234123,2134123]





app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});