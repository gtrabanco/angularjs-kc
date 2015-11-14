/**
 * Nav Controller
 */

var navController = ['$scope', '$route', function ($scope, $route) {

    //window.console.log('NavController');
    $scope.routeIsAll = function () {
        return $route.current && $route.current.$$route && $route.current.$$route.originalPath && $route.current.$$route.originalPath.toLowerCase() === '/all';
    };

    $scope.routeIsMy = function () {
        return $route.current && $route.current.$$route && $route.current.$$route.originalPath && $route.current.$$route.originalPath.toLowerCase() === '/my';
    };

}];
angular.
    module('cutregram').
    controller('NavController', navController);