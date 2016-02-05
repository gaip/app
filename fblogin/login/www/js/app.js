// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'controllers','ngOpenFB'])


.run(function($ionicPlatform, ngFB) {
  ngFB.init({appId: '123456789'});
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "views/sidemenu.html",
        controller: 'AppCtrl'
      })
      .state('login',{
        url:'/login',
        templateUrl: "views/login.html",
        controller:'LoginCtrl'
      })
      .state('home',{
      url:"/home",
      templateUrl:"views/home.html",
      controller: 'HomeCtrl'

    })
     .state('profile', {
        url: "/profile",
        views: {
          'menuContent': {
            templateUrl: "views/profile.html",
            controller: "ProfileCtrl"
          }
        }
      });


    $urlRouterProvider.otherwise('/login');
  })
