const express = require('express')

// instantiating a piece of express app
const router = express.Router()

const friends = ['Alison', 'Zak', 'Rufai']

// invoke .get etc on the router we just created
router.get('/api/friends', (req, res) => {
  // THE DIFFERENT WAYS SERVER CAN RESPOND TO CLIENT
  // res.json()
  // res.send()
  // res.end() // no body in the response
  res.status(200).json(friends)
})

router.post('/api/friends', (req, res) => {
  const { friend } = req.body
  // THE DIFFERENT WAYS CLIENT CAN SEND INFO TO SERVER
  // const { body } = req // REMEMBER TO `app.use(express.json())` !!!
  // const { params } = req
  // const { headers } = req
  // const { query } = req
  friends.push(friend)
  res.status(201).json(friend)
})

module.exports = router

