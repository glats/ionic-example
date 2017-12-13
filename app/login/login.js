'use strict';
angular.module('login', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login/templates/login.html',
        controller: 'LoginController',
        controllerAs: 'ctrl'
      });
  });
