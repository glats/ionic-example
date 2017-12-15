'use strict';
angular.module('wasted')
  .controller('WastedController', function (WastedFactory, $state) {
    var vm = this;
    vm.wasted = [];
    WastedFactory.getAllWasted().then(function (response) {
      vm.wasted = response.data.tiposResiduo;
    });

    vm.next = function () {
      $state.go('weight');
    };
  })
;
