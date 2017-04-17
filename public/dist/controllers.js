'use strict';

(function () {
    'use strict';

    angular.module('app.chat').controller('ChatController', ChatController);

    ChatController.$inject = ['ChatService'];

    function ChatController(ChatService) {
        var vm = this;

        activate();

        function activate() {}
    }
})();
(function () {
    'use strict';

    angular.module('app.login').controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];

    function LoginController(LoginService) {
        var vm = this;

        activate();

        function activate() {}
    }
})();