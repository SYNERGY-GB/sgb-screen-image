'use strict';

angular.module('sgb-screen-image', ['megazord'])
    .controller('sgb-screen-image-controller', ['$stateParams', '_screen', '_screenParams', '$scope', function ($stateParams, _screen, _screenParams, $scope) {

        _screen.initialize($scope, _screenParams);

        $scope.image = $stateParams.data;

        $scope.init = function () {
        };

    }]);