var app = angular.module('myApp', []);

app.controller('MainController', function(MyService) {
  console.log('ng');
  var vm = this;
  vm.messages = [];

  //get messages
  vm.getMessages = function() {
    MyService.getMessages().then(function(response) {
      vm.messages = response.data;
    });
  };

  //send inputs
  vm.sendInputs = function() {
    var objToSend = {
      name: vm.name,
      message: vm.message
    };
    console.log(objToSend);
    MyService.sendInputs(objToSend).then(function() {
      MyService.getMessages().then(function(response) {
        vm.messages = response.data;
      });
    });
  }; //end send inputs

});
