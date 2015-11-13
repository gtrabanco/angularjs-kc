//"use strict";

var postCollection = ['$scope', '$http', function ($scope, $http) {

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

    $http.get('http://cutregram-sp.appspot.com/api/1/posts').then(
        function (response) {

            //All Ok Code
            $scope.posts = response.data;
            //window.console.log(response.data);

    }, function (error) {

        //Something Wrong Code

    });
}];
var app = angular.module('cutregram');
app.controller('PostsCollectionController', postCollection);