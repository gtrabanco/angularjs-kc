angular.module('cutregram', ['ngRoute', 'angular-loading-bar', 'ui.bootstrap']);

//window.console.log('app.js: The apikey is ', apikey);

//Config
angular.module('cutregram').config(function (BackendProvider, ApiKey, Properties) {
    /*
    // Config the http service to send the api key header
    $httpProvider.defaults.headers.common = {
        'X-Cutregram-Api-Key': ApiKey
    };

    // Config the default headers to avoid CORS
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    //*/

    //window.console.log('Config phase');
    BackendProvider.allowCorsRequest();
    BackendProvider.setApiUrl(Properties.ApiUrl);
    BackendProvider.setApiKey(ApiKey);
});

//Configuration to define the routes of the app

angular.module('cutregram').config(function ($routeProvider) {

    //All posts
    $routeProvider.when('/all', {
        controller: 'PostsCollectionController',
        templateUrl: 'views/PostsCollectionView.html',
        resolve: {
            //Posts: ['$http', function ($http) {
            //    return $http.get(Properties.ApiUrl + '/posts', {
            //        cache: true
            //    });
            //}]
            Posts: ['Backend', function (Backend) {
                //window.console.log(Backend.getAllPosts());
                return Backend.getAllPosts();
            }],

            ViewParams: [function () {
                return {
                    title: 'All Posts'
                }
            }]
        }
    });

    //My posts
    $routeProvider.when('/my', {
        controller: 'MyPostsCollectionController',
        templateUrl: 'views/MyPostsCollectionView.html',
        resolve: {
            //Posts: ['$http', function ($http) {
            //    return $http.get(Properties.ApiUrl + '/posts/me', {
            //        cache: true
            //    });
            //}]
            Posts: ['Backend', function (Backend) {
                return Backend.getMyPosts();
            }],

            ViewParams: [function () {
                return {
                    title: 'My Posts'
                }
            }]
        }
    });

    //Post details
    $routeProvider.when('/details/:postId', {
        controller: 'DetailPostController',
        templateUrl: 'views/DetailPostView.html',
        resolve: {
            Post: ['Backend', '$route', function (Backend, $route) {
                return Backend.getPost($route.current.params.postId);
            }]
        }
    });

    //Stablish a default route
    $routeProvider.otherwise({
        redirectTo: '/all'
    });
});