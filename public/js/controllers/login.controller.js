(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController)

    LoginController.$inject = ['LoginService'];

    function LoginController(LoginService) {
        var vm = this;

        activate();

        function activate() { }
    }
})();