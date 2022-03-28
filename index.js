const express = require('express')
const bodyparser = require('body-parser')
const controller = require('./controller')

const app = express()

app.use(bodyparser.json())

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

controller(app)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`))

module.exports = app