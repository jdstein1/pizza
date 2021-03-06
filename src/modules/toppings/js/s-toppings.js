// s-toppings.js

(function() {
    'use strict';

    angular
        .module('pizza')
        .service('sToppings', sToppings)

    function sToppings() {
        // var title = "sToppings";
        // console.log('START',title);

        // "id":3 -- Unique numerical identifier
        // "name":"Pepperoni" -- Display name
        // "seoname":"pepperoni" -- SEO name
        // "price":[2.95,1.85] -- whole layout price.  half layout will be handled by a constant multiplier.
        // "type":"meat" -- topping category

        this.fToppingsArr = function () {
          var toppingsArr = [
            {
              "id":11,
              "name":"Pizza Cheese",
              "seoname":"pizzacheese",
              "price":0,
              "type":"dairy",
              "base":true
            },{
              "id":27,
              "name":"Pepperoni",
              "seoname":"pepperoni",
              "price":3.5,
              "type":"meat"
            },{
              "id":154,
              "name":"Arugula",
              "seoname":"arugula",
              "price":3.7,
              "type":"veggie"
            },{
              "id":89,
              "name":"Garlic",
              "seoname":"garlic",
              "price":2.9,
              "type":"veggie"
            },{
              "id":95,
              "name":"Sausage",
              "seoname":"sausage",
              "price":3.1,
              "type":"meat"
            },{
              "id":76,
              "name":"Ham",
              "seoname":"ham",
              "price":2.7,
              "type":"meat"
            },{
              "id":76,
              "name":"Zucchini",
              "seoname":"zucchini",
              "price":3.3,
              "type":"veggie"
            },{
              "id":5,
              "name":"Pizza Sauce",
              "seoname":"pizzasauce",
              "price":0,
              "type":"veggie",
              "base":true
            },{
              "id":45,
              "name":"Buffalo Mozzarella",
              "seoname":"buffalomozzarella",
              "price":3.9,
              "type":"dairy"
            }
          ];
          return toppingsArr;
        }

    }

})();
