var myApp = angular.module('myApp');

myApp.controller('GamesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('GamesController ready...');

    $scope.getGames = function(){
        $http.get("/api/games").then(function(response){
            $scope.games = response.data;
        });
    }

    $scope.getGame = function(){
        var id = $routeParams.id;
        $http.get("/api/games/"+id).then(function(response){
            $scope.game = response.data;
        });
    }
}]);

