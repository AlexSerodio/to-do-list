const port = 3003

// realiza o parser do corpo da requisicao recebida (formulario, json)
const bodyParser = require('body-parser')
// servidor web que roda em cima do node
const express = require('express')
// cria instancia do express
const server = express()
const allowCors = require('./cors')

// sempre que uma requisao usando o padrao urlencoded e json,
// o parser sera feito pelo bodyParser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server