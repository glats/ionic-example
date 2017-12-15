'use strict';
angular.module('warehouse', [
  'ionic',
  'ngCordova',
  'ui.router'
])
.config(function ($stateProvider) {

  $stateProvider
    .state('warehouse', {
      url: '/warehouse',
      templateUrl: 'warehouse/templates/warehouse.html',
      controller: 'WareHouseController',
      controllerAs: 'ctrl'
    });
});
