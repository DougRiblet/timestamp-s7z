var moment = require("moment");
var express = require("express");
var path    = require("path");

var app = express();
var port = process.env.PORT || 8080;


app.get('/', function (req, res) {
	console.log("===========reaching app.get")
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/:id', function(req, res) {
	var newMoment;
	if (moment(req.params.id).isValid()) {
		newMoment = moment(req.params.id);
	} else if (moment(req.params.id, "x").isValid()) {
		newMoment = moment(req.params.id, "x")
	} else if (moment(req.params.id, "X").isValid()) {
		newMoment = moment(req.params.id, "X");
	}
	var unixFormat = newMoment ? moment(newMoment).format("X") : null;
	var naturalFormat = newMoment ? moment(newMoment).format("MMMM D, YYYY") : null;

	res.json({ 'unix': unixFormat, 'natural': naturalFormat });
});




app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
