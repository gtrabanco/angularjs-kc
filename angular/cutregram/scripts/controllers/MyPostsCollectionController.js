//"use strict";

var myPostCollection = ['$scope', '$http', 'Posts', function ($scope, $http, Posts) {

    $scope.posts = Posts.data;

    /*
    $http.get('http://cutregram-sp.appspot.com/api/1/posts/me').then(
        function (response) {

            //All Ok Code
            $scope.posts = response.data || [];
            //window.console.log(response.data);

    }, function (error) {

        //Something Wrong Code

    });
    //*/
}];
angular.
    module('cutregram').
    controller('MyPostsCollectionController', myPostCollection);