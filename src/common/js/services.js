/*

Pizza app

This app is the platonic ideal of a pizza configuration 
mechanism.  It allows for complete customization of the 
pizza pie from topping to bottom.  It organizes the choice 
sequence intuitively instead of relying on established 
patterns that lack thought.

*/

(function() {
    'use strict';

    angular
        .module('pizza')
        .service('sNav', sNav)

    function sNav() {
        // var title = "sNav";
        // console.log('START',title);
        var nav = [{"name":"Home","link":"/","order":0,"disabled":false},{"name":"Toppings","link":"/toppings","order":1,"disabled":false},{"name":"Crusts","link":"/crusts","order":3,"disabled":true},{"name":"Sauces","link":"/sauces","order":2,"disabled":true},{"name":"Sizes","link":"/sizes","order":4,"disabled":true}];
        return nav;
    }

    angular
        .module('pizza')
        .service('sToppings', sToppings)

    function sToppings() {
        // var title = "sToppings";
        // console.log('START',title);
        var toppings = {};
        return toppings;
    }

})();
