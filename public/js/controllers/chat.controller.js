(function () {
    'use strict';

    angular
        .module('app.chat')
        .controller('ChatController', ChatController)

    ChatController.$inject = ['ChatService'];

    function ChatController(ChatService) {
        var vm = this;

        activate();

        function activate() { }
    }
})();