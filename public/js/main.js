angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.otherwise({redirectTo: '/fotos/new'});

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        }).when('/fotos/new', {
            templateUrl: 'partials/cadastro.html',
            controller : 'CadastroController'
        }).when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/cadastro.html',
            controller : 'CadastroController'
        });
    });