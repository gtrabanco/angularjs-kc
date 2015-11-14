angular.module('cutregram').provider('Backend', ['$httpProvider', function ($httpProvider) {

    var apiUrl = '';

    return {

        setApiKey: function (value) {

            // Config the http service to send the api key header
            $httpProvider.defaults.headers.common = {
                'X-Cutregram-Api-Key': value
            };
            //window.console.log('Setting the Api Key ', value);
        },

        setApiUrl: function (value) {

            //window.console.log('Setting the Api URL ', value);
            apiUrl = value;
        },

        allowCorsRequest: function () {

            //window.console.log('Allowing CORS');
            // Config the default headers to avoid CORS
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        },
        $get:['$http', function ($http) {

            return {
                getAllPosts: function () {
                    //window.console.log('Getting all posts');
                    return $http.get(apiUrl + '/posts', {
                        cache: true
                    });
                },

                getMyPosts: function () {
                    //window.console.log('Getting My Posts');
                    return $http.get(apiUrl + '/posts', {
                        cache: true
                    });
                }
            }
        }]
    }
}]);