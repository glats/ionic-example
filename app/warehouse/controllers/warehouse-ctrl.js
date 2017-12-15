'use strict';
angular.module('warehouse')
  .controller('WareHouseController', function (WareHouseFactory, $state) {
    var vm = this;
    vm.value = '';
    vm.search = function () {
      if (vm.value.length > 0) {
        WareHouseFactory.getAllCodes(vm.value).then(function (response) {
          vm.items = response.data.bodegas;
        });
      }
    };
    vm.select = function (item) {
      vm.value = item.name;
      vm.items = [];
    };
    vm.next = function () {
      if (vm.value.length > 0) {
        $state.go('wasted');
      }
    };
  })
;
