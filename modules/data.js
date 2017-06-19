//requires
var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//globals
mongoose.connect('localhost:27017/messages');

// message schema
var messages = new mongoose.Schema({
  name: String,
  message: String
}); // end schema

var messageModel = mongoose.model('messageModel', messages);

//uses
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

//functions
router.get('/', function(req, res) {
  messageModel.find().then(function(response) {
    res.send(response);
  });
});

router.post('/', function(req, res) {
  messageModel(req.body).save();
  console.log('posted');
  res.send('posted');
});

//export router
module.exports = router;
