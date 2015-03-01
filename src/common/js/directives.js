/*

Pizza app

This app is the platonic ideal of a pizza configuration 
mechanism.  It allows for complete customization of the 
pizza pie from topping to bottom.  It organizes the choice 
sequence intuitively instead of relying on established 
patterns that lack thought.

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
