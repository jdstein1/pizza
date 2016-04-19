(function() {
    'use strict';

    angular
        .module('pizza')
        .controller('cHeader', cHeader)

    function cHeader($scope) {
        $scope.title = "cHeader";
        // console.log('START '+$scope.title+' CONTROLLER');
    }

})();
