// import express app and cors
const express = require('express')
const cors = require('cors')

// instantiate the app
const app = express()

// configure app so responses
// carry special headers to enable CORS
app.use(cors())

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})