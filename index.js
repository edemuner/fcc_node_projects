const express = require('express')
const bodyparser = require('body-parser')
const controller = require('./controller')

const app = express()

app.use(bodyparser.json())

controller(app)

const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}`))

module.exports = app