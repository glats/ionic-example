'use strict';
angular.module('weight')
  .controller('WeightController', function ($cordovaDialogs, $state, WeightFactory, WastedFactory) {
    var vm = this;
    vm.value = 40;
    var text = 'Datos de carga \n Bodega: C101 \n Tipo: NR \n Kilo: 40';
    vm.form = {
      'codigoBodega': '',
      'codigoTipoResiduo': '',
      'peso': 40
    };
    vm.title = 'Peso';
    vm.next = function () {

      WeightFactory.validateWeight(vm.value).then(function () {
        $cordovaDialogs.confirm('El tipo de residuos supera el máximo permitido', 'Atención', ['ACEPTAR', 'CANCELAR'])
          .then(function (buttonIndex) {
            if (buttonIndex === 1) {
              vm.display = true;
              WastedFactory.sendWasted(vm.form).then(function () {
                vm.title = 'Carga lista';
                $cordovaDialogs.confirm(text, 'Datos de carga', ['ACEPTAR', 'CANCELAR'])
                  .then();
              });
            }
          });
      });


    };
  })
;
