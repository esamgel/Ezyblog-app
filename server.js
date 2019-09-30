const express = require('express')
const servStatic = require('serve-static')
const path = require('path')

const app = express()

// serves files from out dis dir
app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)