
const express = require('express')
const app = express()
const port = 3000
app.set("view engine","ejs")


app.get('/',(req,res)=>{
  res.render("main.ejs")
})

const notes= [
  {
    title: "my first note",
    contents : "hello world"
},
{
  title: "my second note",
    contents : "hello world2"
}
]

app.get('/notes',(req,res)=>{
  res.render("notes.ejs",{
    notes
  })
})

app.get('/VEG',(req,res)=>{
  res.render("VEG.ejs")
})
app.use(express.static("public"))
//how to call
//localhost:3000/index.html
//because public has index.html 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
