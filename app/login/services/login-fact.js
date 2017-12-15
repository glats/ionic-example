'use strict';
angular.module('login')
.factory('LoginFactory', function ($http, Config) {

  this.postLogin = function (form) {
    return $http.post(Config.ENV.SERVER_URL + '/login', form);
  };

  return this;
});
