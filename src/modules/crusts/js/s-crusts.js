// s-toppings.js

(function() {
    'use strict';

    angular
        .module('pizza')
        .service('sCrusts', sCrusts)

    function sCrusts() {
        // var title = "sCrusts";
        // console.log('START',title);

        this.fCrustsArr = function () {
          var sizesArr = [{
            "label":"thin",
            "value":0,
            "price":1
          },{
            "label":"pan",
            "value":1,
            "price":1.25
          },{
            "label":"deep",
            "value":2,
            "price":1.5
          }];
          return sizesArr;
        }

    }

})();
