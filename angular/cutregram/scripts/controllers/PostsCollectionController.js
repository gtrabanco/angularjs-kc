//"use strict";

//var postCollection = ['$scope', '$http', 'Posts', 'Backend', 'ViewParams', function ($scope, $http, Posts, Backend, ViewParams) {
var postCollection = ['$scope', '$http', 'Posts', 'ViewParams', function ($scope, $http, Posts, ViewParams) {

    //window.console.log($scope);
    $scope.title = ViewParams.title;
    $scope.posts = Posts.data;

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