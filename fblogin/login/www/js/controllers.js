angular.module('controllers', ['ngOpenFB'])
  .controller('LoginCtrl', function($scope, $ionicModal, $timeout, ngFB){

    $scope.fbLogin = function () {
      ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
        function (response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            $scope.closeLogin();
          } else {
            alert('Facebook login failed');
          }
        });
    };

  })
  .controller('HomeCtrl', function($scope){

  })
  .controller('AppCtrl', function($scope){

  })
.controller('ProfileCtrl', function ($scope, ngFB) {
  ngFB.api({
    path: '/me',
    params: {fields: 'id,name'}
  }).then(
    function (user) {
      $scope.user = user;
    },
    function (error) {
      alert('Facebook error: ' + error.error_description);
    });
});
