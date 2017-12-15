'use strict';
angular.module('cargo')
  .factory('CargoFactory', function ($http, Config) {

    this.sendWasted = function (form) {
      return $http.post(Config.ENV.SERVER_URL + '/residuo', form);
    };

    return this;
  });
