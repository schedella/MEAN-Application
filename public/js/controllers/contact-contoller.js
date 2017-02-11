(function () {
    var myApp = angular.module('clientApp');
    myApp.controller('contactController', ['$scope', function ($scope) {
        $scope.message = 'Contact Page';
    }]);
})();