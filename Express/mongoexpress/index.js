import express from "express"
import mongoose from "mongoose"
import Todo from "./models/Todo.js"

const app = express()
const port = 3000

let conn = mongoose.connect("mongodb://localhost:27017/Blog");



app.get('/', (req, res) => {
  const todo = new Todo({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  })
  todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})