'use strict';

angular.module('sgb-screen-img', ['megazord'])
  .controller('sgb-screen-img-controller', ['$stateParams', '$scope', function($stateParams, $scope){
    $scope.image = $stateParams.data;
  }]);