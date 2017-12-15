'use strict';
angular.module('login')
  .controller('LoginController', function (LoginFactory, $localStorage, $state) {
    var vm = this;
    vm.formParams = {
      unsername: null,
      password: null
    };

    vm.login = function (form) {
      if (form.$valid) {
        LoginFactory.postLogin(vm.formParams).then(function (response) {
          $localStorage.fullName = response.data.user.nombreCompleto;
          $state.go('warehouse');
        }, function (response) {
          if (response.data === null) {
            vm.message = 'Ocurrió un error en la conexión. Intente más tarde';
          } else {
            vm.message = response.data.status.message;
          }
        });
      }
    };
  })
;
