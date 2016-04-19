/*

See README for more info...

*/

(function() {
    'use strict';

    angular
        .module('pizza')
        .directive('dToppings', dToppings)

    function dToppings($scope) {
        $scope.title = "dToppings";
        console.log('START',$scope.title);
    }

})();
