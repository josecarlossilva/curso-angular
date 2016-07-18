angular.module('diretivas',[])
		.directive("meuPanel", function() {
			var ddo = {
				restrict: 'E', //A para atributo, E para elemento, AE
				templateUrl: 'js/directives/panel.html',
				scope: {
					titulo: '@'
				},
				transclude: true
			}

			return ddo;
		})
		.directive("minhaImagem", function() {
			var ddo = {
				restrict: 'E', //A para atributo, E para elemento, AE
				template: '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}" />',
				scope: { //só é necesário pq queremos um escopo exlusivo.
					url: '@', //@ - texto; & - expressão para ser executada depois; = - 
					titulo: '@'
				}
			}

			return ddo;
		});