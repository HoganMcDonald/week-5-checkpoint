//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/index');
var data = require('./modules/data');

//globals
var port = process.env.PORT || 7575;

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', index);
app.use('/data', data);

//spin up server
app.listen(port, function() {
  console.log('server up on ', port);
});
