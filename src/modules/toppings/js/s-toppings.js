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
    // "layout":0 -- 0=none (default), 1=whole, 2=left, 3=right
    // "price":[2.95,1.85] -- price of whole layout and half layout
    // "type":"meat" -- topping category

        this.fToppingsArr = function () {
          var toppingsArr = [
            {
              "id":11,
              "name":"Cheese",
              "seoname":"cheese",
              "layout":0,
              "price":[0,0],
              "type":"dairy"
            },{
              "id":27,
              "name":"Pepperoni",
              "seoname":"pepperoni",
              "layout":0,
              "price":[2.95,1.85],
              "type":"meat"
            },{
              "id":89,
              "name":"Fresh Garlic",
              "seoname":"freshgarlic",
              "layout":0,
              "price":[2.45,1.35],
              "type":"veggie"
            },{
              "id":95,
              "name":"Sausage",
              "seoname":"sausage",
              "layout":0,
              "price":[2.55,1.45],
              "type":"meat"
            },{
              "id":76,
              "name":"Pineapple",
              "seoname":"pineapple",
              "layout":0,
              "price":[2.65,1.55],
              "type":"veggie"
            },{
              "id":45,
              "name":"Buffalo Mozzarella",
              "seoname":"buffalomozzarella",
              "layout":0,
              "price":[2.85,1.75],
              "type":"dairy"
            }
          ];
          return toppingsArr;
        }

    // "id":3 -- Unique numerical identifier
    // "name":"Pepperoni" -- Display name
    // "seoname":"pepperoni" -- SEO name
    // "layout":0 -- 0=none (default), 1=whole, 2=left, 3=right
    // "price":[2.95,1.85] -- price of whole layout and half layout
    // "type":"meat" -- topping category

        this.fToppingsObj = function () {
          var toppingsObj = {
            cheese:{
              "id":11,
              "name":"Cheese",
              "seoname":"cheese",
              "layout":0,
              "price":[0,0],
              "type":"dairy"
            },pepperoni:{
              "id":27,
              "name":"Pepperoni",
              "seoname":"pepperoni",
              "layout":0,
              "price":[2.95,1.85],
              "type":"meat"
            },freshgarlic:{
              "id":89,
              "name":"Fresh Garlic",
              "seoname":"freshgarlic",
              "layout":0,
              "price":[2.45,1.35],
              "type":"veggie"
            },sausage:{
              "id":95,
              "name":"Sausage",
              "seoname":"sausage",
              "layout":0,
              "price":[2.55,1.45],
              "type":"meat"
            },pineapple:{
              "id":76,
              "name":"Pineapple",
              "seoname":"pineapple",
              "layout":0,
              "price":[2.65,1.55],
              "type":"veggie"
            },buffalomozzarella:{
              "id":45,
              "name":"Buffalo Mozzarella",
              "seoname":"buffalomozzarella",
              "layout":0,
              "price":[2.85,1.75],
              "type":"dairy"
            }
          };
          return toppingsObj;
        }

    }

})();
