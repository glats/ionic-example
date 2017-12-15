'use strict';
angular.module('wasted')
  .factory('WareHouseFactory', function ($http, Config) {

    this.getAllCodes = function (code) {
      return $http.get(Config.ENV.SERVER_URL + '/bodega/' + code);
    };

    return this;
  });
