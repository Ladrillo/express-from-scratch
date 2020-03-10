// import express app and cors
const express = require('express')
const cors = require('cors')

// instantiate the app
const app = express()

// configure app so responses
// carry special headers to enable CORS
app.use(cors())

const friends = ['Alison', 'Zak', 'Rufai']

app.get('/api/friends', (req, res) => {
  // res.json()
  // res.send()
  // res.end()
  res.status(200).json(friends)
})

// make me a [POST] that has the desired name somewhere in the request
// send back???



const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})