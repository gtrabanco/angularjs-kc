angular.module('cutregram').filter('wordwrap', function ($filter) {
    return function ( str, width, brk, cut, nLines ) {

        var rLines = [];
        var allLines = [];

        brk = brk || 'n';
        width = width || 75;
        cut = cut || false;

        if (!str) { return str; }

        var regex = '.{1,' +width+ '}(\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\S+?(\s|$)');

        allLines = str.match( RegExp(regex, 'g') );

        if (typeof(nLines) !== 'undefined' && nLines > 0) {
            for(var i=0; i < nLines; i++) {
                rLines[i] = allLines[i];
            }
        } else {
            rLines = allLines;
        }

        return rLines.join( brk );
    }
});