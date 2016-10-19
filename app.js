

var moment = require("moment");
var express = require("express");

var app = express();

var port = 8080;


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/:id', function(req, res) {
  res.send('parameter = ' + req.params.id);
});




app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
