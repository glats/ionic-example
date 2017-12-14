'use strict';
angular.module('wasted')
  .controller('WastedController', function (WastedFactory) {
    var vm = this;
    vm.wasted = [];
    WastedFactory.getAllWasted().then(function (response) {
      vm.wasted = response.data.tiposResiduo;
    });
  })
;
