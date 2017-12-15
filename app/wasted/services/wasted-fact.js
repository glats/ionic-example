'use strict';
angular.module('wasted')
  .factory('WastedFactory', function ($http, Config) {

    this.getAllWasted = function () {
      return $http.get(Config.ENV.SERVER_URL + '/tipoResiduo');
    };
    this.sendWasted = function (form) {
      return $http.post(Config.ENV.SERVER_URL + '/residuo', form);
    };
    return this;
  });
