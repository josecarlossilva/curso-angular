angular.module('alurapic', ['diretivas', 'ngAnimate', 'ngRoute'])
		.config(function($routeProvider, $locationProvider){
			$locationProvider.html5Mode(true);
			$routeProvider.when('/fotos', {
				templateUrl: 'partials/principal.html',
				controller: 'FotosController'
			}).when('/fotos/new', {
				templateUrl: 'partials/foto.html'
			})
			//rota padrao
			$routeProvider.otherwise({redirectTo: '/fotos'});
		}); //A dependência é string pois as coisas são criadas em qualquer ordem. usar variável traria a necessidade de ordenação e pré-existência.