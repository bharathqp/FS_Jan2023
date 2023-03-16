const express = require('express')
const app = express()



app.get('/', function (req, res) {
  res.send('Home Page')

})

app.use('/about', function (req, res, next) {
  console.log("I ve been clalled first")
  next()
})

app.get('/about', function (req, res, next) {
  console.log("I ve been clalled next")
  res.send('About us Page')
  next()
})

app.use('/about', function (req, res) {
  console.log("1111111111111111111111")
})


app.all('/gallery', function (req, res) {
  res.send('Gallery us Page')
})



app.get('/contact', function (req, res) {
  res.send('Contact us Page')

})


app.get('/blog', function (req, res) {
  res.send('Blog page')

})


app.get('/hello/:id([0-9]{5})', function (req, res) {

  console.log(req.params)

  res.send('Hello ' + req.params.id + ", Welcome to express JS tutorial!!")

})


app.get('/hello', function (req, res) {
  res.send("Hello User, Welcome to express JS tutorial!!")

})




app.get('*', function (req, res) {
  res.send("You are not allowed for this Page!!!")

})



// Middleware

app.use('/about', function (req, res, next) {

  console.log("I ve been clalled first")

  next()
})


app.listen(3000)
