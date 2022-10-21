const express = require('express')

const app = express()
app.user(express.json())

module.exports = app