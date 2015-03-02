// c-toppings.js

(function() {
	'use strict';

	angular
		.module('pizza')
		.controller('cToppings', cToppings)

	function cToppings($scope, $rootScope, sToppings) {
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
/*

- [X] Create myPizza object in rootscope.
- [X] Push data from services/factories into it for each 
	module (toppings, crusts, sizes, etc.)
- [] Modify sub-object attributes in rootscope object to 
	indicate preferences and layout of pizza.
- [] Topping layout values:  see 's-toppings.js'

*/

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

		$scope.defaultSize = $scope.sizes[0];
		console.log('$scope.defaultSize: ', $scope.defaultSize);

		$scope.myCost = $scope.defaultSize.value;
		console.log('$scope.myCost: ', $scope.myCost);

		console.log('$rootScope.myPizza: ', $rootScope.myPizza);
		$rootScope.myPizza.toppings = sToppings;
		// $rootScope.myPizza = {
		// 	"toppings":
		// 	{
		// 		"whole":[],
		// 		"left":[],
		// 		"right":[],
		// 		"none":[]
		// 	}
		// };
		// $scope.myToppings.whole = {};
		// $scope.myToppings.left = {};
		// $scope.myToppings.right = {};
		console.log('$rootScope.myPizza: ', $rootScope.myPizza);
		console.log('$rootScope.myPizza.toppings: ', $rootScope.myPizza.toppings);

	}

})();