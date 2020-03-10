// import express app and cors
const express = require('express')
const cors = require('cors')

// instantiate the app
const app = express()

// configure app so responses
// carry special headers to enable CORS
app.use(cors())
// by default express cannot parse bodies of requests
// we need to opt-in to body-parsing
// and this comes with express
app.use(express.json())

const friends = ['Alison', 'Zak', 'Rufai']

app.get('/api/friends', (req, res) => {
  // res.json()
  // res.send()
  // res.end()
  res.status(200).json(friends)
})

// make me a [POST] that has the desired name somewhere in the request
// send back???
app.post('/api/friends', (req, res) => {
  console.log(req.body)
  const { friend } = req.body
  friends.push(friend)
  res.status(201).json(friend)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})