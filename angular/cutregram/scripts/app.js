angular.module('cutregram', []);

//window.console.log('app.js: The apikey is ', apikey);

//Config
angular.module('cutregram').config(function ($httpProvider) {

    // Config the http service to send the api key header
    $httpProvider.defaults.headers.common = {
        'X-Cutregram-Api-Key': apikey
    };

    // Config the default headers to avoid CORS
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
});