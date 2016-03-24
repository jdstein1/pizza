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
    $scope.units = "inches";
    $scope.myPizzaForm = {};
    $scope.pizzaToppingsSubtotal = {"left":[],"right":[],"sum":{"left":0,"right":0}};

    // util function for doing a sum
    var newSum = 0;
    var fSum = function (previousValue, currentValue) {
      console.log('START fSum FUNCTION');
      console.log('-- arr: ', arr);
      console.log('-- newSum: ', newSum);
      return previousValue + currentValue;
      // for (var i = 0; i < arr.length; i++) {
      //   console.log('arr[i]: ', arr[i]);
      //   // var val = arr[i];
      //   // newSum += arr[i];
      //   var val = parseFloat(arr[i]);
      //   newSum += val;
      // }
      // return newSum;
    };

    $scope.fClear = function () {
      console.log('START fClear FUNCTION');
    };

    var toppingsDefaultsArr = [11,5,27]; // id of default ingredient(s)

    // TOPPINGS ARRAY
    console.log('sToppings.fToppingsArr(): ', sToppings.fToppingsArr());
    $scope.toppings = sToppings.fToppingsArr();
    $scope.defaultToppings = [];

    // set default ingrdients
    $scope.setDefaults = function (obj,defaults) {
      console.group('START setDefaults');
      for (var i = 0; i < obj.length; i++) {
        for (var j = 0; j < defaults.length; j++) {
          if (obj[i].id === defaults[j]) {
            obj[i].layout = {};
            obj[i].layout.left = true;
            obj[i].layout.right = true;
            // if (obj[i].price>0) {
              $scope.pizzaToppingsSubtotal.left.push(obj[i].price);
              $scope.pizzaToppingsSubtotal.right.push( obj[i].price);
            // }
            $scope.defaultToppings.push(obj[i]);
            console.log('$scope.pizzaToppingsSubtotal: ', $scope.pizzaToppingsSubtotal);
          }
        }
      }
      console.groupEnd();
    };
    $scope.setDefaults($scope.toppings,toppingsDefaultsArr);
    $rootScope.myPizza.toppings = $scope.defaultToppings;

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

    $scope.fToppingPrice = function (item) {
      // console.group('START fToppingPrice FUNCTION');
      var price = '';
      if (item.price > 0) {
        price = item.price;
        price = $filter('currency')(price);
      } else {
        price = "FREE";
      }
      // console.groupEnd();
      return price;
    };

    // Calculate totals for toppings in each layout zone
    $scope.fPizzaToppingsSubtotal = function (layout,obj) {
      console.group('START fPizzaToppingsSubtotal FUNCTION');
      // console.log('layout: ',layout);
      // console.log('obj.layout: ',obj.layout);
      // console.log('obj: ',obj);
      // console.log('obj.price: ',obj.price);
      // console.log('Object.keys(obj): ',Object.keys(obj));
      if (obj.layout){
        if (obj.layout[layout]===true) {
          obj.layout[layout] = false;
          // need to get the index of the item w the desired value...
          // then pop that item:
          $scope.pizzaToppingsSubtotal[layout].pop(0,1);
          console.log('true pop',$scope.pizzaToppingsSubtotal[layout]);
        } else {
          obj.layout[layout] = true;
          $scope.pizzaToppingsSubtotal[layout].push(obj.price);
          console.log('false push',$scope.pizzaToppingsSubtotal[layout]);
        }
      } else {
        obj.layout = {};
        obj.layout[layout] = true;
        $scope.pizzaToppingsSubtotal[layout].push(obj.price);
        console.log('push', $scope.pizzaToppingsSubtotal[layout]);
      }
      // iterate over key 'layout' in myPizza.toppings to match 
      // layout zone value...
      console.groupEnd();
      // return $scope.pizzaToppingsSubtotal;
      // return price;
      // console.log('price: ',price)
      // $scope.toppings[id];
    };

    // Handle adding or removing toppings
    $scope.fToppingToggle = function (item) {
      console.log('START fToppingToggle FUNCTION');
    };
    // $rootScope.myPizza.toppings.push($scope.defaultToppings);
    // console.log('$rootScope.myPizza.toppings: ', $rootScope.myPizza.toppings);

    // Handle adding or removing toppings
    $scope.fToppingModify = function (layout,item) {
      console.log('START fToppingModify FUNCTION');
    };

    $scope.fPizzaSubtotal = function (size) {
      console.log('START fPizzaSubtotal FUNCTION');
      var pizzaSubtotal = $filter('currency')(size.price);
      return pizzaSubtotal;
    };

    $rootScope.myPizza.totals = {};
    $rootScope.myPizza.totals.toppings = {};
    $rootScope.myPizza.totals.total = $rootScope.myPizza.totals.toppings.left
+ $rootScope.myPizza.totals.toppings.right + $rootScope.myPizza.size.price;

    $scope.fPizzaTax = function () {
      console.log('START fPizzaTax FUNCTION');
    };

    $scope.fPizzaTotal = function () {
      console.log('START fPizzaTotal FUNCTION');
    };

    console.groupEnd();
  }

})();