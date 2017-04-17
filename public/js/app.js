(function () {
    'use strict';

    angular.module('app', [
        'app.routes',
        'app.login',
        'app.chat',
    ]);

    angular.module('app.routes', ['ngRoute']);
    angular.module('app.login', []);
    angular.module('app.chat', []);
})();