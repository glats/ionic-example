'use strict';
angular.module('cargo', [
  'ionic',
  'ngCordova',
  'ui.router'
])
.config(function ($stateProvider) {

  $stateProvider
    .state('cargo', {
      url: '/cargo',
      templateUrl: 'cargo/templates/cargo.html',
      controller: 'CargoController',
      controllerAs: 'ctrl'
    });
});
