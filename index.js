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
  // THE DIFFERENT WAYS SERVER CAN RESPOND TO CLIENT
  // res.json()
  // res.send()
  // res.end() // no body in the response
  res.status(200).json(friends)
})

app.get('/hello', (req, res) => {
  const { pal } = req.query
  res.send(`<h1>Hello, ${pal}</h1>`)
})

app.post('/api/friends', (req, res) => {
  const { friend } = req.body
  // THE DIFFERENT WAYS CLIENT CAN SEND INFO TO SERVER
  // const { body } = req // REMEMBER TO `app.use(express.json())` !!!
  // const { params } = req
  // const { headers } = req
  // const { query } = req
  friends.push(friend)
  res.status(201).json(friend)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})