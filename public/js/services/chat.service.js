(function () {
    'use strict';

    angular
        .module('app.chat')
        .factory('ChatService', ChatService)

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