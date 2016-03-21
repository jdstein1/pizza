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
        .controller('cMain', cMain)

    function cMain($scope, $rootScope) {
        $scope.title = "cMain";
        console.log('START '+$scope.title+' CONTROLLER');
        $rootScope.myPizza = {};
        console.log('$rootScope.myPizza',$rootScope.myPizza);
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cHeader', cHeader)

    function cHeader($scope) {
        $scope.title = "cHeader";
        console.log('START '+$scope.title+' CONTROLLER');
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cNav', cNav)

    function cNav($scope, $location, sNav) {
        $scope.title = "cNav";
        console.log('START '+$scope.title+' CONTROLLER');

        $scope.navPredicate = 'order';
        $scope.navReverse = false;

        $scope.nav = sNav;
        console.log('$scope.nav: ',$scope.nav);
        console.log('$location.$$path: ',$location.$$path);

        $scope.isActiveNav = function (link) {
            console.log('START isActiveNav FUNCTION');
            // console.log('link: ',link);
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
        console.log('START '+$scope.title+' CONTROLLER');
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cSummary', cSummary)

    function cSummary($scope) {
        $scope.title = "cSummary";
        console.log('START '+$scope.title+' CONTROLLER');
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cHome', cHome)

    function cHome($scope) {
        $scope.title = "cHome";
        console.log('START '+$scope.title+' CONTROLLER');
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cCrusts', cCrusts)

    function cCrusts($scope) {
        $scope.title = "cCrusts";
        console.log('START '+$scope.title+' CONTROLLER');
    }

// })();
// (function() {
//     'use strict';

    angular
        .module('pizza')
        .controller('cSauces', cSauces)

    function cSauces($scope) {
        $scope.title = "cSauces";
        console.log('START '+$scope.title+' CONTROLLER');
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
        console.log('START '+$scope.title+' CONTROLLER');
    }

})();
