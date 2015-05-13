// c-toppings.js

(function() {
	'use strict';

	angular
		.module('pizza')
		.controller('cToppings', cToppings)

	function cToppings($scope, $rootScope, sToppings, sSizes) {
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

		// TOPPINGS
		// console.log('sToppings.fToppingsArr(): ', sToppings.fToppingsArr());
		// console.log('sToppings.fToppingsObj(): ', sToppings.fToppingsObj());
		$scope.toppings = sToppings.fToppingsObj();
		console.log('$scope.toppings: ', $scope.toppings);
		$scope.defaultTopping = $scope.toppings['cheese'];
		console.log('$scope.defaultTopping: ', $scope.defaultTopping);
		$rootScope.myPizza.toppings = $scope.defaultTopping;

		// SIZES
		// console.log('sSizes.fSizesArr(): ', sSizes.fSizesArr());
		// console.log('sSizes.fSizesObj(): ', sSizes.fSizesObj());
		$scope.sizes = sSizes.fSizesArr();
		console.log('$scope.sizes: ', $scope.sizes);
		$scope.defaultSize = $scope.sizes[1];
		console.log('$scope.defaultSize: ', $scope.defaultSize);
		$rootScope.myPizza.size = $scope.defaultSize;

		$scope.fToppingModify = function (layout,name) {

		};

		$scope.fPizzaSubtotal = function () {

		};
		$scope.fPizzaTax = function () {

		};
		$scope.fPizzaTotal = function () {

		};
		$scope.fToppingPrice = function (layout,name) {
			console.log('layout,name: ',layout +','+ name);
			// console.log('$scope.toppings[name].price[0]: ', $scope.toppings[name].price[0]);
			layout = parseInt(layout);
			var price = 0;
			if (layout === 1) {
				price = $scope.toppings[name].price[0];
			} else if (layout > 1) {
				price = $scope.toppings[name].price[1];
			} else {
				// price = 0;
			};
			console.log('price: ',price)
			// $scope.toppings[id];
			return price;

		};

	}

})();