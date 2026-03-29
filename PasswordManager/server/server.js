import express from "express"
import { MongoClient } from "mongodb"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"



const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3000

dotenv.config();



const url = process.env.MONGO_URI;
const client = new MongoClient(url);
let connected = client.connect()
console.log(connected)

// App database

const dbName = process.env.db_Name;


app.get('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = db.collection("passwords")
    const finalResult = await collection.find({}).toArray()
    res.json(finalResult)    
})

app.post('/',async (req,res)=>{
    // console.log({'Body': req.body})
    const password = req.body;

    const db = client.db(dbName)
    const collection = db.collection("passwords")
    const finalResult = await collection.insertOne(password)
    res.send({'status':true,'result':finalResult})
})  
app.delete('/',async (req,res)=>{
    const password = req.body;
    const db = client.db(dbName)
    const collection = db.collection("passwords")
    const finalResult = await collection.deleteOne(password)
    res.send({'status':true,'result':finalResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
