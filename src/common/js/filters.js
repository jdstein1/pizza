/*

See README for more info...

*/

(function() {
    'use strict';

    angular
        .module('pizza')
        .filter('filterReverse', function () {
          return filterReverse;
        })

    function filterReverse(input) {
        $scope.title = "filterReverse";
        console.log('START',$scope.title);
    }

})();
