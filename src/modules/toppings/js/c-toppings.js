// c-toppings.js

(function() {
  'use strict';

  angular
    .module('pizza')
    .controller('cToppings', cToppings)

  function cToppings($scope, $rootScope, sToppings, sSizes, MULTIPLIER, $filter) {

    $scope.title = "cToppings";
    console.group('START',$scope.title);
    console.log('run the controller');

    // declare public vars
    // $scope.myPizzaForm = {};
    $rootScope.myPizza.totals = {};
    $rootScope.myPizza.totals.toppings = {"left":[],"right":[],"whole":[],"sum":{"left":0,"right":0,"whole":0}};

    // declare private vars
    var toppingsDefaultsArr = [11,5]; // id of default ingredient(s)
    var discount = 0;

    // Calculate the current discount rate for topping whole 
    // pizza with ingredient...
    if (1-MULTIPLIER.WHOLE>0) {
      discount = Math.round((1-MULTIPLIER.WHOLE)*100)+'%';
      console.log('discount', discount);
    }

    // util function for doing a sum
    var fSum = function (arr) {
      console.group('START fSum FUNCTION');
      console.log('-- arr: ', arr);
      var newSum = 0;
      for (var i = 0; i < arr.length; i++) {
        // console.log('arr[i]: ', arr[i]);
        newSum = newSum + arr[i];
        console.log('newSum', newSum);
      }
      console.groupEnd();
      return newSum;
    };

    // $scope.$watchCollection("myPizza.totals.toppings.left", function () {
    //   console.log('$watchCollection: myPizza.totals.toppings.left');
    //   $rootScope.myPizza.totals.toppings.sum.left = fSum($rootScope.myPizza.totals.toppings.left);
    // });

    // $scope.$watchCollection("myPizza.totals.toppings.right", function () {
    //   console.log('$watchCollection: myPizza.totals.toppings.right');
    //   $rootScope.myPizza.totals.toppings.sum.right = fSum($rootScope.myPizza.totals.toppings.right);
    // });

    // $scope.$watchCollection("myPizza.totals.toppings.whole", function () {
    //   console.log('$watchCollection: myPizza.totals.toppings.whole');
    //   $rootScope.myPizza.totals.toppings.sum.whole = fSum($rootScope.myPizza.totals.toppings.whole);
    // });

    $scope.fClear = function (side) {
      console.log('START fClear FUNCTION');
      switch(side) {
        case 'left':
          $scope.subtotal.left = 0;
          for (var i = 0; i < $scope.toppings.length; i++) {
            if ($scope.toppings[i].layout) {
              $scope.toppings[i].layout.left = false;
            }
          }
          $scope.fSideCharge();
          break;
        case 'right':
          $scope.subtotal.right = 0;
          for (var i = 0; i < $scope.toppings.length; i++) {
            if ($scope.toppings[i].layout) {
              $scope.toppings[i].layout.right = false;
            }
          }
          $scope.fSideCharge();
          break;
      }
    };

    // TOPPINGS ARRAY
    // console.log('sToppings.fToppingsArr(): ', sToppings.fToppingsArr());
    $scope.toppings = sToppings.fToppingsArr();
    $scope.defaultToppings = [];

    // set default ingrdients
    $scope.setDefaults = function (obj,defaults) {
      console.group('START setDefaults');
      console.log('defaults: ', defaults);
      for (var i = 0; i < obj.length; i++) {
        for (var j = 0; j < defaults.length; j++) {
          if (obj[i].id === defaults[j]) {
            obj[i].layout = {};
            obj[i].layout.left = true;
            obj[i].layout.right = true;
          }
        }
      }
      console.groupEnd();
    };
    $scope.setDefaults($scope.toppings,toppingsDefaultsArr);
    $rootScope.myPizza.toppings = $scope.toppings;
    // $rootScope.myPizza.toppings = $scope.defaultToppings;

    // TOPPINGS REPEAT PARAMS
    $scope.predicate = 'price';
    $scope.reverse = false;
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
      var price = 0;
      if (item.price > 0) {
        price = item.price * MULTIPLIER.HALF;
        price = $filter('currency')(price);
      } else {
        price = "FREE";
      }
      // console.groupEnd();
      return price;
    };

    // Calculate the charge for an individual topping based on 
    // pie layout...
    $scope.fToppingCharge = function (item,layout) {
      console.group('START fToppingCharge FUNCTION');
      var price = 0, discountMsg = '';

      // if layout undefined, use layout object of item
      if (!layout) {
        layout = item.layout;
      } else if (layout==='full') {
        layout = {"left":true,"right":true}
      }

      // check for layout...
      if (layout) {
        if (item.price > 0) {
          // topping is not free
          // console.log('layout.left: ', layout.left);
          // console.log('layout.right: ', layout.right);
          // check layout arrangement...
          if (layout.left && layout.right) {
            // charge for topping on whole pizza
            price = item.price * MULTIPLIER.WHOLE;
            if (discount) {
              discountMsg = ' (' + discount + ' off!)';
            }
          } else if (!layout.left && !layout.right) {
            // charge for no topping
            price = false;
          } else {
            // charge for topping on half pizza
            price = item.price * MULTIPLIER.HALF;
          }
          price = $filter('currency')(price);
          price = price + discountMsg;
        } else {
          // topping is free
          price = "FREE";
        }
      } else {
        if (item.price > 0) {
          price = "";

        } else {
          price = "FREE";

        }

      }

      console.groupEnd();
      return price;
    };

    // Calculate the charge for a side of the pizza based on 
    // topping layout...
    $scope.fSideCharge = function () {
      console.group('START fSideCharge FUNCTION');
      // console.log('side ('+side+'): ', $rootScope.myPizza.totals.toppings.sum[side]);

      $scope.subtotal = {'right':0,'left':0,'both':0,'whole':0};

      // iterate over toppings
      for (var i = 0; i < $scope.toppings.length; i++) {
        // console.log('$scope.toppings[i].layout: ', $scope.toppings[i].layout);
        var myTopping = $scope.toppings[i];

        // check layout value
        if (myTopping.layout) {
          // layout is defined.
          console.group(''+ myTopping.name +' MIGHT BE on the pizza');

          if (myTopping.layout.right && !myTopping.layout.left) {
            console.log('right side');
            $scope.subtotal.right += Math.round(myTopping.price * (MULTIPLIER.HALF * 100))/100;

          } else if (myTopping.layout.left && !myTopping.layout.right) {
            console.log('left side');
            $scope.subtotal.left += Math.round(myTopping.price * (MULTIPLIER.HALF * 100))/100;

          } else if (myTopping.layout.left && myTopping.layout.right) {
            console.log('both sides');
            $scope.subtotal.both += Math.round(myTopping.price * (MULTIPLIER.WHOLE * 100))/100;

          } else {
            console.log('neither side');
          }

          console.groupEnd();

        } else {
          // layout is undefined.
          console.log(''+ myTopping.name +' IS NOT on the pizza');
        }
      }

      $scope.subtotal.whole = Math.round(($scope.subtotal.right + $scope.subtotal.left + $scope.subtotal.both)*100)/100;
      console.log('subtotal: ', $scope.subtotal);
      console.groupEnd();
      // return $scope.subtotal;

    };
    $scope.fSideCharge();

    // Calculate totals for toppings in each layout zone
    $scope.fToppingToggle = function (side,obj) {
      console.group('START fToppingToggle FUNCTION');
      if (obj.layout) {
        if (obj.layout[side]===true) {
          // layout[side] is true...
          // toggle layout[side] to false
          obj.layout[side] = false;
          $scope.fSideCharge();
          // TODO: need to get the index of the item w the desired value...
          var myIndex = 0;
          // then pop that item:
          // $rootScope.myPizza.totals.toppings[side].pop();
          // console.log('pop',$rootScope.myPizza.totals.toppings[side]);
        } else {
          // layout[side] is false...
          // toggle layout[side] to true
          obj.layout[side] = true;
          $scope.fSideCharge();
          // add half-topping price to array
          // $rootScope.myPizza.totals.toppings[side].push(obj.price * MULTIPLIER.HALF);
          // console.log('push',$rootScope.myPizza.totals.toppings[side]);
        }
      } else {
        // layout is undefined...
        obj.layout = {};
        // set layout[side] value to true
        obj.layout[side] = true;
        $scope.fSideCharge();
        // add half-topping price to array
        // $rootScope.myPizza.totals.toppings[side].push(obj.price * MULTIPLIER.HALF);
        // console.log('push', $rootScope.myPizza.totals.toppings[side]);
      }
      console.groupEnd();
    };

    // $rootScope.myPizza.totals.toppings = {};
    $rootScope.myPizza.totals.total = $rootScope.myPizza.totals.toppings.left
+ $rootScope.myPizza.totals.toppings.right + $rootScope.myPizza.size.price;

    console.groupEnd();
  }

})();