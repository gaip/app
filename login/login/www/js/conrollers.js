angular.module('starter.controllers',['starter.services','ionic', 'ngOpenFB'])
  .controller('LoginCtrl', function($scope, $ionicModal, $tiimeout, ngFB){
  $scope.fbLogin = function() {
    ngFB.login({
        scope: 'email,read_stream,publish_actions'
      })
      .then(function (response) {
        if (response.status === 'connected') {
          console.log('Facebook login succ.');
        } else {
          alert('Facebook login failed.');
        }
      })
  };
