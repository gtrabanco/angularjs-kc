/**
 * Directive that shows each post in a colection
 */
angular.module('cutregram').
    directive('postElement', ['Backend', function (Backend) {
        //window.console.log('Directive start');

        return {
            //With restrict we can use it as element (E) or attribute (A) or both (AE)
            restrict: 'AE',

            //The view of directive
            //template: "html... code"
            //templateUrl: "path to html file"
            templateUrl: 'views/PostElement.html',

            //Communications interface
            scope: {
                post: '=', //With "=" bidirectional link
                onPostClick: '&' //With "&" notification from directive to fathers scope
            },

            //Logic of the directive. We can manipulate the DOM
            link: function (scope) {

                //window.console.log('Link in the directive');

                scope.notifyClick = function () {
                    scope.onPostClick({ postId: scope.post.id });
                };

                scope.addLike = function () {
                    Backend.addLike(scope.post.id).then(
                        function (response) {
                            scope.post.likes++;
                        }
                    );
                };
                scope.addDislike = function () {
                    Backend.addDislike(scope.post.id).then(
                        function (response) {
                            scope.post.dislikes++;
                        }
                    );
                };
            }
        };
    }]);