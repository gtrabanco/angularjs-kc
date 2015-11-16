//"use strict";

//var postCollection = ['$scope', '$http', 'Posts', 'Backend', 'ViewParams', function ($scope, $http, Posts, Backend, ViewParams) {
var postCollection = ['$scope', '$http', 'Posts', 'ViewParams', '$location', function ($scope, $http, Posts, ViewParams, $location) {

    //window.console.log($scope);
    $scope.title = ViewParams.title;

    //We need to handle Post because the pagination
    //$scope.posts = Posts.data;
    var posts = Posts.data;

    //Pagination properties
    $scope.pagination = {

        //Page change
        pageChange: function () {
            var first = ($scope.pagination.currentPage - 1) * $scope.pagination.pageElements;
            var last = first + $scope.pagination.pageElements;

            $scope.posts = posts.slice(first, last);
        },

        currentPage: 1,

        totalPosts: posts.length,

        //Elements by page
        pageElements: 5

    };

    //Force the first page to get results at start
    $scope.pagination.pageChange();

    $scope.navigate = function (postId) {
        $location.path('/details/' + postId);
    };

    //window.console.log(Posts.data);
    //$scope.posts = Posts.data;
    //$scope.addLike = function (post) {
    //    Backend.addLike(post.id).then(
    //        function (response) {
    //            post.likes++;
    //        }
    //    );
    //};
    //$scope.addDislike = function (post) {
    //    Backend.addDislike(post.id).then(
    //        function (response) {
    //            post.dislikes++;
    //        }
    //    );
    //};
    /*
    $scope.posts = [{
        id: 1,
        text: 'Lorem ipsum'
    }, {
        id: 2,
        text: 'Another Lorem ipsum'
    }];
    */
    /*
     {
     id: <number>,
     text: <text>,
     image_url: <image url>
     likes: <number>
     dislikes: <number>
     author: <username>
     coords: {
     latitude: <float>
     longitude: <float>
     }
     }
     */

    /*
    $http.get('http://cutregram-sp.appspot.com/api/1/posts').then(
        function (response) {

            //All Ok Code
            $scope.posts = response.data;
            //window.console.log(response.data);

    }, function (error) {

        //Something Wrong Code

    });
    //*/
}];
angular.
    module('cutregram').
    controller('PostsCollectionController', postCollection);