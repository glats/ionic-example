'use strict';
angular.module('weight', [
  'ionic',
  'ngCordova',
  'ui.router'
])
.config(function ($stateProvider) {

  $stateProvider
    .state('weight', {
      url: '/weight',
      templateUrl: 'weight/templates/weight.html',
      controller: 'WeightController',
      controllerAs: 'ctrl'
    });
});
