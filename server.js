var express = require("express");
var app = express()
var arg = process.argv[2];
var moment = require("moment");
var time = require("./timestamp.js");

app.get('/', function (req, res) {
  res.send(time(arg))
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})



