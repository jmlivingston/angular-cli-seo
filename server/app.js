var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/dist'));
app.get('/', function (req, res) {
    res.sendfile(__dirname + "/dist/index.htm");
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});