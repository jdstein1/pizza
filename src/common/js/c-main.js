(function() {
    'use strict';

    angular
        .module('pizza')
        .controller('cMain', cMain)

    function cMain($scope, $rootScope) {
        $scope.title = "cMain";
        // console.log('START '+$scope.title+' CONTROLLER');
        $rootScope.myPizza = {};
        // console.log('$rootScope.myPizza',$rootScope.myPizza);
        $rootScope.units = "inches";
    }

})();
