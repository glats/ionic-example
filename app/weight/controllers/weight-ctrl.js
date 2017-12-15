'use strict';
angular.module('weight')
  .controller('WeightController', function ($cordovaDialogs, $state, WeightFactory) {
    var vm = this;
    vm.value = 40;
    vm.next = function () {

      WeightFactory.validateWeight(vm.value).then(function () {
        $cordovaDialogs.confirm('El tipo de residuos supera el máximo permitido', 'Atención', ['ACEPTAR', 'CANCELAR'])
          .then(function (buttonIndex) {
            if (buttonIndex === 1) {
              $state.go('cargo');
            }
          });
      });


    };
  })
;
