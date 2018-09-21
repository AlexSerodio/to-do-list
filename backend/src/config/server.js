const port = 3003

// performs the parser of the request received (form, json)
const bodyParser = require('body-parser')
// web server running on top of node
const express = require('express')
// creates instance of express
const server = express()
const allowCors = require('./cors')

// whenever a request using the urlencoded and json standard the 
// parser will be done by bodyParser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server