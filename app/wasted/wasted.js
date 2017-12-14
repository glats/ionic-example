'use strict';
angular.module('wasted', [
  'ionic',
  'ngCordova',
  'ui.router'
])
.config(function ($stateProvider) {

  $stateProvider
    .state('wasted', {
      url: '/wasted',
      templateUrl: 'wasted/templates/wasted.html',
      controller: 'WastedController',
      controllerAs: 'ctrl'
    });
});
