'use strict';
angular.module('login')
  .controller('LoginController', function (LoginFactory, $localStorage, $state) {
    var vm = this;
    vm.formParams = {
      unsername: null,
      password: null
    };

    vm.login = function () {

      LoginFactory.postLogin(vm.formParams).then(function (response) {
        console.log(response.data);
        $localStorage.full_name = response.data.user.nombreCompleto;
        $state.go('main');
      }, function (response) {
        console.log(response);
      });
    };
  })
;
