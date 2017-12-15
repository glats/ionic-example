'use strict';
angular.module('weight')
  .factory('WeightFactory', function ($http, Config) {

    this.validateWeight = function (weight) {
      return $http.post(Config.ENV.SERVER_URL + '/residuo/validarPeso/' + weight, {});
    };

    return this;
  });
