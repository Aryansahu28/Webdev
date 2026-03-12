const express = require('express')
const mongoose = require('mongoose');

const Data = require('./models/data.js')
mongoose.connect('mongodb://127.0.0.1:27017/data');

const app = express()
const port = 3000

app.use(express.static("images")); 
app.set('view engine', 'ejs');

const getRandom =()=>{
    return Math.floor(Math.random()*10)%3
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})


app.get('/generated',async (req,res)=>{

    // Delete all data
    await Data.deleteMany({})


    let name = ["Rakesh","Suresh","Ramesh"]
    let subject = ["python","r","go"]
    let salary= Math.floor(Math.random()*2000)
    for (let index = 0; index < 5; index++) {
        let e = await Data.create({
                 name: name[getRandom()],
                subject: subject[getRandom()],
                salary: salary
        })

        console.log(e)
        
    }
     res.render('index', { foo: 'FOO' });

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
