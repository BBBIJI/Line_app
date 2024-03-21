//Dependencies
const express = require('express')
const app = express()
const port = 3000
app.set("view engine","ejs")

//GET function for the main store page
app.get('/',(req,res)=>{
  res.render("main.ejs")
})


//GET functions for all the stores
app.get('/VEG',(req,res)=>{
  res.render("VEG.ejs")
})
app.get('/mainbuffet',(req,res)=>{
  res.render("mainbuffet.ejs")
})
app.get('/breakfast',(req,res)=>{
  res.render("breakfast.ejs")
})


app.use(express.static("public"))
//how to call
//localhost:3000/index.html
//because public has index.html 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
