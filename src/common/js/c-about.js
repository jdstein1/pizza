(function() {
    'use strict';

    angular
        .module('pizza')
        .controller('cAbout', cAbout)

    function cAbout($scope) {
        $scope.title = "cAbout";
        // console.log('START '+$scope.title+' CONTROLLER');
    }

})();
