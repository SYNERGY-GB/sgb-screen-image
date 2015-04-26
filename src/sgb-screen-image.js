'use strict';

angular.module('sgb-screen-image', ['megazord'])
  .controller('sgb-screen-image-controller', ['$stateParams', '_screenParams', '$scope', function($stateParams, _screenParams, $scope){
      $scope.title = _screenParams.title || 'image_view_title';
      $scope.image = $stateParams.data;

      $scope.init = function(){};

  }]);