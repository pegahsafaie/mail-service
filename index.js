const express = require('express')
const router = require('./router')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const port = process.env.PORT || 4444

app.use(morgan('dev'))
app.use(express.json())
app.use('/', router);

app.listen(port, () => {
  console.log(`app is live on ${port}`)
})

