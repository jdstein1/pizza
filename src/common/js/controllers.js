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

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cHeader', cHeader)

    function cHeader($scope) {
        $scope.title = "cHeader";
        console.log('START',$scope.title);
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cNav', cNav)

    function cNav($scope, $location, sNav) {
        $scope.title = "cNav";
        console.log('START',$scope.title);

        $scope.navPredicate = 'order';
        $scope.navReverse = false;

        $scope.nav = sNav;
        console.log('$scope.nav: ',$scope.nav);
        console.log('$location.$$path: ',$location.$$path);

        $scope.isActiveNav = function (link) {
            console.log('link: ',link);
            return $location.$$path === link;
        };
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cFooter', cFooter)

    function cFooter($scope) {
        $scope.title = "cFooter";
        console.log('START',$scope.title);
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cSummary', cSummary)

    function cSummary($scope) {
        $scope.title = "cSummary";
        console.log('START',$scope.title);
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cToppings', cToppings)

    function cToppings($scope, sToppings) {
/*

When you order a pizza, you have a FLAVOR or pizza in mind 
first, NOT a size or thickness!

Indulge your senses by imagining the aroma of your freshly 
baked pie, then the texture as you bite into it, and then 
the flavor of the sauce, cheese and ingrdients.

*/
        $scope.title = "cToppings";
        console.log('START',$scope.title);

        $scope.units = "inch";

        $scope.clear = function () {
            this.value = 0;
        };

        $scope.toppings = [];
        $scope.pepperoni = {
          "name":"Pepperoni",
          "id":"pepperoni",
          "value":"pepperoni",
          "price":["2.95","1.85"],
          "attributes":["meat"]
        };
        $scope.freshgarlic = {
          "name":"Fresh Garlic",
          "id":"freshgarlic",
          "value":"freshgarlic",
          "price":["2.45","1.65"],
          "attributes":["veggie"]
        };
        $scope.buffalomozzarella = {
          "name":"Buffalo Mozzarella",
          "id":"buffalomozzarella",
          "value":"buffalomozzarella",
          "price":["3.15","1.95"],
          "attributes":["dairy"]
        };
        $scope.toppings.push($scope.pepperoni);
        $scope.toppings.push($scope.freshgarlic);
        $scope.toppings.push($scope.buffalomozzarella);

        $scope.cost = [{
        	"label":10,
        	"value":9.50
        },{
        	"label":12,
        	"value":12.50
        },{
            "label":14,
            "value":15.50
        },{
            "label":16,
            "value":19.50
        }];
        console.log('$scope.cost: ', $scope.cost);

        $scope.defaults = $scope.cost[0];
        // $scope.defaults.size = 1;
        // $scope.defaults.size = 1;
        console.log('$scope.defaults: ', $scope.defaults);

        $scope.myCost = $scope.defaults;
        $scope.mySelected = $scope.defaults;
        $scope.myToppings = {};
		$scope.myToppings.whole = {};
		$scope.myToppings.left = {};
		$scope.myToppings.right = {};

    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cHome', cHome)

    function cHome($scope) {
        $scope.title = "cHome";
        console.log('START',$scope.title);
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cCrusts', cCrusts)

    function cCrusts($scope) {
        $scope.title = "cCrusts";
        console.log('START',$scope.title);
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cSauces', cSauces)

    function cSauces($scope) {
        $scope.title = "cSauces";
        console.log('START',$scope.title);
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cSizes', cSizes)

    function cSizes($scope) {
/*

Only once you have loaded up your virtual pie with the 
best possible combination of meats and veggies should you 
bother even thinking about the cost.  At this point you 
may begin to consider the impact of the size and thickness 
will have on the price of your happiness.

*/

        $scope.title = "cSizes";
        console.log('START',$scope.title);
    }

})();
