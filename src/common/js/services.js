// services.js

(function() {
    'use strict';

    angular
        .module('pizza')
        .service('sNav', sNav)

    function sNav() {
        // var title = "sNav";
        // console.log('START',title);
        var nav = [
            {"name":"Toppings","link":"/toppings","order":1,"disabled":false},
            {"name":"Crusts","link":"/crusts","order":3,"disabled":true},
            {"name":"Sauces","link":"/sauces","order":2,"disabled":true},
            {"name":"Sizes","link":"/sizes","order":4,"disabled":true}
        ];
        return nav;
    }

})();
