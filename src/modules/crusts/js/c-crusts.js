// c-toppings.js

(function() {
	'use strict';

	angular
		.module('pizza')
		.controller('cSizes', cSizes)

	function cSizes($scope, $rootScope) {
/*

Only once you have loaded up your virtual pie with the 
best possible combination of meats and veggies should you 
bother even thinking about the cost.  At this point you 
may begin to consider the impact of the size and thickness 
will have on the price of your happiness.

*/
		$scope.title = "cSizes";
		console.log('START',$scope.title);
/*

- [] Offer selection of pizza sizes
- [] Offer selection of pizza crusts

*/

		

	}

})();