const express = require('express')
const router = require('./router')
var cors = require('cors');
require('dotenv').config()
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 4444

app.use(cors({
  origin: process.env.portfolio || 'https://www.pegahsafaie.dev'
}));
app.use(morgan('dev'))
app.use(express.json())
app.use('/', router);

app.listen(port, () => {
  console.log(`app is live on ${port}`)
})

