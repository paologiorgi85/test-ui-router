
myApp.controller('contactCtrl', function($scope, $http) {
  $http.get('data/contacts.json')
       .then(function(res){
          $scope.contacts = res.data;
          console.log($scope.contacts);
        });
});
