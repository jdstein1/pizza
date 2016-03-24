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
              "name":"Cheese",
              "seoname":"cheese",
              "price":0,
              "type":"dairy"
            },{
              "id":27,
              "name":"Pepperoni",
              "seoname":"pepperoni",
              "price":2.90,
              "type":"meat"
            },{
              "id":89,
              "name":"Fresh Garlic",
              "seoname":"freshgarlic",
              "price":2.30,
              "type":"veggie"
            },{
              "id":95,
              "name":"Sausage",
              "seoname":"sausage",
              "price":2.50,
              "type":"meat"
            },{
              "id":76,
              "name":"Pineapple",
              "seoname":"pineapple",
              "price":2.70,
              "type":"veggie"
            },{
              "id":5,
              "name":"Pizza Sauce",
              "seoname":"pizzasauce",
              "price":0,
              "type":"veggie"
            },{
              "id":45,
              "name":"Buffalo Mozzarella",
              "seoname":"buffalomozzarella",
              "price":3.10,
              "type":"dairy"
            }
          ];
          return toppingsArr;
        }

    }

})();
