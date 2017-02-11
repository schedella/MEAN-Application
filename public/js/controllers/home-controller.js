(function () {
    var myApp = angular.module('clientApp');
    myApp.controller('homeController', ['$scope', function ($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        $scope.addSlide = function () {
            var newWidth = slides.length + 1;
            slides.push({
                image: '/img/img' + newWidth + '.jpg',
                text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 3],
                id: currIndex++
            });
        };

        for (var i = 0; i < 3; i++) {
            $scope.addSlide();
        }
        console.log(slides);
    }]);
})();