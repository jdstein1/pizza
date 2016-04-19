// s-toppings.js

(function() {
    'use strict';

    angular
        .module('pizza')
        .service('sSizes', sSizes)

    function sSizes() {
        // var title = "sSizes";
        // console.log('START',title);

        this.fSizesArr = function () {
          var sizesArr = [{
            "label":"10",
            "value":10,
            "price":9.50
          },{
            "label":"12",
            "value":12,
            "price":12.25
          },{
            "label":"14",
            "value":14,
            "price":15.75
          },{
            "label":"16",
            "value":16,
            "price":19.00
          }];
          return sizesArr;
        }

    }

})();
