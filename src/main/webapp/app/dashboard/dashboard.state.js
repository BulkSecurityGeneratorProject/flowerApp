(function() {
    'use strict';

    angular
        .module('flowerApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('jhi-dashboard', {
            parent: 'home',
            url: '/dashboard',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Dashboard'
            },
            views: {
                'content@': {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'Dashboard',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
