"use strict";


onmessage = function (evn) {
    postMessage('As a worker I received data: ' + evn.data);
};


postMessage('I have a message for the html5 page. You will be dead.');