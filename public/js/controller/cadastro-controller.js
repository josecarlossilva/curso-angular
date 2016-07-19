angular
    .module('alurapic')
    .controller('CadastroController', function ($scope, recursoFoto, $routeParams, cadastroDeFotos) {

      if ($routeParams.fotoId) {
        recursoFoto.get({fotoId : $routeParams.fotoId},function(foto) {
            $scope.foto = foto;
        }, function(error){
          console.log(erro)
          $scope.mensagem = "Não foi possível obter a foto"
        })

      } else {

        $scope.submeter = function() {
          if ($scope.formulario.$valid) {
              cadastroDeFotos.cadastrar($scope.foto)
              .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) {
                  $scope.foto = {};
                }
              })
              .catch(function(erro) {
                $scope.mensagem = erro.mensagem
              })
          } else {
            $scope.mensagem = 'Deu ruim';
          }
        }
      }
    });