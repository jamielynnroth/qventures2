var express = require('express');
var app = express();
var logfmt = require("logfmt");

var port= process.env.PORT || 5000;
app.listen(port);

app.use(logfmt.requestLogger());

// app.configure(function() {
app.use(express.static(__dirname + "/public"));
// });

app.get('/', function(req, res){
  res.sendfile("index.html");
});

app.get('/portfolio', function(req, res){
  res.sendfile("public/portfolio/portfolio.html");
});

app.get('/team', function(req, res){
  res.sendfile("public/team/team.html");
});

app.get('/philosophy', function(req, res){
  res.sendfile("public/philosophy/philosophy.html");
});

app.get('/contact', function(req, res){
  res.sendfile("public/contact/contact.html");
});

app.get('/news', function(req, res){
  res.sendfile("public/news/news.html");
});

app.get('/jobs', function(req, res){
  res.sendfile("public/jobs/jobs.html");
});
