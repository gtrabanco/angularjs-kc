//"use strict";

var myPostCollection = ['$scope', '$http', 'Posts', 'ViewParams', function ($scope, $http, Posts, ViewParams) {

    //window.console.log($scope);
    $scope.title = ViewParams.title;
    $scope.posts = Posts.data;
}];

angular.
    module('cutregram').
    controller('MyPostsCollectionController', myPostCollection);