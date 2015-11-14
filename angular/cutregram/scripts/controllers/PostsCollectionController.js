//"use strict";

var postCollection = ['$scope', '$http', 'Posts', function ($scope, $http, Posts) {

    window.console.log(Posts.data);
    $scope.posts = Posts.data;
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