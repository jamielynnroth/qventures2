var express = require('express');
var app = express();
var logfmt = require("logfmt");

app.use(logfmt.requestLogger());

app.use(express.static(__dirname + "/public"));

app.listen(5000);