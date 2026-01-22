const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Secure API Key Service Running')
})

module.exports = app
