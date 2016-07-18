angular.module('alurapic').controller('FotosController', function($scope, $http) { //não importa a ordem, o angular transforma em texto, processa os nomes e coloca direitinho
	
	//Pattern Promise - novidade especificação javascript
	fetch('v1/fotos')
	.then(res => res.json()) //já retorna o valor para o próximo then.
	.then(json => { //bloco anônimo de função
		$scope.fotos = json;
		$scope.$apply(); //Sinaliza que o scopo mudou - sempre que for assíncrono. o $http já faz isso.
	});

	/*
	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.catch(function(e){
		console.error('As fotos não foram carregadas');
	});
	*/

});