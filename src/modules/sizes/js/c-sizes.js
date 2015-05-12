// c-toppings.js

(function() {
	'use strict';

	angular
		.module('pizza')
		.controller('cSizes', cSizes)

	function cSizes($scope, $rootScope) {
/*

This qualities and prices of pizzas of different sizes depends heavily on the style of the crust...

*/
		$scope.title = "cSizes";
		console.log('START',$scope.title);
/*

- [] Offer selection of pizza sizes
- [] Offer selection of pizza crusts

*/

		

	}

})();