/**
 * Detailed view of any post
 */

var detailPost = ['$scope', 'Post', 'Backend', function ($scope, Post, Backend) {

    $scope.post = Post.data

    //Go back
    $scope.back = function () {
        window.history.back();
    };


    //Send to server a new comment
    $scope.sendComment = function () {

        var commentObj = {
            text: $scope.inputComment,
        };

        Backend.sendComment($scope.post.id, commentObj).then(
            function (response) {

                //With this we avoid to request again the comments
                $scope.post.comments.unshift(commentObj);
            },

            function (error) {
                alert(error);
            }
        );
    }
}];

angular.module('cutregram').controller('DetailPostController', detailPost);