const express = require('express')
const router = express.Router();





router.get('/', function (req, res) {
  res.send('User Home Page')

})
















router.use('/about', function (req, res, next) {
  console.log("I ve been clalled first")
  next()
})

router.get('/about', function (req, res, next) {
  console.log("I ve been clalled next")
  res.send('User About us Page')
  next()
})

router.use('/about', function (req, res) {
  console.log("1111111111111111111111")
})


router.all('/gallery', function (req, res) {
  res.send('User Gallery us Page')
})


module.exports = router;