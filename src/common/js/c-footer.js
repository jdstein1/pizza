(function() {
    'use strict';

    angular
        .module('pizza')
        .controller('cFooter', cFooter)

    function cFooter($scope) {
        $scope.title = "cFooter";
        // console.log('START '+$scope.title+' CONTROLLER');
    }

})();
