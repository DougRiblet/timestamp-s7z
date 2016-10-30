var moment = require("moment");
var express = require("express");
var path    = require("path");

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/favicon.ico', function(req, res) {
  res.sendStatus(200);
});

app.get('/:id', function(req, res) {
	if (req.params.id.length) {
		var newMoment;
		if (moment(new Date(req.params.id)).isValid()) {
			newMoment = moment(new Date(req.params.id));
		} else if (moment(req.params.id, "X", true).isValid()) {
			newMoment = moment(req.params.id, "X");
		}
		var unixFormat = newMoment ? moment(newMoment).format("X") : null;
		var naturalFormat = newMoment ? moment(newMoment).format("MMMM D, YYYY") : null;
		res.json({ 'unix': unixFormat, 'natural': naturalFormat });
	}
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
