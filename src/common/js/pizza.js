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
        .module('pizza', ['ngResource','ngRoute'])

// })();
// (function() {
//     'use strict';
    
    angular
        .module('pizza')
        .config(['$routeProvider',
        function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/about', {
            templateUrl: 'common/about.html',
            controller: 'cHome'
        }).
        when('/toppings', {
            templateUrl: 'modules/toppings/index.html',
            controller: 'cToppings'
        }).
        when('/crusts', {
            templateUrl: 'modules/crusts/index.html',
            controller: 'cCrusts'
        }).
        when('/sauces', {
            templateUrl: 'modules/sauces/index.html',
            controller: 'cSauces'
        }).
        when('/sizes', {
            templateUrl: 'modules/sizes/index.html',
            controller: 'cSizes'
        }).
        otherwise({
            redirectTo: '/toppings'
        });

        // $locationProvider.html5Mode(true);
  }]);

})();
