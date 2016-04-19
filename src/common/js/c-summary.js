(function() {
    'use strict';

    angular
        .module('pizza')
        .controller('cSummary', cSummary)

    function cSummary($scope) {
        $scope.title = "cSummary";
        // console.log('START '+$scope.title+' CONTROLLER');
    }

})();
