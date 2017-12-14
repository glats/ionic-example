'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'main/templates/main.html',
      controller: 'MainController',
      controllerAs: 'ctrl'
    });
});
