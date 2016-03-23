var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var students = require("./public/assets/data/students.json");

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/students', function(req, res){
  res.send(students);
});

app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(app.get('port'), function(){
  console.log('Listen on port: ', app.get('port'));
});

module.exports = app;
