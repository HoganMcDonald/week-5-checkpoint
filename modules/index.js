//requires
var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

//base url
router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

//export router
module.exports = router;
