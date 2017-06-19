app.service('MyService', function($http) {
  var sv = this;

  //send inputs to server
  sv.sendInputs = function(obj) {
    $http.post('/data', obj).then(function(response) {
      console.log(response);
    });
  }; //end send inputs

  //get messages
  sv.getMessages = function() {
    return $http.get('/data').then(function(response) {
      return response;
    });
  }; //end get messages

});
