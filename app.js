var express = require('express')
var app = express()

//load controllers
const SiteController = require("./controllers/SiteController")

//routes
app.get('/', SiteController.Index)

module.exports = app
