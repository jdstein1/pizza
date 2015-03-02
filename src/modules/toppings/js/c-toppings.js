// c-toppings.js

(function() {
	'use strict';

	angular
		.module('pizza')
		.controller('cToppings', cToppings)

	function cToppings($scope, sToppings) {
/*

When you order a pizza, you have a FLAVOR or pizza in mind 
first, NOT a size or thickness!

Indulge your senses by imagining the aroma of your freshly 
baked pie, then the texture as you bite into it, and then 
the flavor of the sauce, cheese and ingrdients.

*/
		$scope.title = "cToppings";
		console.log('START',$scope.title);

		$scope.units = "inch";

		$scope.clear = function () {

		};

		$scope.toppings = sToppings;
		console.log('$scope.toppings: ', $scope.toppings);

		$scope.sizes = [{
			"label":10,
			"value":9.50
		},{
			"label":12,
			"value":12.50
		},{
			"label":14,
			"value":15.50
		},{
			"label":16,
			"value":19.50
		}];
		console.log('$scope.sizes: ', $scope.sizes);

		$scope.defaults = $scope.sizes[0];
		console.log('$scope.defaults: ', $scope.defaults);

		$scope.myCost = $scope.defaults.value;
		console.log('$scope.myCost: ', $scope.myCost);

		$scope.myPizza = {
			"toppings":
			{
				"whole":[],
				"left":[],
				"right":[],
				"none":[]
			}
		};
		// $scope.myToppings.whole = {};
		// $scope.myToppings.left = {};
		// $scope.myToppings.right = {};
		console.log('$scope.myPizza: ', $scope.myPizza);
		console.log('$scope.myPizza.toppings: ', $scope.myPizza.toppings);

	}

})();