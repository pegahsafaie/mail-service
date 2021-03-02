const express = require('express')
const router = require('./router')
const app = express()
const morgan = require('morgan')
const port = 4444

app.use(morgan('dev'))
app.use(express.json())
app.use('/', router);

app.listen(port, () => {
  console.log(`app is live on ${port}`)
})

