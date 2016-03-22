// c-toppings.js

(function() {
  'use strict';

  angular
    .module('pizza')
    .controller('cToppings', cToppings)

  function cToppings($scope, $rootScope, sToppings, sSizes, MULTIPLIER, $filter) {
/*

When you order a pizza, you have a FLAVOR or pizza in mind 
first, NOT a size or thickness!

Indulge your senses by imagining the aroma of your freshly 
baked pie, then the texture as you bite into it, and then 
the flavor of the sauce, cheese and ingrdients.

*/
    $scope.title = "cToppings";
    console.group('START',$scope.title);
    $scope.units = "inch";
/*

- [X] Create myPizza object in rootscope.
- [X] Push data from services/factories into it for each 
  module (toppings, crusts, sizes, etc.)
- [] Modify sub-object attributes in rootscope object to 
  indicate preferences and layout of pizza.
- [] Topping layout values:  see 's-toppings.js'

*/

    $scope.fClear = function () {
      console.log('START fClear FUNCTION');
    };

    // TOPPINGS ARRAY
    // console.log('sToppings.fToppingsArr(): ', sToppings.fToppingsArr());
    $scope.toppings = sToppings.fToppingsArr();
    // console.log('$scope.toppings: ', $scope.toppings);
    // $scope.addKVtoObj = function (obj,value,key) {
    //   console.log('obj',obj);
    //   angular.forEach(obj, function(value, key) {
    //     console.log('this',this);
    //     this.push(key + ': ' + value);
    //   });
    // };
    // $scope.addKVtoObj($scope.toppings,0,'layout');

    // "layout":0 -- 0=none (default), 1=whole, 2=left, 3=right
    $scope.defaultTopping = $scope.toppings[0];
    console.log('$scope.defaultTopping: ', $scope.defaultTopping);
    $rootScope.myPizza.toppings = {};
    $rootScope.myPizza.toppings.whole = [];
    $rootScope.myPizza.toppings.left = [];
    $rootScope.myPizza.toppings.right = [];

    // TOPPINGS REPEAT PARAMS
    $scope.predicate = 'type';
    $scope.reverse = true;
    $scope.fSorting = function (predicate) {
      console.log('START fSorting FUNCTION');
      $scope.predicate = predicate;
      $scope.reverse = !$scope.reverse;
    };

    // SIZES ARRAY
    // console.log('sSizes.fSizesArr(): ', sSizes.fSizesArr());
    $scope.sizes = sSizes.fSizesArr();
    // console.log('$scope.sizes: ', $scope.sizes);
    $scope.defaultSize = $scope.sizes[1];
    // console.log('$scope.defaultSize: ', $scope.defaultSize);
    $rootScope.myPizza.size = $scope.defaultSize;

    $scope.fToppingPrice = function (layout,item) {
      console.group('START fToppingPrice FUNCTION');
      console.log('layout,item: '+layout +','+ item.name+'');
      layout = parseInt(layout);
      var price = '';
      if (item.price > 0) {
        if (layout < 1) {
          // price = item.price * MULTIPLIER.WHOLE;
        } else if (layout === 1) {
          price = item.price * MULTIPLIER.WHOLE;
        } else {
          price = item.price * MULTIPLIER.HALF;
        }
        price = $filter('currency')(price);
        console.groupEnd();
        return price;
      } else {
        price = "FREE";
        console.groupEnd();
        return price;
      }
      // console.log('price: ',price)
      // $scope.toppings[id];
    };

    // Handle adding or removing toppings
    $scope.fToppingToggle = function (item) {
      console.log('START fToppingToggle FUNCTION');
      if (item.layout < 1) {
        item.layout = 1;
      } else {
        item.layout = 0;
      }
      // return item;
    };
    // $rootScope.myPizza.toppings.push($scope.defaultTopping);
    // console.log('$rootScope.myPizza.toppings: ', $rootScope.myPizza.toppings);

    // Handle adding or removing toppings
    $scope.fToppingModify = function (layout,item) {
      console.log('START fToppingModify FUNCTION');
    };
    // $rootScope.myPizza.toppings.push($scope.defaultTopping);
    // console.log('$rootScope.myPizza.toppings: ', $rootScope.myPizza.toppings);

    $scope.fPizzaSubtotal = function () {
      console.log('START fPizzaSubtotal FUNCTION');
    };

    $scope.fPizzaTax = function () {
      console.log('START fPizzaTax FUNCTION');
    };

    $scope.fPizzaTotal = function () {
      console.log('START fPizzaTotal FUNCTION');
    };

    console.groupEnd();
  }

})();