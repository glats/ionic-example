'use strict';
angular.module('cargo')
  .controller('CargoController', function ($cordovaDialogs, CargoFactory) {
    var vm = this;
    var text = 'Datos de carga \n Bodega: C101 \n Tipo: NR \n Kilo: 40';

    vm.form = {
      'codigoBodega': '',
      'codigoTipoResiduo': '',
      'peso': 40
    };
    CargoFactory.sendWasted(vm.form).then(function () {

      $cordovaDialogs.confirm(text, 'Datos de carga', ['ACEPTAR', 'CANCELAR'])
        .then();
    });
  })
;
