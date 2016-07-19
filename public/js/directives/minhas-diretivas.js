angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        var ddo = {}
        ddo.restrict = "AE"
        ddo.scope = {
            titulo: '@'
        }
        ddo.templateUrl = 'js/directives/html/meu-painel.html'
        ddo.transclude = true
        return ddo
    })
    .directive("minhaFoto", function () {
        var ddo = {}
        ddo.restrict = "AE"
        ddo.scope = {
            titulo: '@',
            url: '@'
        }
        ddo.templateUrl = 'js/directives/html/imagem-view.html'
        return ddo
    });