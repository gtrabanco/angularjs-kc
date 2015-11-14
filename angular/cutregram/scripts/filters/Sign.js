/**
 * Filter that writes a sign with an user and date
 *
 * Filter always return functions and always has
 *  at least the input param
 */
angular.
    module('cutregram').
    filter('Sign', function ($filter) {
        return function (author, date) {
            return 'By ' + author + ' on ' + $filter('date')(date, 'shortDate');
        };
    });