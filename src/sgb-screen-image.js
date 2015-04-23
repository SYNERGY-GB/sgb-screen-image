'use strict';

angular.module('sgb-screen-image', ['megazord'])
  .controller('sgb-screen-image-controller', ['$stateParams', '$scope', function($stateParams, $scope){
    $scope.image = $stateParams.data;

    

  }]);