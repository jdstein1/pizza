// s-toppings.js

(function() {
    'use strict';

    angular
        .module('pizza')
        .service('sToppingsArr', sToppingsArr)

    function sToppingsArr() {
        // var title = "sToppingsArr";
        // console.log('START',title);

		// "id":3 -- Unique numerical identifier
		// "name":"Pepperoni" -- Display name
		// "seoname":"pepperoni" -- SEO name
		// "price":[2.95,1.85] -- price of whole layout and half layout
		// "layout":0 -- 0=none, 1=whole, 2=left, 3=right
		// "attributes":["meat"] -- Characteristics for CSS

        var toppingsArr = [{
          "id":3,
          "name":"Pepperoni",
          "seoname":"pepperoni",
          "price":[2.95,1.85],
          "layout":0,
          "attributes":["meat"]
        },{
          "id":4,
          "name":"Fresh Garlic",
          "seoname":"freshgarlic",
          "price":[2.45,1.65],
          "layout":0,
          "attributes":["veggie"]
        },{
          "id":5,
          "name":"Buffalo Mozzarella",
          "seoname":"buffalomozzarella",
          "price":[3.15,1.95],
          "layout":0,
          "attributes":["dairy"]
        }];
        return toppingsArr;

    }

    angular
        .module('pizza')
        .service('sToppingsObj', sToppingsObj)

    function sToppingsObj() {
        // var title = "sToppingsObj";
        // console.log('START',title);

    // "id":3 -- Unique numerical identifier
    // "name":"Pepperoni" -- Display name
    // "seoname":"pepperoni" -- SEO name
    // "price":[2.95,1.85] -- price of whole layout and half layout
    // "layout":0 -- 0=none, 1=whole, 2=left, 3=right
    // "attributes":["meat"] -- Characteristics for CSS

        var toppingsObj = {
          "pepperoni":{
            "id":3,
            "name":"Pepperoni",
            "seoname":"pepperoni",
            "price":[2.95,1.85],
            "layout":0,
            "attributes":["meat"]
          },"freshgarlic":{
            "id":4,
            "name":"Fresh Garlic",
            "seoname":"freshgarlic",
            "price":[2.45,1.65],
            "layout":0,
            "attributes":["veggie"]
          },"buffalomozzarella":{
            "id":5,
            "name":"Buffalo Mozzarella",
            "seoname":"buffalomozzarella",
            "price":[3.15,1.95],
            "layout":0,
            "attributes":["dairy"]
          }
        };
        return toppingsObj;
    }

})();
