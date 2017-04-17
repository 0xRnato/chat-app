'use strict';

(function () {
    'use strict';

    angular.module('app.chat').factory('ChatService', ChatService);

    ChatService.$inject = ['$http'];

    function ChatService($http) {
        var service = {
            get: _get
        };

        return service;

        function _get() {
            return $http.get('/api/chat');
        }
    }
})();
(function () {
    'use strict';

    angular.module('app.login').factory('LoginService', LoginService);

    LoginService.$inject = ['$http'];

    function LoginService($http) {
        var service = {
            get: _get
        };

        return service;

        function _get() {
            return $http.get('/api/login');
        }
    }
})();