angular.module('cutregram', ['ngRoute']);

//window.console.log('app.js: The apikey is ', apikey);

//Config
angular.module('cutregram').config(function ($httpProvider, ApiKey) {

    // Config the http service to send the api key header
    $httpProvider.defaults.headers.common = {
        'X-Cutregram-Api-Key': ApiKey
    };

    // Config the default headers to avoid CORS
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
});

//Configuration to define the routes of the app

angular.module('cutregram').config(function ($routeProvider, Properties) {

    //All posts
    $routeProvider.when('/all', {
        controller: 'PostsCollectionController',
        templateUrl: 'views/PostsCollectionView.html',
        resolve: {
            Posts: ['$http', function ($http) {
                return $http.get(Properties.ApiUrl + '/posts', {
                    cache: true
                });
            }]
        }
    });

    //My posts
    $routeProvider.when('/my', {
        controller: 'MyPostsCollectionController',
        templateUrl: 'views/MyPostsCollectionView.html',
        resolve: {
            Posts: ['$http', function ($http) {
                return $http.get(Properties.ApiUrl + '/posts/me', {
                    cache: true
                });
            }]
        }
    });

    //Stablish a default route
    $routeProvider.otherwise({
        redirectTo: '/all'
    });
});