const express = require('express')
const app = express()








let user =  require('./router_user')
let vendor =  require('./router_vendor')


app.use('/u', user)
app.use('/v', vendor)


app.listen(3000)