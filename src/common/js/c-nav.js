(function() {
    'use strict';

    angular
        .module('pizza')
        .controller('cNav', cNav)

    function cNav($scope, $location, sNav) {
        $scope.title = "cNav";
        // console.log('START '+$scope.title+' CONTROLLER');

        $scope.navPredicate = 'order';
        $scope.navReverse = false;

        $scope.nav = sNav;
        // console.log('$scope.nav: ',$scope.nav);
        // console.log('$location.$$path: ',$location.$$path);

        $scope.isActiveNav = function (link) {
            // console.log('nav START isActiveNav FUNCTION');
            // console.log('nav path: '+$location.$$path);
            // console.log('nav link: '+link);
            return $location.$$path === link;
        };
    }

})();
