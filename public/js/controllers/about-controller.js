(function () {
    var myApp = angular.module('clientApp');
    myApp.controller('aboutController', ['$scope', function ($scope) {
        $scope.message = 'About Page';
    }]);
})();