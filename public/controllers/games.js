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

    $scope.addGame = function(){
        console.log($scope.game);
            $http.post("/api/games/", $scope.game).then(function(response){
            window.location.assign('#/games/add');
        });
    }

    $scope.updateGame = function(){
            var id = $routeParams.id;
            $http.put("/api/games/"+id, $scope.game).then(function(response){
            window.location.assign('#/games');
        });
    }

    $scope.removeGame = function(id){
            $http.delete("/api/games/"+id).then(function(response){
            window.location.assign('#/games');
        });
    }
}]);

