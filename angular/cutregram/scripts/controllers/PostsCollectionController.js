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

    $http.get('').then(function (response) {

        //All Ok

    }, function (error) {

        //Something Wrong
    });
}];
var app = angular.module('cutregram');
app.controller('PostsCollectionController', postCollection);